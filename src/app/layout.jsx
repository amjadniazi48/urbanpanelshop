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

        {/* ✅ CRITICAL: Fix touch events on production BEFORE React loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                if (!isMobile) return;

                // Enable touch-action on all elements immediately
                const style = document.createElement('style');
                style.textContent = \`
                  * { touch-action: auto !important; }
                  button, a, input, textarea, select, [role="button"], .btn, .navbar-toggler, 
                  .offcanvas, .dropdown-item, .compare-slider, [draggable="true"], .accordion-button {
                    touch-action: auto !important;
                    pointer-events: auto !important;
                    -webkit-tap-highlight-color: transparent;
                  }
                  .swiper, .carousel, [class*="slider"], [class*="compare"], .react-compare-slider {
                    touch-action: manipulation !important;
                  }
                \`;
                document.head.appendChild(style);

                // Patch addEventListener to ensure touch events aren't prevented
                const originalAddEventListener = Element.prototype.addEventListener;
                Element.prototype.addEventListener = function(type, listener, options) {
                  if (type && type.toLowerCase().includes('touch')) {
                    if (typeof options === 'object' && options.passive !== false) {
                      options = { ...options, passive: true };
                    }
                  }
                  return originalAddEventListener.call(this, type, listener, options);
                };

                // Prevent any element from blocking touch events
                document.addEventListener('touchstart', function(e) {
                  if (!e.cancelable) return;
                  const target = e.target;
                  const isButton = target.matches('button, a, input, [role="button"], .btn, [onclick]') || 
                                   target.closest('button, a, input, [role="button"], .btn, [onclick]');
                  const isSlider = target.matches('[draggable], .compare-slider, .react-compare-slider, .swiper') ||
                                   target.closest('[draggable], .compare-slider, .react-compare-slider, .swiper');
                  
                  if (!isButton && !isSlider) {
                    // Don't prevent on other elements, let scroll happen
                  }
                }, { passive: true, capture: true });
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
