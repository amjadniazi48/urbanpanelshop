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
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`faq-item ${openIndex === index ? "active" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span className="question-text">{faq.question}</span>
                <span className="faq-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`icon ${openIndex === index ? "rotate" : ""}`}
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

              <div
                className="faq-answer-wrapper"
                style={{
                  maxHeight: openIndex === index ? "500px" : "0",
                }}
              >
                <div
                  className="faq-answer"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .faq-section {
          padding: 80px 0;
          background: linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%);
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .faq-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .faq-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }

        .faq-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: #ffffff;
          border-radius: 12px;
          border: 2px solid #e8e8e8;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: #fdb913;
          box-shadow: 0 4px 12px rgba(253, 185, 19, 0.1);
        }

        .faq-item.active {
          border-color: #fdb913;
          box-shadow: 0 6px 20px rgba(253, 185, 19, 0.15);
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          background: transparent;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: all 0.3s ease;
        }

        .question-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1a1a1a;
          padding-right: 20px;
          line-height: 1.5;
        }

        .faq-icon {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fdb913;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .faq-icon svg {
          color: #ffffff;
          transition: transform 0.3s ease;
        }

        .faq-icon .icon.rotate {
          transform: rotate(45deg);
        }

        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .faq-answer {
          padding: 0 24px 16px 24px;
          color: #666666;
          font-size: 1rem;
          line-height: 1.7;
        }

        .faq-answer :global(p) {
          margin: 0 0 12px 0;
        }

        .faq-answer :global(p:last-child) {
          margin-bottom: 0;
        }

        .faq-answer :global(a) {
          color: #fdb913;
          text-decoration: none;
          font-weight: 500;
        }

        .faq-answer :global(a:hover) {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .faq-section {
            padding: 60px 0;
          }

          .faq-header h2 {
            font-size: 2rem;
          }

          .faq-question {
            padding: 20px;
          }

          .question-text {
            font-size: 1rem;
          }

          .faq-icon {
            width: 32px;
            height: 32px;
          }

          .faq-answer {
            padding: 0 20px 20px 20px;
            font-size: 0.95rem;
          }
        }
      `}</style>
    </section>
  );
}