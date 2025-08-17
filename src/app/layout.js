import { Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"
import Script from "next/script"
import Footer from "./components/Footer";
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets:  ["latin"],
  display: "swap",
})

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "Urbanclub | A trusted partner in digital transformation",
  description: "Urbanclub - A trusted partner in digital transformation",
  keywords:
    "Technology, business, creative agency, digital transformation, Software, Cutting edge IT Services",
  authors: [{ name: "Createx Studio" }],
  icons: {
    icon: [
      { url: "/assets/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/favicon/favicon.ico" },
    ],
    apple: [{ url: "/assets/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/assets/favicon/site.webmanifest",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="light">
      <head>
        {/* Vendor Styles */}
        <link rel="stylesheet" media="screen" href="/assets/vendor/boxicons/css/boxicons.min.css" />
        <link rel="stylesheet" media="screen" href="/assets/vendor/swiper/swiper-bundle.min.css" />
       
        {/* Main Theme Styles + Bootstrap */}
        <link rel="stylesheet" media="screen" href="/assets/css/theme.min.css" />
      </head>
      <body className={`${interSans.variable} ${jetBrainsMono.variable}`}>
        {/* Page Loading Overlay */}
        <div className="page-loading active" id="page-loading">
          <div className="page-loading-inner">
            <div className="page-spinner"></div>
            <span>Loading...</span>
          </div>
        </div>
  <main className="page-wrapper">
        {children}
    </main>
    <Footer />
        {/* Back to top button */}
        <a href="#top" className="btn-scroll-top" data-scroll>
          <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">Top</span>
          <i className="btn-scroll-top-icon bx bx-chevron-up"></i>
        </a>

        {/* Preloader Script - Improved */}
        <Script id="preloader-script" strategy="afterInteractive">
          {`
            (function () {
              // Remove preloader when page is fully loaded
              function removePreloader() {
                const preloader = document.querySelector('.page-loading');
                if (preloader) {
                  preloader.classList.remove('active');
                  setTimeout(function () {
                    preloader.remove();
                  }, 500);
                }
              }

              // Multiple fallback methods to ensure preloader is removed
              if (document.readyState === 'complete') {
                removePreloader();
              } else {
                window.addEventListener('load', removePreloader);
                
                // Fallback timer - force remove after 2 seconds
                setTimeout(removePreloader, 2000);
                
                // Additional fallback for when DOM is ready
                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', function() {
                    setTimeout(removePreloader, 1000);
                  });
                }
              }
            })();
          `}
        </Script>

        {/* Vendor Scripts */}
        <Script src="/assets/vendor/jarallax/dist/jarallax.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/@lottiefiles/lottie-player/dist/lottie-player.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/swiper/swiper-bundle.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/lightgallery/lightgallery.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/lightgallery/plugins/video/lg-video.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/shufflejs/dist/shuffle.min.js" strategy="lazyOnload" />
        <Script src="/assets/vendor/parallax-js/dist/parallax.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/theme.min.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}
