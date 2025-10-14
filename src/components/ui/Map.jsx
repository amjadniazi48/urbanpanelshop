import React from "react";

const Map = ({ data }) => {
  if (!data) return null;

console.log("mapdata",data);

  return (
    <section className="container py-2 py-lg-4 py-xl-5 mb-3 mt-3 "
      style={{
          textAlign: "justify",
          border: "1px solid #818181ff",
          backgroundColor: "#e9ebe8ff",
        }}
    >
      <div className="row py-5">
        {/* Map */}
        <div className="col-lg-12 mb-5 mb-lg-0">
          <div className="d-flex flex-column h-100 shadow-sm rounded-3 overflow-hidden">
            {/* Inject map iframe safely */}
            <div
              className="d-block h-100"
              style={{ minHeight: "300px" }}
              dangerouslySetInnerHTML={{ __html: data?.map }}
            />
          </div>
        </div>

        {/* Contact Info */}

      </div>
    </section>
  );
};

export default Map;
