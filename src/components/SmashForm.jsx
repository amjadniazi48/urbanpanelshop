// app/components/SmashForm.js
"use client";

import { useActionState, useEffect, useState } from "react";
import { uploadSmashForm } from "@/app/actions/smashForm";
import { ImageUp } from "lucide-react";

const initialState = {
  message: "",
  fieldErrors: {},
  success: false,
  formData: {
    name: "",
    phone: "",
    email: "",
    suburb: "",
    smashDetails: "",
    carMake: "",
    year: "",
    registration: "",
    fault: "0",
  },
};

export default function SmashForm() {
  const [state, formAction, isPending] = useActionState(
    uploadSmashForm,
    initialState
  );
  const [imageCount, setImageCount] = useState(0);
  const [imagePreviews, setImagePreviews] = useState([null, null, null]);
  const [isAtFault, setIsAtFault] = useState(state.formData?.fault || "0");
  const [formValues, setFormValues] = useState(
    state.formData || initialState.formData
  );

  useEffect(() => {
    if (state.success) {
      // Reset form on success
      document.getElementById("smash-form").reset();
      setImageCount(0);
      setImagePreviews([null, null, null]);
      setIsAtFault("0");
      setFormValues(initialState.formData);
    } else if (state.formData) {
      // Update form values from server action response
      setFormValues(state.formData);
      setIsAtFault(state.formData.fault || "0");
    }
  }, [state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert("File size must be less than 10MB");
        e.target.value = "";
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        const newPreviews = [...imagePreviews];
        newPreviews[index] = e.target.result;
        setImagePreviews(newPreviews);
      };
      reader.readAsDataURL(file);

      // Show next image field
      if (index === imageCount) {
        setImageCount((prev) => prev + 1);
      }
    }
  };

  const removeImage = (index) => {
    // Clear the file input
    const fileInput = document.getElementById(`photo${index + 1}`);
    if (fileInput) fileInput.value = "";

    // Update previews
    const newPreviews = [...imagePreviews];
    newPreviews[index] = null;
    setImagePreviews(newPreviews);

    // Adjust visible image fields
    if (index === imageCount - 1) {
      setImageCount((prev) => prev - 1);
    }
  };

  const handleFaultChange = (value) => {
    setIsAtFault(value);
    setFormValues((prev) => ({
      ...prev,
      fault: value,
    }));
  };

  return (
    <>
      {/* Validation message below the main heading */}
      {state.message && !state.success && (
        <div className="alert alert-danger mb-4" role="alert">
          {state.message}
        </div>
      )}

      <form
        id="smash-form"
        action={formAction}
        className="needs-validation"
        noValidate
      >
        {/* Section 1: Upload Images */}
        <div
          className="card mb-5 pt-2"
          style={{ backgroundColor: "#FAFAFA", textAlign: "left" }}
        >
          <div className="card-body">
            <h2 className="h4 mb-3">
              <span className="badge bg-warning text-dark">1</span>
              &nbsp;&nbsp;Upload up to 3 clear photos of your smash
            </h2>
            <p className="text-muted mb-3">Upload image file*</p>

            <div className="row g-3 ">
              {imageCount >= 0 && (
                <div className="col-md-4">
                  <div className="border rounded p-3 h-100">
                    <label htmlFor="photo1" className="form-label d-block">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={!!imagePreviews[0]}
                          readOnly
                        />
                        <span className="ms-2">
                          Photo 1 (max file size 10MB)
                        </span>
                      </div>
                    </label>
                    <input
                      type="file"
                      id="photo1"
                      name="photo1"
                      accept="image/*"
                      className={`form-control mt-2 ${
                        state.fieldErrors?.photo1 ? "is-invalid" : ""
                      }`}
                      onChange={(e) => handleImageChange(e, 0)}
                    />
                    {state.fieldErrors?.photo1 && (
                      <div className="invalid-feedback d-block">
                        {state.fieldErrors.photo1}
                      </div>
                    )}
                    {imagePreviews[0] && (
                      <div
                        className="mt-2 position-relative"
                        style={{ width: "100%", height: "150px" }}
                      >
                        <img
                          src={imagePreviews[0]}
                          alt="Preview 1"
                          className="img-thumbnail w-100 h-100 object-fit-cover"
                        />
                        <button
                          type="button"
                          className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1"
                          onClick={() => removeImage(0)}
                          style={{
                            width: "30px",
                            height: "30px",
                            padding: "0",
                            borderRadius: "15px",
                          }}
                        >
                          ×
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {imageCount >= 1 && (
                <div className="col-md-4">
                  <div className="border rounded p-3 h-100">
                    <label htmlFor="photo2" className="form-label d-block">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={!!imagePreviews[1]}
                          readOnly
                        />
                        <span className="ms-2">
                          Photo 2 (max file size 10MB)
                        </span>
                      </div>
                    </label>
                    <input
                      type="file"
                      id="photo2"
                      name="photo2"
                      accept="image/*"
                      className={`form-control mt-2 ${
                        state.fieldErrors?.photo2 ? "is-invalid" : ""
                      }`}
                      onChange={(e) => handleImageChange(e, 1)}
                    />
                    {state.fieldErrors?.photo2 && (
                      <div className="invalid-feedback d-block">
                        {state.fieldErrors.photo2}
                      </div>
                    )}
                    {imagePreviews[1] && (
                      <div
                        className="mt-2 position-relative"
                        style={{ width: "100%", height: "150px" }}
                      >
                        <img
                          src={imagePreviews[1]}
                          alt="Preview 2"
                          className="img-thumbnail w-100 h-100 object-fit-cover"
                        />
                        <button
                          type="button"
                          className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1"
                          onClick={() => removeImage(1)}
                          style={{
                            width: "30px",
                            height: "30px",
                            padding: "0",
                            borderRadius: "15px",
                          }}
                        >
                          ×
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {imageCount >= 2 && (
                <div
                  className="col-md-4"
                  style={{ backgroundColor: "#FAFAFA" }}
                >
                  <div className="border rounded p-3 h-100">
                    <label htmlFor="photo3" className="form-label d-block">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={!!imagePreviews[2]}
                          readOnly
                        />
                        <span className="ms-2">
                          Photo 3 (max file size 10MB)
                        </span>
                      </div>
                    </label>
                    <input
                      type="file"
                      id="photo3"
                      name="photo3"
                      accept="image/*"
                      className={`form-control mt-2 ${
                        state.fieldErrors?.photo3 ? "is-invalid" : ""
                      }`}
                      onChange={(e) => handleImageChange(e, 2)}
                    />
                    {state.fieldErrors?.photo3 && (
                      <div className="invalid-feedback d-block">
                        {state.fieldErrors.photo3}
                      </div>
                    )}
                    {imagePreviews[2] && (
                      <div
                        className="mt-2 position-relative"
                        style={{ width: "100%", height: "150px" }}
                      >
                        <img
                          src={imagePreviews[2]}
                          alt="Preview 3"
                          className="img-thumbnail w-100 h-100 object-fit-cover"
                        />
                        <button
                          type="button"
                          className="btn btn-danger btn-sm position-absolute top-0 end-0 m-1"
                          onClick={() => removeImage(2)}
                          style={{
                            width: "30px",
                            height: "30px",
                            padding: "0",
                            borderRadius: "15px",
                          }}
                        >
                          ×
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {state.fieldErrors?.photo1 &&
              !imagePreviews[0] &&
              !imagePreviews[1] &&
              !imagePreviews[2] && (
                <div className="text-danger mt-2">
                  Please upload at least one image of the damaged area of the
                  vehicle
                </div>
              )}

            <div className="mt-4" style={{ textAlign: "left" }}>
              <h3 className="h5">Our photo upload guidelines</h3>
              <p className="text-muted">
               To provide you with an accurate quote, please share up to 3 clear photos of your vehicle by following the guidelines below:
              </p>
              <div className="card-group">
                <div className="card">
                  <img src="assets/img/smashes/1.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                 
                    <p className="card-text">
                    Capture the entire vehicle in the photo, including all visible damages.
                    </p>
                   
                  </div>
                </div>
                <div className="card">
                  <img src="assets/img/smashes/2.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                  
                    <p className="card-text">
                    Please provide a close-up photo of the damaged section.
                    </p>
                  
                  </div>
                </div>
                <div className="card">
                  <img src="assets/img/smashes/2.jpg" className="card-img-top" alt="..." />
                  <div className="card-body">
                  
                    <p className="card-text">
                    Upload a detailed picture focusing on the damaged area.
                    </p>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Your Details */}
        <div
          className="card"
          style={{
            backgroundColor: "#FAFAFA",
            paddingBottom: "5rem",
            marginBottom: "3rem",
            textAlign: "left",
          }}
        >
          <div className="card-body">
            <h2 className="h4 mb-3 pt-2">
              {" "}
              <span className="badge bg-warning text-dark">2</span>&nbsp;&nbsp;
              Your details
            </h2>

            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label fw-bold">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  className={`form-control ${
                    state.fieldErrors?.name ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your name"
                  required
                />
                {state.fieldErrors?.name && (
                  <div className="invalid-feedback">
                    {state.fieldErrors.name}
                  </div>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="email" className="form-label fw-bold">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  className={`form-control ${
                    state.fieldErrors?.email ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your email"
                  required
                />
                {state.fieldErrors?.email && (
                  <div className="invalid-feedback">
                    {state.fieldErrors.email}
                  </div>
                )}
              </div>

              <div className="col-12">
                <label htmlFor="smashDetails" className="form-label fw-bold">
                  Tell us about your smash*
                </label>
                <textarea
                  id="smashDetails"
                  name="smashDetails"
                  value={formValues.smashDetails}
                  onChange={handleInputChange}
                  rows={3}
                  className={`form-control ${
                    state.fieldErrors?.smashDetails ? "is-invalid" : ""
                  }`}
                  placeholder="What happened? Who's your insurer?"
                  required
                ></textarea>
                <div className="form-text">
                  What happened? Who's your insurer?*
                </div>
                {state.fieldErrors?.smashDetails && (
                  <div className="invalid-feedback">
                    {state.fieldErrors.smashDetails}
                  </div>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="phone" className="form-label fw-bold">
                  Phone*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className={`form-control ${
                    state.fieldErrors?.phone ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your phone"
                  required
                />
                {state.fieldErrors?.phone && (
                  <div className="invalid-feedback">
                    {state.fieldErrors.phone}
                  </div>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="suburb" className="form-label fw-bold">
                  Suburb*
                </label>
                <input
                  type="text"
                  id="suburb"
                  name="suburb"
                  value={formValues.suburb}
                  onChange={handleInputChange}
                  className={`form-control ${
                    state.fieldErrors?.suburb ? "is-invalid" : ""
                  }`}
                  placeholder="Search by suburb or postcode"
                  required
                />
                {state.fieldErrors?.suburb && (
                  <div className="invalid-feedback">
                    {state.fieldErrors.suburb}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Vehicle Details */}
        <div
          className="card mb-4"
          style={{ backgroundColor: "#FAFAFA", paddingBottom: "5rem" }}
        >
          <div className="card-body" style={{ textAlign: "left" }}>
            <h2 className="h4 mb-3 pt-2">
              {" "}
              <span className="badge bg-warning text-dark">3</span>&nbsp;&nbsp;
              Vehicle details
            </h2>

            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="carMake" className="form-label fw-bold">
                  Car make/model*
                </label>
                <input
                  type="text"
                  id="carMake"
                  name="carMake"
                  value={formValues.carMake}
                  onChange={handleInputChange}
                  className={`form-control ${
                    state.fieldErrors?.carMake ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your car make/model"
                  required
                />
                {state.fieldErrors?.carMake && (
                  <div className="invalid-feedback">
                    {state.fieldErrors.carMake}
                  </div>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="registration" className="form-label fw-bold">
                  Registration*
                </label>
                <input
                  type="text"
                  id="registration"
                  name="registration"
                  value={formValues.registration}
                  onChange={handleInputChange}
                  className={`form-control ${
                    state.fieldErrors?.registration ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your registration"
                  required
                />
                {state.fieldErrors?.registration && (
                  <div className="invalid-feedback">
                    {state.fieldErrors.registration}
                  </div>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="year" className="form-label fw-bold">
                  Year*
                </label>
                <input
                  type="number"
                  id="year"
                  name="year"
                  value={formValues.year}
                  onChange={handleInputChange}
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  className={`form-control ${
                    state.fieldErrors?.year ? "is-invalid" : ""
                  }`}
                  placeholder="Enter year"
                  required
                />
                {state.fieldErrors?.year && (
                  <div className="invalid-feedback">
                    {state.fieldErrors.year}
                  </div>
                )}
              </div>

              <div className="col-md-6">
                <label className="form-label fw-bold d-block">
                  Were you at fault?*
                </label>
                <div className="btn-group" role="group">
                  <input
                    type="radio"
                    className="btn-check"
                    name="fault"
                    id="faultNo"
                    value="0"
                    checked={isAtFault === "0"}
                    onChange={() => handleFaultChange("0")}
                  />
                  <label
                    className={`btn ${
                      isAtFault === "0" ? "btn-warning" : "btn-outline-warning"
                    }`}
                    htmlFor="faultNo"
                  >
                    No
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="fault"
                    id="faultYes"
                    value="1"
                    checked={isAtFault === "1"}
                    onChange={() => handleFaultChange("1")}
                  />
                  <label
                    className={`btn ${
                      isAtFault === "1" ? "btn-warning" : "btn-outline-warning"
                    }`}
                    htmlFor="faultYes"
                  >
                    Yes
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isPending}
            className="btn btn-lg d-inline-flex align-items-center justify-content-center"
            style={{ backgroundColor: "#F7A604" }}
          >
            {isPending ? (
              <>
                <span
                  className=" me-2 text-dark"
                  role="status"
                  aria-hidden="true"
                >
                  {" "}
                  <ImageUp size={28} strokeWidth={2.2} />
                  &nbsp;UPLOADING...
                </span>
              </>
            ) : (
              <span className="text-dark">
                <ImageUp size={28} strokeWidth={2.2} />
                &nbsp;UPLOAD
              </span>
            )}
          </button>
        </div>

        {/* Success Message */}
        {state.message && state.success && (
          <div className="alert alert-success mt-4" role="alert">
            {state.message}
          </div>
        )}
      </form>
    </>
  );
}
