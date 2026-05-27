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

    // Send thank you email notification to customer using Resend
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "Urban Panel Shop <noreply@urbanpanelshop.com>",
        to: rawFormData.email,
        subject: "Thank You for Your Submission – Urban Panel Shop",
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background: linear-gradient(135deg, #F7A604 0%, #F59E0B 100%); padding: 30px; border-radius: 8px; text-align: center; color: white; }
                .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
                .header p { margin: 10px 0 0 0; font-size: 16px; opacity: 0.95; }
                .content { padding: 30px 0; }
                .section { margin: 20px 0; }
                .section p { margin: 0 0 15px 0; }
                .reference-box { background-color: #f0f4f8; padding: 15px; border-radius: 5px; border-left: 4px solid #F7A604; margin: 20px 0; }
                .reference-box p { margin: 8px 0; font-size: 14px; }
                .reference-label { font-weight: 600; color: #555; display: inline-block; min-width: 100px; }
                .footer { margin-top: 40px; padding: 30px; background-color: #f9f9f9; border-radius: 8px; border-top: 2px solid #F7A604; }
                .footer-title { font-weight: 600; font-size: 16px; color: #333; margin-bottom: 15px; }
                .contact-info { margin: 10px 0; font-size: 14px; }
                .contact-label { font-weight: 600; color: #555; }
                .divider { border-top: 1px solid #ddd; margin: 20px 0; }
                .button { display: inline-block; padding: 12px 30px; background-color: #F7A604; color: white; text-decoration: none; border-radius: 5px; margin-top: 15px; font-weight: 600; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>Thank You for Your Submission</h1>
                  <p>Urban Panel Shop</p>
                </div>

                <div class="content">
                  <div class="section">
                    <p>Dear ${rawFormData.name},</p>
                    <p>Thank you for choosing <strong>Urban Panel Shop</strong> for your smash repair needs. We have successfully received your submission and appreciate you providing us with the details of your vehicle damage.</p>
                  </div>

                  <div class="section">
                    <p>Our team will review your information shortly and contact you as soon as possible to provide you with a quote and discuss your repair options.</p>
                  </div>

                  <div class="reference-box">
                    <p><span class="reference-label">Reference Details:</span></p>
                    <p style="margin-top: 12px;">
                      <strong style="color: #333;">${rawFormData.carMake}</strong><br>
                      Year: ${rawFormData.year} | Registration: ${rawFormData.registration}<br>
                      Location: ${rawFormData.suburb}
                    </p>
                  </div>

                  <div class="section">
                    <p><strong>What happens next?</strong></p>
                    <p>Our experienced team will:</p>
                    <ul style="margin: 10px 0; padding-left: 20px;">
                      <li>Review your submission and photos</li>
                      <li>Provide you with a comprehensive repair quote</li>
                      <li>Discuss your repair timeline and options</li>
                      <li>Keep you updated throughout the repair process</li>
                    </ul>
                  </p>
                  </div>
                </div>

                <div class="footer">
                  <div class="footer-title">Get In Touch With Us</div>
                  <div class="contact-info">
                    <strong style="display: block; margin-bottom: 15px; color: #333;">Urban Panel Shop</strong>
                    1/6 Newton Drive<br>
                    Somerton VIC 3062<br>
                    Australia
                  </div>
                  
                  <div style="margin-top: 20px;">
                    <p style="margin: 0; font-weight: 600; color: #F7A604; font-size: 16px;">📞 Special Contact Number</p>
                    <p style="margin: 8px 0; font-size: 18px; font-weight: 600; color: #333;">
                      <a href="tel:0383519771" style="color: #F7A604; text-decoration: none;">03 8351 9771</a>
                    </p>
                  </div>

                  <div class="divider"></div>
                  <p style="margin: 0; font-size: 12px; color: #999; text-align: center;">
                    This is an automated confirmation email from Urban Panel Shop. Please do not reply to this email.<br>
                    If you have any questions, please contact us using the details above.
                  </p>
                </div>
              </div>
            </body>
          </html>
        `,
      });

      console.log(`Thank you email sent successfully to customer: ${rawFormData.email}`);
    } catch (emailError) {
      console.error("Failed to send thank you email:", emailError.message);
      // Don't fail the form submission if email fails
    }

    // Send admin notification email
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      // Collect CC emails
      const ccEmails = [
        process.env.ADMIN_EMAIL_2,
        process.env.ADMIN_EMAIL_3,
      ].filter(Boolean); // Remove undefined/empty values
      
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "Urban Panel Shop <noreply@urbanpanelshop.com>",
        to: "urbanpanelshop@gmail.com",
        cc: ccEmails.length > 0 ? ccEmails : undefined,
        subject: `New Smash Submission from ${rawFormData.name}`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { background-color: #F7A604; padding: 20px; border-radius: 5px; }
                .header h1 { color: #fff; margin: 0; }
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

      console.log("Admin notification email sent successfully to urbanpanelshop@gmail.com");
    } catch (emailError) {
      console.error("Failed to send admin notification email:", emailError.message);
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