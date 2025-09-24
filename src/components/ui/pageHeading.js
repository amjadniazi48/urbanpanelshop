"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";

function PageHeading({ heading, icon, show }) {
  const pathname = usePathname();
  // Extract the last part of the breadcrumb if no heading is provided
  const paths = pathname.split("/").filter((path) => path);
  const lastPath =
    paths.length > 0
      ? decodeURIComponent(paths[paths.length - 1].replace(/-/g, " "))
      : "";
  return (
    <>
      {show && (
        <h4 className="text-center text-uppercase text-white p-2  " style={{ fontSize: "1.05rem" ,fontFamily:"'Poppins', sans-serif",backgroundColor:"#E2571F" }}>
          {heading ? heading : lastPath}&nbsp;&nbsp;
          {icon && <i className={icon}></i>}
          {/* Conditional Icons */}
          {/* {formattedPathName === "audios videos" && <i className="bi bi-cassette ms-2"></i>}
            {formattedPathName === "highlights" && <i className="bi bi-stars ms-2"></i>}
            {formattedPathName === "Jobs & Consultancies" && <i className="bi bi-door-open"></i>}
            {formattedPathName === "internships" && <i className="bi bi-door-open"></i>}
            {formattedPathName === "publications" &&  <i className="bi bi-book"></i>}
            {formattedPathName === "Blogs & Articles" && <i className="fa-solid fa-blog"></i>}
            {formattedPathName === "photogallery"  && <i class="fa-solid fa-images"></i>}
            {formattedPathName === "outreach"  && <i className="bi bi-radar"></i>}
            {formattedPathName === "Success Stories"  && <i className="bi bi-award"></i>} */}
        </h4>
      )}
      <Breadcrumb />
    </>
  );
}

export default PageHeading;
