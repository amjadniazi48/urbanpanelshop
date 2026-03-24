import Link from "next/link";
import { ImageUp } from "lucide-react";

const Pricing = ({ data }) => {
  if (!data || !data.Pricing || data.Pricing.length === 0) {
    return null;
  }

  const { heading, subheading, Features = [], Pricing: rows = [] } = data;

  const headingWords = heading ? heading.trim().split(" ") : [];
  const headingMain = headingWords.slice(0, -1).join(" ");
  const headingAccent = headingWords.slice(-1)[0];

  return (
    <>
      {/* ── Injected responsive styles ── */}
      <style>{`
        .pricing-section {
          background: #ffffff;
          padding: 60px 16px;
          box-sizing: border-box;
          width: 100%;
          overflow-x: hidden;
        }

        /* ── Header ── */
        .pricing-header {
          text-align: center;
          margin-bottom: 40px;
          padding: 0 8px;
        }
        .pricing-eyebrow {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #f5a623;
          margin-bottom: 10px;
        }
        .pricing-title {
          font-size: clamp(22px, 3vw, 34px);
          font-weight: 700;
          color: #0f1c2e;
          line-height: 1.3;
          margin: 0 0 14px;
        }
        .pricing-subtitle {
          color: #6b7a8d;
          font-size: 15px;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* ── Panel wrapper ── */
        .pricing-panel {
          max-width: 1080px;
          width: 100%;
          margin: 0 auto;
          box-sizing: border-box;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 32px rgba(15,28,46,0.10);
          display: grid;
          grid-template-columns: minmax(0, 260px) minmax(0, 1fr);
          border: 1px solid #e8f0eb;
        }

        /* ── LEFT trust panel ── */
        .pricing-trust {
          background: linear-gradient(160deg, #0f1c2e 0%, #1a3352 100%);
          padding: 36px 24px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          box-sizing: border-box;
          min-width: 0;
        }
        .pricing-trust-title {
          color: #ffffff;
          font-size: 17px;
          font-weight: 700;
          line-height: 1.4;
          margin-bottom: 6px;
        }
        .pricing-trust-sub {
          color: #7a9eb5;
          font-size: 12px;
          margin-bottom: 22px;
          line-height: 1.65;
        }
        .pricing-features {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .pricing-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          margin-bottom: 10px;
        }
        .pricing-feature-dot {
          flex-shrink: 0;
          margin-top: 3px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: rgba(31,187,140,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pricing-feature-text {
          color: #b8cfe0;
          font-size: 12px;
          line-height: 1.5;
          word-break: break-word;
        }
        .pricing-rating {
          margin-top: 24px;
          background: rgba(31,187,140,0.09);
          border: 1px solid rgba(31,187,140,0.22);
          border-radius: 8px;
          padding: 11px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .pricing-rating-score {
          font-size: 22px;
          font-weight: 800;
          color: #1fbb8c;
          line-height: 1;
          flex-shrink: 0;
        }
        .pricing-rating-stars {
          color: #f5a623;
          font-size: 12px;
          margin-bottom: 2px;
        }
        .pricing-rating-label {
          color: #7a9eb5;
          font-size: 10px;
        }

        /* ── RIGHT table ── */
        .pricing-table-wrap {
          background: #ffffff;
          min-width: 0;
          box-sizing: border-box;
          overflow-x: auto;
        }
        .pricing-table-header {
          display: grid;
          grid-template-columns: minmax(0,1fr) minmax(0,120px) minmax(0,110px);
          padding: 12px 24px;
          background: #f4faf7;
          border-bottom: 1.5px solid #d6ede3;
          box-sizing: border-box;
        }
        .pricing-col-label {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: #1fbb8c;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pricing-row {
          display: grid;
          grid-template-columns: minmax(0,1fr) minmax(0,120px) minmax(0,110px);
          align-items: center;
          padding: 15px 24px;
          box-sizing: border-box;
          transition: background 0.15s;
          cursor: default;
        }
        .pricing-row:hover { background: #f4faf7 !important; }
        .pricing-row-service {
          font-size: 13px;
          font-weight: 600;
          color: #0f1c2e;
          line-height: 1.4;
          padding-right: 8px;
          word-break: break-word;
        }
        .pricing-row-price {
          font-size: 13px;
          font-weight: 700;
          color: #0f1c2e;
          white-space: nowrap;
        }
        .pricing-badge {
          display: inline-block;
          background: #eaf8f2;
          color: #1fbb8c;
          border: 1px solid #c2ead8;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 600;
          white-space: nowrap;
        }
        .pricing-footer {
          padding: 13px 24px;
          background: #f4faf7;
          border-top: 1.5px solid #d6ede3;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          box-sizing: border-box;
        }
        .pricing-footer-note {
          font-size: 11px;
          color: #9aabb8;
          margin: 0;
          line-height: 1.5;
          flex: 1 1 200px;
        }
        .pricing-cta {
          background: #f5a623;
          color: #ffffff;
          border: none;
          border-radius: 6px;
          padding: 10px 20px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.18s;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .pricing-cta:hover { background: #e0951a; }

        /* ════════════════════════════════
           MOBILE  ≤ 700 px
        ════════════════════════════════ */
        @media (max-width: 700px) {
          .pricing-section {
            padding: 44px 12px;
          }

          /* Stack left + right panels vertically */
          .pricing-panel {
            grid-template-columns: 1fr;
            border-radius: 10px;
          }

          /* Trust panel becomes a compact top banner */
          .pricing-trust {
            padding: 24px 20px;
          }
          .pricing-trust-title {
            font-size: 16px;
          }

          /* Horizontal scroll guard for the table columns */
          .pricing-table-wrap {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          /*
            Collapse 3-col grid into a card-style list.
            Each row becomes a two-line stacked card.
          */
          .pricing-table-header {
            display: none; /* hide desktop column labels */
          }

          .pricing-row {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            padding: 14px 16px;
          }

          .pricing-row-service {
            font-size: 14px;
          }

          /* Price + badge sit side-by-side */
          .pricing-row-meta {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
          }

          .pricing-row-price {
            font-size: 14px;
          }

          .pricing-footer {
            flex-direction: column;
            align-items: flex-start;
            padding: 14px 16px;
            gap: 10px;
          }

          .pricing-cta {
            width: 100%;
            justify-content: center;
            padding: 12px 20px;
            font-size: 14px;
          }
        }

        /* ════════════════════════════════
           SMALL TABLET  701 – 900 px
        ════════════════════════════════ */
        @media (min-width: 701px) and (max-width: 900px) {
          .pricing-panel {
            grid-template-columns: minmax(0, 200px) minmax(0, 1fr);
          }
          .pricing-trust {
            padding: 28px 16px;
          }
          .pricing-table-header,
          .pricing-row {
            padding-left: 16px;
            padding-right: 16px;
          }
          .pricing-table-header {
            grid-template-columns: minmax(0,1fr) minmax(0,100px) minmax(0,90px);
          }
          .pricing-row {
            grid-template-columns: minmax(0,1fr) minmax(0,100px) minmax(0,90px);
          }
        }
      `}</style>

      <section className="pricing-section">
        {/* ── Section Header ── */}
        <div className="pricing-header">
          <p className="pricing-eyebrow">TRANSPARENT PRICING</p>
          <h2 className="pricing-title">Honest Prices for Every Repair</h2>
          <p className="pricing-subtitle">
            All quotes are obligation-free. Prices vary based on vehicle make,
            model and damage severity — upload your smash for a precise assessment.
          </p>
        </div>

        {/* ── Main Panel ── */}
        <div className="pricing-panel">

          {/* ── LEFT: Trust Panel ── */}
          <div className="pricing-trust">
            <h3 className="pricing-trust-title">
              {headingMain && <>{headingMain}<br /></>}
              <span style={{ color: "#1fbb8c" }}>{headingAccent}</span>
            </h3>

            {subheading && (
              <p className="pricing-trust-sub">{subheading}</p>
            )}

            {Features.length > 0 && (
              <ul className="pricing-features">
                {Features.map((item) => (
                  <li key={item.id} className="pricing-feature-item">
                    <span className="pricing-feature-dot">
                      <svg
                        width="8" height="8" viewBox="0 0 12 12"
                        fill="none" stroke="#1fbb8c"
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                      >
                        <polyline points="2 6 5 9 10 3" />
                      </svg>
                    </span>
                    <span className="pricing-feature-text">{item.feature}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="pricing-rating">
              <div className="pricing-rating-score">4.9</div>
              <div>
                <div className="pricing-rating-stars">★★★★★</div>
                <div className="pricing-rating-label">Google Rating · 3,500+ repairs</div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Pricing Table ── */}
          <div className="pricing-table-wrap">

            {/* Desktop column headers (hidden on mobile) */}
            <div className="pricing-table-header">
              {["Repair Type", "Price Range"].map((h) => (
                <span key={h} className="pricing-col-label">{h}</span>
              ))}
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <div
                key={row.id}
                className="pricing-row"
                style={{
                  borderBottom: i < rows.length - 1 ? "1px solid #f0f4f2" : "none",
                  background: i % 2 === 0 ? "#ffffff" : "#fafcfb",
                }}
              >
                {/* Service name */}
                <div className="pricing-row-service">{row.servicetype}</div>

                {/*
                  On desktop these sit in grid columns 2 and 3.
                  On mobile they're wrapped in .pricing-row-meta for side-by-side layout.
                */}
                <div className="pricing-row-meta">
                  <div className="pricing-row-price">{row.pricerange}</div>
                  <span className="pricing-badge">{row.timing}</span>
                </div>
              </div>
            ))}

            {/* Footer strip */}
            <div className="pricing-footer">
              <p className="pricing-footer-note">
                💡 Prices are indicative. Final quote after free vehicle assessment.
                Insurance claims welcomed.
              </p>
              <Link
                className="pricing-cta"
                href="/smash"
              >
                <ImageUp size={16} />
                Upload Your Smash
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Pricing;