export const dynamic = "force-dynamic";

import { Poppins } from "next/font/google";
import Preloader from "@/components/Preloader";
import BootstrapClient from "@/components/BootstrapClient";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

  // ✅ SEO block
  const seo = globalData.find(
    (item) => item.__component === "shared.seo"
  );

  const metaImageUrl = seo?.metaImage?.url;
  const ogImageUrl = seo?.openGraph?.ogImage?.url;

  return (
    <html lang="en" className={poppins.variable}>
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

        {seo?.metaViewport && (
          <meta name="viewport" content={seo.metaViewport} />
        )}

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

        {/* ================= META IMAGE (Google / Social fallback) ================= */}
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

      <body className={poppins.variable}>
        <Preloader />

        <main className="page-wrapper">
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
      </body>
    </html>
  );
}
