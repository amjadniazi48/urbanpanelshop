const Pricing = ({ data }) => {
  if (
    !data ||
    !data.Pricing ||
    data.Pricing.length === 0
  ) {
    return null;
  }

  const { heading, subheading, Features = [], Pricing: rows = [] } = data;

  const headingWords = heading ? heading.trim().split(" ") : [];
  const headingMain = headingWords.slice(0, -1).join(" ");
  const headingAccent = headingWords.slice(-1)[0];

  return (
    <section
      style={{
        background: "#ffffff",
        padding: "60px 16px",
      }}
    >
      {/* ── Section Header — matches other sections on the page ── */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#f5a623",
            marginBottom: "10px",
          }}
        >
          TRANSPARENT PRICING
        </p>
        <h2
          style={{
            fontSize: "clamp(24px, 3.5vw, 36px)",
            fontWeight: 700,
            color: "#0f1c2e",
            lineHeight: 1.3,
            margin: "0 0 14px",
          }}
        >
          Honest Prices for Every Repair
        </h2>
        <p
          style={{
            color: "#6b7a8d",
            fontSize: "15px",
            maxWidth: "520px",
            margin: "0 auto",
            lineHeight: 1.65,
          }}
        >
          All quotes are obligation-free. Prices vary based on vehicle make,
          model and damage severity — upload your smash for a precise assessment.
        </p>
      </div>

      {/* ── Main Panel ── */}
      <div
        style={{
          maxWidth: "1080px",
          margin: "0 auto",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 32px rgba(15,28,46,0.10)",
          display: "grid",
          gridTemplateColumns: "minmax(240px, 280px) 1fr",
          border: "1px solid #e8f0eb",
        }}
      >
        {/* ── LEFT: Trust Panel ── */}
        <div
          style={{
            background: "linear-gradient(160deg, #0f1c2e 0%, #1a3352 100%)",
            padding: "40px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <h3
            style={{
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 700,
              lineHeight: 1.4,
              marginBottom: "6px",
            }}
          >
            {headingMain && (
              <>
                {headingMain}
                <br />
              </>
            )}
            <span style={{ color: "#1fbb8c" }}>{headingAccent}</span>
          </h3>

          {subheading && (
            <p
              style={{
                color: "#7a9eb5",
                fontSize: "12px",
                marginBottom: "24px",
                lineHeight: 1.65,
              }}
            >
              {subheading}
            </p>
          )}

          {/* Features list */}
          {Features.length > 0 && (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {Features.map((item) => (
                <li
                  key={item.id}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "9px",
                    marginBottom: "11px",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      marginTop: "3px",
                      width: "15px",
                      height: "15px",
                      borderRadius: "50%",
                      background: "rgba(31,187,140,0.18)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="#1fbb8c"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="2 6 5 9 10 3" />
                    </svg>
                  </span>
                  <span
                    style={{
                      color: "#b8cfe0",
                      fontSize: "12px",
                      lineHeight: 1.5,
                    }}
                  >
                    {item.feature}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/* Google rating — matching the style of star ratings on the page */}
          <div
            style={{
              marginTop: "28px",
              background: "rgba(31,187,140,0.09)",
              border: "1px solid rgba(31,187,140,0.22)",
              borderRadius: "8px",
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                fontSize: "24px",
                fontWeight: 800,
                color: "#1fbb8c",
                lineHeight: 1,
              }}
            >
              4.9
            </div>
            <div>
              <div style={{ color: "#f5a623", fontSize: "12px", marginBottom: "2px" }}>
                ★★★★★
              </div>
              <div style={{ color: "#7a9eb5", fontSize: "10px" }}>
                Google Rating · 3,500+ repairs
              </div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Pricing Table ── */}
        <div style={{ background: "#ffffff" }}>
          {/* Table column headers */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 140px 120px",
              padding: "13px 28px",
              background: "#f4faf7",
              borderBottom: "1.5px solid #d6ede3",
            }}
          >
            {["Repair Type", "Price Range", "Turnaround"].map((h) => (
              <span
                key={h}
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  color: "#1fbb8c",
                }}
              >
                {h}
              </span>
            ))}
          </div>

          {/* Pricing rows */}
          {rows.map((row, i) => (
            <div
              key={row.id}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 140px 120px",
                alignItems: "center",
                padding: "16px 28px",
                borderBottom:
                  i < rows.length - 1 ? "1px solid #f0f4f2" : "none",
                background: i % 2 === 0 ? "#ffffff" : "#fafcfb",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f4faf7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  i % 2 === 0 ? "#ffffff" : "#fafcfb";
              }}
            >
              {/* Service name */}
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#0f1c2e",
                  lineHeight: 1.4,
                }}
              >
                {row.servicetype}
              </div>

              {/* Price range */}
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#0f1c2e",
                }}
              >
                {row.pricerange}
              </div>

              {/* Timing badge — teal pill matching page button style */}
              <div>
                <span
                  style={{
                    display: "inline-block",
                    background: "#eaf8f2",
                    color: "#1fbb8c",
                    border: "1px solid #c2ead8",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    fontSize: "11px",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {row.timing}
                </span>
              </div>
            </div>
          ))}

          {/* Footer strip */}
          <div
            style={{
              padding: "14px 28px",
              background: "#f4faf7",
              borderTop: "1.5px solid #d6ede3",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <p style={{ fontSize: "11px", color: "#9aabb8", margin: 0, lineHeight: 1.5 }}>
              💡 Prices are indicative. Final quote after free vehicle assessment.
              Insurance claims welcomed.
            </p>
            {/* Orange CTA — identical style to hero "Upload Your Smash" button */}
            <button
              style={{
                background: "#f5a623",
                color: "#ffffff",
                border: "none",
                borderRadius: "6px",
                padding: "10px 22px",
                fontSize: "13px",
                fontWeight: 700,
                cursor: "pointer",
                whiteSpace: "nowrap",
                letterSpacing: "0.3px",
                transition: "background 0.18s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#e0951a";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#f5a623";
              }}
            >
              Upload Your Smash
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;