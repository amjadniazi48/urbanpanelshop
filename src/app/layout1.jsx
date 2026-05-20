export const dynamic = "force-dynamic";

export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};

import { Poppins } from "next/font/google";
import Preloader from "@/components/Preloader";
import BootstrapClient from "@/components/BootstrapClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";
import "./mobile-fixes.css";
// Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

async function getGlobalSettings() {
  try {
    const res = await fetch(`${process.env.STRAPI_URL}/api/global-setting`, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_JWT}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("❌ Failed to fetch Global Settings from Strapi");
      return [];
    }

    const data = await res.json();
    return data?.data?.Global || [];
  } catch (error) {
    console.error("❌ Error fetching Global Settings:", error);
    return [];
  }
}

export default async function RootLayout({ children }) {
  const globalData = await getGlobalSettings();

  // Layout blocks
  const headerData = globalData.find(
    (item) => item.__component === "layout.header"
  );
  const menu = globalData.find(
    (item) => item.__component === "layout.menu"
  );
  const footerData = globalData.find(
    (item) => item.__component === "layout.footer"
  );

  // SEO block
  const seo = globalData.find(
    (item) => item.__component === "shared.seo"
  );

  const metaImageUrl = seo?.metaImage?.url;
  const ogImageUrl = seo?.openGraph?.ogImage?.url;

  const viewportContent =
    typeof seo?.metaViewport === "string" &&
    seo.metaViewport.trim().includes("device-width")
      ? seo.metaViewport.trim()
      : "width=device-width, initial-scale=1";

  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        {/* ================= BASIC SEO ================= */}
        <title>{seo?.metaTitle}</title>

        {seo?.metaDescription && (
          <meta name="description" content={seo.metaDescription} />
        )}

        {seo?.keywords && (
          <meta name="keywords" content={seo.keywords} />
        )}

        {seo?.metaRobots && (
          <meta name="robots" content={seo.metaRobots} />
        )}

        <meta name="viewport" content={viewportContent} />

        {/* ✅ CRITICAL: Fix hamburger menu on mobile production builds */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                if (!isMobile) return;

                // Ensure navbar-toggler button is clickable
                const style = document.createElement('style');
                style.textContent = \`
                  .navbar-toggler {
                    position: relative;
                    z-index: 1060 !important;
                    touch-action: auto !important;
                    pointer-events: auto !important;
                    cursor: pointer !important;
                    -webkit-tap-highlight-color: transparent;
                    padding: 0.25rem 0.75rem !important;
                    background: transparent !important;
                    border: 1px solid transparent !important;
                  }
                  .navbar-toggler:active,
                  .navbar-toggler:focus {
                    outline: none !important;
                  }
                  .navbar-toggler-icon {
                    pointer-events: auto !important;
                    display: inline-block !important;
                  }
                  .offcanvas {
                    touch-action: auto !important;
                    pointer-events: auto !important;
                  }
                  .offcanvas-body {
                    touch-action: auto !important;
                    pointer-events: auto !important;
                  }
                \`;
                document.head.appendChild(style);

                // Wait for DOM and Bootstrap, then set up click handler
                const setupMenu = () => {
                  const toggler = document.querySelector('.navbar-toggler');
                  const offcanvasEl = document.querySelector('#navbarNav');
                  
                  if (!toggler || !offcanvasEl) {
                    setTimeout(setupMenu, 100);
                    return;
                  }

                  // Add direct click handler as fallback
                  toggler.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Try Bootstrap first
                    if (window.bootstrap && window.bootstrap.Offcanvas) {
                      const offcanvas = window.bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
                      offcanvas.toggle();
                    } else {
                      // Fallback: manually toggle
                      if (offcanvasEl.classList.contains('show')) {
                        offcanvasEl.classList.remove('show');
                        offcanvasEl.style.visibility = 'hidden';
                      } else {
                        offcanvasEl.classList.add('show');
                        offcanvasEl.style.visibility = 'visible';
                      }
                    }
                  }, false);

                  // Ensure pointer-events are set
                  toggler.style.pointerEvents = 'auto';
                  toggler.style.touchAction = 'auto';
                };

                if (document.readyState === 'loading') {
                  document.addEventListener('DOMContentLoaded', setupMenu);
                } else {
                  setupMenu();
                }

                setTimeout(setupMenu, 500);
              })();
            `
          }}
        />

        {seo?.canonicalURL && (
          <link rel="canonical" href={seo.canonicalURL} />
        )}

        {/* ================= OPEN GRAPH ================= */}
        {seo?.openGraph?.ogTitle && (
          <meta property="og:title" content={seo.openGraph.ogTitle} />
        )}

        {seo?.openGraph?.ogDescription && (
          <meta
            property="og:description"
            content={seo.openGraph.ogDescription}
          />
        )}

        {seo?.openGraph?.ogUrl && (
          <meta property="og:url" content={seo.openGraph.ogUrl} />
        )}

        {seo?.openGraph?.ogType && (
          <meta property="og:type" content={seo.openGraph.ogType} />
        )}

        {ogImageUrl && (
          <meta property="og:image" content={ogImageUrl} />
        )}

        {/* ================= META IMAGE ================= */}
        {metaImageUrl && (
          <meta name="image" content={metaImageUrl} />
        )}

        {/* ================= STRUCTURED DATA ================= */}
        {seo?.structuredData && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(seo.structuredData),
            }}
          />
        )}

        {/* ================= STYLES ================= */}
        <link
          rel="stylesheet"
          media="screen"
          href="/assets/vendor/boxicons/css/boxicons.min.css"
        />
        <link rel="stylesheet" media="screen" href="/assets/css/theme.min.css" />
        <link rel="stylesheet" media="screen" href="/assets/css/style.css" />
      </head>

      <body className={poppins.variable} suppressHydrationWarning>
        <Preloader />

        <main className="page-wrapper" style={{ width: "100%", overflow: "clip" }}>
          <Header headerdata={headerData} menu={menu} />
          {children}
          <Footer footerData={footerData} />
        </main>

        <a href="#top" className="btn-scroll-top" data-scroll>
          <span className="btn-scroll-top-tooltip text-muted fs-sm me-2">
            Top
          </span>
          <i className="btn-scroll-top-icon bx bx-chevron-up"></i>
        </a>

        <BootstrapClient />
        <SpeedInsights />
      </body>
    </html>
  );
}
