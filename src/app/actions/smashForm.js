// app/actions/smashForm.js
"use server"

import { z } from "zod"
import { Resend } from "resend"

// Simple in-memory rate limiting
const rateLimitMap = new Map()

// Create a custom validation function that collects all errors
function validateFormData(formData) {
  const errors = {};
  let isValid = true;

  // Validate name
  if (!formData.name || formData.name.trim() === '') {
    errors.name = "Name is required";
    isValid = false;
  }

  // Validate phone
  if (!formData.phone || formData.phone.trim() === '') {
    errors.phone = "Phone is required";
    isValid = false;
  }

  // Validate email
  if (!formData.email || formData.email.trim() === '') {
    errors.email = "Email is required";
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Invalid email address";
    isValid = false;
  }

  // Validate suburb
  if (!formData.suburb || formData.suburb.trim() === '') {
    errors.suburb = "Suburb is required";
    isValid = false;
  }

  // Validate carMake
  if (!formData.carMake || formData.carMake.trim() === '') {
    errors.carMake = "Car model is required";
    isValid = false;
  }

  // Validate year
  if (!formData.year || formData.year.trim() === '') {
    errors.year = "Year is required";
    isValid = false;
  } else if (formData.year.length < 4) {
    errors.year = "Year must be at least 4 digits";
    isValid = false;
  } else {
    const yearNum = parseInt(formData.year);
    if (isNaN(yearNum) || yearNum < 1900 || yearNum > new Date().getFullYear() + 1) {
      errors.year = "Year must be a valid year";
      isValid = false;
    }
  }

  // Validate registration
  if (!formData.registration || formData.registration.trim() === '') {
    errors.registration = "Registration is required";
    isValid = false;
  }

  // Validate smashDetails
  if (!formData.smashDetails || formData.smashDetails.trim() === '') {
    errors.smashDetails = "Smash details are required";
    isValid = false;
  }

  // Validate at least one image
  const hasImage = (formData.photo1 && formData.photo1.size > 0) || 
                  (formData.photo2 && formData.photo2.size > 0) || 
                  (formData.photo3 && formData.photo3.size > 0);
  
  if (!hasImage) {
    errors.photo1 = "At least one image is required";
    isValid = false;
  }

  return { isValid, errors };
}

export async function uploadSmashForm(prevState, formData) {
  // Define initial form data structure
  const initialFormData = {
    name: "",
    phone: "",
    email: "",
    suburb: "",
    smashDetails: "",
    carMake: "",
    year: "",
    registration: "",
    fault: "0"
  };

  // Simple rate limiting
  const ip = "user-ip"
  const now = Date.now()
  const windowStart = now - 60000 // 1 minute window
  
  if (rateLimitMap.has(ip)) {
    const timestamps = rateLimitMap.get(ip).filter(time => time > windowStart)
    if (timestamps.length >= 5) {
      return {
        message: "Too many requests. Please try again later.",
        fieldErrors: {},
        success: false,
        formData: initialFormData
      }
    }
    timestamps.push(now)
    rateLimitMap.set(ip, timestamps)
  } else {
    rateLimitMap.set(ip, [now])
  }

  const jwt = process.env.STRAPI_JWT
  const strapiUrl = process.env.STRAPI_URL

  if (!jwt || !strapiUrl) {
    console.error("Missing Strapi configuration")
    return {
      message: "Server configuration error",
      fieldErrors: {},
      success: false,
      formData: initialFormData
    }
  }

  // Extract all form fields
  const rawFormData = {
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    suburb: formData.get("suburb"),
    smashDetails: formData.get("smashDetails"),
    carMake: formData.get("carMake"),
    year: formData.get("year"),
    registration: formData.get("registration"),
    fault: formData.get("fault") || "0",
    photo1: formData.get("photo1"),
    photo2: formData.get("photo2"),
    photo3: formData.get("photo3"),
  }

  // Validate form data using our custom validation
  const { isValid, errors } = validateFormData(rawFormData);
  
  if (!isValid) {
    return {
      message: "Please correct the errors below",
      fieldErrors: errors,
      success: false,
      formData: rawFormData
    }
  }

  try {
    // Get image files
    const photo1 = formData.get("photo1")
    const photo2 = formData.get("photo2")
    const photo3 = formData.get("photo3")

    // Collect all valid image files
    const imageFiles = [photo1, photo2, photo3].filter((file) => file && file.size > 0)

    let uploadedImageIds = []
    if (imageFiles.length > 0) {
      const uploadFormData = new FormData()

      // Add all image files to FormData
      imageFiles.forEach((file) => {
        uploadFormData.append("files", file)
      })

      const uploadResponse = await fetch(`${strapiUrl}/api/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        body: uploadFormData,
      })

      if (!uploadResponse.ok) {
        const uploadError = await uploadResponse.text()
        console.error("Failed to upload images:", uploadError)
        return {
          message: "Failed to upload images. Please try again.",
          fieldErrors: {
            photo1: "Image upload failed. Please try again."
          },
          success: false,
          formData: rawFormData
        }
      }

      const uploadedFiles = await uploadResponse.json()
      uploadedImageIds = uploadedFiles.map((file) => file.id)
    }

    // Map form field names to Strapi field names
    const smashData = {
      data: {
        name: rawFormData.name,
        phone: rawFormData.phone,
        email: rawFormData.email,
        suburb: rawFormData.suburb,
        description: rawFormData.smashDetails,
        model: rawFormData.carMake,
        year: Number.parseInt(rawFormData.year),
        registration: rawFormData.registration,
        myfault: rawFormData.fault === "1",
        images: uploadedImageIds,
      },
    }

    const res = await fetch(`${strapiUrl}/api/smashes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(smashData),
    })

    if (!res.ok) {
      const errorData = await res.text()
      console.error("Strapi error:", errorData)
      return {
        message: "Failed to save data. Please try again.",
        fieldErrors: {},
        success: false,
        formData: rawFormData
      }
    }

    const result = await res.json()

    // Send email notification to admin using Resend directly
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "noreply@resend.dev",
        to: "urbanpanelshop@gmail.com",
        subject: `New Smash Submission from ${rawFormData.name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #F7A604; padding: 20px; border-radius: 5px; }
                .header h1 { color: #000; margin: 0; }
                .section { margin: 20px 0; padding: 15px; background-color: #f9f9f9; border-radius: 5px; border-left: 4px solid #F7A604; }
                .section h2 { color: #333; margin-top: 0; }
                .field { margin: 10px 0; }
                .label { font-weight: bold; color: #555; }
                .value { color: #333; }
                .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>✔️ New Smash Submission Received</h1>
                </div>

                <div class="section">
                  <h2>Customer Details</h2>
                  <div class="field">
                    <span class="label">Name:</span>
                    <span class="value">${rawFormData.name}</span>
                  </div>
                  <div class="field">
                    <span class="label">Email:</span>
                    <span class="value"><a href="mailto:${rawFormData.email}">${rawFormData.email}</a></span>
                  </div>
                  <div class="field">
                    <span class="label">Phone:</span>
                    <span class="value"><a href="tel:${rawFormData.phone}">${rawFormData.phone}</a></span>
                  </div>
                  <div class="field">
                    <span class="label">Suburb/Location:</span>
                    <span class="value">${rawFormData.suburb}</span>
                  </div>
                </div>

                <div class="section">
                  <h2>Vehicle Information</h2>
                  <div class="field">
                    <span class="label">Car Make/Model:</span>
                    <span class="value">${rawFormData.carMake}</span>
                  </div>
                  <div class="field">
                    <span class="label">Registration:</span>
                    <span class="value">${rawFormData.registration}</span>
                  </div>
                  <div class="field">
                    <span class="label">Year:</span>
                    <span class="value">${rawFormData.year}</span>
                  </div>
                  <div class="field">
                    <span class="label">At Fault:</span>
                    <span class="value">${rawFormData.fault === "1" ? "Yes" : "No"}</span>
                  </div>
                </div>

                <div class="section">
                  <h2>Incident Details</h2>
                  <div class="field">
                    <span class="label">Description:</span>
                    <div class="value" style="white-space: pre-wrap; margin-top: 5px;">${rawFormData.smashDetails}</div>
                  </div>
                </div>

                <div class="footer">
                  <p>This is an automated email notification from the Urban Panel Shop submission form.</p>
                  <p>Login to your admin panel to view images and manage this submission.</p>
                </div>
              </div>
            </body>
          </html>
        `,
      });

      console.log("Email notification sent successfully to urbanpanelshop@gmail.com");
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError.message);
      // Don't fail the form submission if email fails
    }

    return {
      message: `Form submitted successfully ✅ with ${imageFiles.length} image(s)`,
      fieldErrors: {},
      success: true,
      formData: initialFormData
    }
  } catch (err) {
    console.error("Error in uploadSmashForm:", err)
    return {
      message: `Error submitting form ❌: ${err.message}`,
      fieldErrors: {},
      success: false,
      formData: rawFormData
    }
  }
}