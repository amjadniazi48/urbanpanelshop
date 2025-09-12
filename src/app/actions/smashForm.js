"use server"

import { z } from "zod"

const smashFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.string().email("Invalid email address"),
  suburb: z.string().min(1, "Suburb is required"),
  description: z.string().min(1, "Smash details are required"),
  model: z.string().min(1, "Car model is required"),
  year: z.string().min(4, "Year must be at least 4 digits"),
  registration: z.string().min(1, "Registration is required"),
  myfault: z.string(),
})

export async function uploadSmashForm(prevState, formData) {
  try {
    const jwt = process.env.STRAPI_JWT
    const strapiUrl = process.env.STRAPI_URL

    // Extract all form fields
    const formFields = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      suburb: formData.get("suburb"),
      description: formData.get("smashDetails"),
      model: formData.get("carMake"),
      year: formData.get("year"),
      registration: formData.get("registration"),
      myfault: formData.get("fault"),
    }

    const validationResult = smashFormSchema.safeParse(formFields)
    if (!validationResult.success) {
      const errors = validationResult.error.errors.map((err) => `${err.path[0]}: ${err.message}`).join(", ")
      return {
        message: `Validation errors: ${errors}`,
      }
    }

    const validatedData = validationResult.data

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

      console.log("[v0] Uploading images first (Strapi v5 pattern)")

      const uploadResponse = await fetch(`${strapiUrl}/api/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        body: uploadFormData,
      })

      if (!uploadResponse.ok) {
        const uploadError = await uploadResponse.json()
        console.error("Failed to upload images:", uploadError)
        return {
          message: `Failed to upload images: ${uploadError.error?.message || "Unknown error"}`,
        }
      }

      const uploadedFiles = await uploadResponse.json()
      uploadedImageIds = uploadedFiles.map((file) => file.id)
      console.log("Successfully uploaded images with IDs:", uploadedImageIds)
    }

    const smashData = {
      data: {
        name: validatedData.name,
        phone: validatedData.phone,
        email: validatedData.email,
        suburb: validatedData.suburb,
        description: validatedData.description,
        model: validatedData.model,
        year: Number.parseInt(validatedData.year),
        registration: validatedData.registration,
        myfault: validatedData.myfault === "1", // Convert to boolean
        images: uploadedImageIds, // Include uploaded image IDs
      },
    }

    console.log("[v0] Creating smash record with image IDs:", smashData)

    const res = await fetch(`${strapiUrl}/api/smashes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify(smashData),
    })

    if (!res.ok) {
      const errorData = await res.json()
      console.error("Strapi error:", errorData)
      throw new Error(`Failed to save in Strapi: ${res.statusText}`)
    }

    const result = await res.json()
    console.log("Successfully created smash record:", result.data.id)

    return {
      message: `Form submitted successfully ✅ ${imageFiles.length > 0 ? `with ${imageFiles.length} image(s)` : ""}`,
    }
  } catch (err) {
    console.error("Error in uploadSmashForm:", err)
    return {
      message: `Error submitting form ❌: ${err.message}`,
    }
  }
}
