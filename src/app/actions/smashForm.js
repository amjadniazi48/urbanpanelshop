// app/actions/smashForm.js
"use server"

import { z } from "zod"

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
        formData: Object.fromEntries(formData)
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
      formData: Object.fromEntries(formData)
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
    fault: formData.get("fault"),
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

    return {
      message: `Form submitted successfully ✅ with ${imageFiles.length} image(s)`,
      fieldErrors: {},
      success: true,
      formData: initialState.formData
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