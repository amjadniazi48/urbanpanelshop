import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";
import BootstrapClient from "@/components/BootstrapClient";
// Dynamically load Header & Footer client-side (to avoid Bootstrap hydration issues)
import Header from "@/components/Header";
import Footer from "@/components/Footer"

// Load Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Urbanclub | A trusted partner in digital transformation",
  description: "Urbanclub - A trusted partner in digital transformation",
  keywords:
    "Technology, business, creative agency, digital transformation, Software, Cutting edge IT Services",
  authors: [{ name: "Createx Studio" }],
  icons: {
    icon: [
      {
        url: "/assets/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/assets/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      { url: "/assets/favicon/favicon.ico" },
    ],
    apple: [{ url: "/assets/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/assets/favicon/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

interface RootLayoutProps {
  children: ReactNode;
}

// Client-only Bootstrap Loader


// Preloader Component (client-only)
function Preloader() {
  if (typeof window === "undefined") return null;

  return (
    <div className="page-loading active" id="page-loading">
      <div className="page-loading-inner">
        <div className="page-spinner"></div>
        <span>Loading...</span>
      </div>
    </div>
  );
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Vendor Styles */}
        <link
          rel="stylesheet"
          media="screen"
          href="/assets/vendor/boxicons/css/boxicons.min.css"
        />

        {/* Main Theme Styles + Bootstrap */}
        <link rel="stylesheet" media="screen" href="/assets/css/theme.min.css" />
        <link rel="stylesheet" media="screen" href="/assets/css/style.css" />
      </head>

      <body className={poppins.variable}>
        {/* Preloader */}
        <Preloader />

        <main className="page-wrapper">
          <Header />
          {children}
          <Footer />
        </main>

        {/* Back to top button */}
        <a href="#top" className="btn-scroll-top" data-scroll>
          <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">
            Top
          </span>
          <i className="btn-scroll-top-icon bx bx-chevron-up"></i>
        </a>

        {/* Bootstrap Client Loader */}
        <BootstrapClient />
      </body>
    </html>
  );
}
