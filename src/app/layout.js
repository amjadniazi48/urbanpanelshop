import { Poppins } from "next/font/google";
import Script from "next/script";
import Header from "./components/Header";
import Footer from "./components/Footer";

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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Vendor Styles */}
        <link
          rel="stylesheet"
          media="screen"
          href="/assets/vendor/boxicons/css/boxicons.min.css"
        />
        <link
          rel="stylesheet"
          media="screen"
          href="/assets/vendor/swiper/swiper-bundle.min.css"
        />

        {/* Main Theme Styles + Bootstrap */}
        <link
          rel="stylesheet"
          media="screen"
          href="/assets/css/theme.min.css"
        />
        <link rel="stylesheet" media="screen" href="/assets/css/style.css" />
      </head>

      <body className={poppins.variable}>
        {/* Page Loading Overlay */}
        <div className="page-loading active" id="page-loading">
          <div className="page-loading-inner">
            <div className="page-spinner"></div>
            <span>Loading...</span>
          </div>
        </div>

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

        {/* Preloader Script */}
        <Script id="preloader-script" strategy="afterInteractive">
          {`
            (function () {
              function removePreloader() {
                const preloader = document.querySelector('.page-loading');
                if (preloader) {
                  preloader.classList.remove('active');
                  setTimeout(() => preloader.remove(), 500);
                }
              }
              if (document.readyState === 'complete') {
                removePreloader();
              } else {
                window.addEventListener('load', removePreloader);
                setTimeout(removePreloader, 2000);
                document.addEventListener('DOMContentLoaded', () => {
                  setTimeout(removePreloader, 1000);
                });
              }
            })();
          `}
        </Script>

        {/* Vendor Scripts */}
        <Script
          src="/assets/vendor/jarallax/dist/jarallax.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/img-comparison-slider/dist/index.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/@lottiefiles/lottie-player/dist/lottie-player.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/swiper/swiper-bundle.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/lightgallery/lightgallery.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/lightgallery/plugins/video/lg-video.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/shufflejs/dist/shuffle.min.js"
          strategy="lazyOnload"
        />
        <Script
          src="/assets/vendor/parallax-js/dist/parallax.min.js"
          strategy="lazyOnload"
        />
        <Script src="/assets/js/theme.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/index.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
