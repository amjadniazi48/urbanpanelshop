"use client"

import { useState } from "react"
import { useActionState } from "react"
import { uploadSmashForm } from "../actions/smashForm"

export default function SmashForm() {
  const [imageCount, setImageCount] = useState(1)
  const [previews, setPreviews] = useState([]) // ⬅️ store preview URLs
  const [files, setFiles] = useState([]) // Added files state to track actual file objects

  const [state, formAction, pending] = useActionState(uploadSmashForm, null)

  const handleFileChange = (e, index) => {
    const file = e.target.files[0]
    if (!file) return

    // Create preview
    const newPreviews = [...previews]
    newPreviews[index] = URL.createObjectURL(file)
    setPreviews(newPreviews)

    const newFiles = [...files]
    newFiles[index] = file
    setFiles(newFiles)

    // Reveal next upload field
    if (index + 1 < 3 && imageCount < index + 2) {
      setImageCount(index + 2)
    }
  }

  const removeImage = (index) => {
    const newPreviews = [...previews]
    const newFiles = [...files]

    // Clean up the object URL to prevent memory leaks
    if (newPreviews[index]) {
      URL.revokeObjectURL(newPreviews[index])
    }

    newPreviews[index] = null
    newFiles[index] = null
    setPreviews(newPreviews)
    setFiles(newFiles)

    // Reset the file input
    const fileInput = document.querySelector(`input[name="photo${index + 1}"]`)
    if (fileInput) {
      fileInput.value = ""
    }
  }

  return (
    <form action={formAction} className="container p-4">
      {/* Step 1: Upload Images */}
      <div className="mb-4">
        <h5>1. Upload up to 3 clear photos of your smash</h5>
        {[...Array(imageCount)].map((_, index) => (
          <div className="mb-3" key={index}>
            <input
              type="file"
              name={`photo${index + 1}`}
              accept="image/*"
              className="form-control"
              onChange={(e) => handleFileChange(e, index)}
              required={index === 0}
            />
            {/* Show preview if available */}
            {previews[index] && (
              <div className="position-relative d-inline-block mt-2">
                <img
                  src={previews[index] || "/placeholder.svg"}
                  alt={`Preview ${index + 1}`}
                  className="img-thumbnail"
                  style={{ maxWidth: "200px" }}
                />
                <button
                  type="button"
                  className="btn btn-danger btn-sm position-absolute"
                  style={{
                    bottom: "5px",
                    right: "5px",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    padding: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => removeImage(index)}
                  title="Remove image"
                >
                  ×
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Step 2: Personal Details */}
      <div className="mb-4">
        <h5>2. Your details</h5>
        <input name="name" placeholder="Name*" className="form-control mb-2" required />
        <input name="phone" placeholder="Phone*" className="form-control mb-2" required />
        <input name="email" type="email" placeholder="Email*" className="form-control mb-2" required />
        <input name="suburb" placeholder="Suburb*" className="form-control mb-2" required />
        <textarea name="smashDetails" placeholder="Tell us about your smash*" className="form-control" required />
      </div>

      {/* Step 3: Vehicle Details */}
      <div className="mb-4">
        <h5>3. Vehicle details</h5>
        <input name="carMake" placeholder="Car make/model*" className="form-control mb-2" required />
        <input name="year" placeholder="Year*" type="number" className="form-control mb-2" required />
        <input name="registration" placeholder="Registration*" className="form-control mb-2" required />
        <div className="mb-3">
          <label className="d-block">Were you at fault?*</label>
          <div className="form-check form-check-inline">
            <input type="radio" name="fault" value="0" className="form-check-input" defaultChecked />
            <label className="form-check-label">No</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" name="fault" value="1" className="form-check-input" />
            <label className="form-check-label">Yes</label>
          </div>
        </div>
      </div>

      <button type="submit" className="btn btn-warning w-100" disabled={pending}>
        {pending ? "Uploading..." : "UPLOAD"}
      </button>

      {state?.message && <div className="alert alert-info mt-3">{state.message}</div>}
    </form>
  )
}
