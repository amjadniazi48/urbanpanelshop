"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import "./Breadcrumb.css"; // Import CSS file for styling

const Breadcrumb = () => {
  const pathname = usePathname();

  // Remove empty segments and filter out "index.html" and "pages"
  const paths = pathname
    .split("/")
    .filter((path) => path && path.toLowerCase() !== "index.html" && path !== "pages");

  // If on the homepage, hide the breadcrumb
  if (pathname === "/") return null;

  return (
    <nav aria-label="breadcrumb">
      <ul className="breadcrumb" >
        {/* Show "Home" only if not on the homepage */}
        <li>
          <Link href="/" className="" style={{ color: "#007BFF",fontWeight:"500", fontFamily:"ProximaNova,sans-serif" }}>HOME</Link>
        </li>

        {paths.map((path, index) => {
          const url = `/${paths.slice(0, index + 1).join("/")}`;
          let formattedText = decodeURIComponent(path.replace(/-/g, " "));
          return (
         
            <li key={index}>
              <span className="separator">/</span>
              <Link href={url} className="text-uppdercase" style={{ color: "#007BFF",fontWeight:"500" }}>
                {formattedText.toUpperCase()}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
