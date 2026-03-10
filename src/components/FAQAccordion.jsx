"use client";
import { useState } from "react";

export default function FaqAccordion({ data }) {
  const { faqs } = data;
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      style={{
        padding: "80px 0",
        background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)",
        width: "100%",
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
     
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          margin: "0 auto",
          padding: "0 20px",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#1a1a1a",
              margin: 0,
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                style={{
                  background: "#ffffff",
                  borderRadius: "12px",
                  // Use inset box-shadow instead of border so it doesn't
                  // add to the element's box size and cause overflow
                  boxShadow: isOpen
                    ? "inset 0 0 0 2px #fdb913, 0 6px 20px rgba(253,185,19,0.15)"
                    : "inset 0 0 0 2px #e8e8e8",
                  overflow: "hidden",
                  transition: "box-shadow 0.3s ease",
                  boxSizing: "border-box",
                  width: "100%",
                }}
                onMouseEnter={(e) => {
                  if (!isOpen) {
                    e.currentTarget.style.boxShadow =
                      "inset 0 0 0 2px #fdb913, 0 4px 12px rgba(253,185,19,0.1)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isOpen) {
                    e.currentTarget.style.boxShadow =
                      "inset 0 0 0 2px #e8e8e8";
                  }
                }}
              >
                {/* Question button */}
                <button
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 20px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    boxSizing: "border-box",
                  }}
                >
                  <span
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 600,
                      color: "#1a1a1a",
                      paddingRight: "20px",
                      lineHeight: 1.5,
                    }}
                  >
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span
                    style={{
                      flexShrink: 0,
                      width: "36px",
                      height: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#fdb913",
                      borderRadius: "50%",
                      transition: "transform 0.3s ease",
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        color: "#ffffff",
                        transition: "transform 0.3s ease",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        display: "block",
                      }}
                    >
                      <path
                        d="M12 15L12 9M9 12L15 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>

                {/* Answer — CSS transition on maxHeight */}
                <div
                  style={{
                    maxHeight: isOpen ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0 24px 16px 24px",
                      color: "#666666",
                      fontSize: "1rem",
                      lineHeight: 1.7,
                    }}
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}