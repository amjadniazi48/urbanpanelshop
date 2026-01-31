import { getStrapiURL } from "@/lib/utils";
import qs from "qs";
import RepairDetailPage from "@/components/RepairDetailPage"; // Your client component

// ✅ Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await loader(slug);
  const repairData = data?.data?.[0];

  if (!repairData) {
    return {
      title: "Repair Not Found",
    };
  }

  const seo = repairData.Seo;

  // If SEO data exists, use it
  if (seo) {
    return {
      title: seo.metaTitle || repairData.title,
      description: seo.metaDescription || repairData.description?.substring(0, 160),
      keywords: seo.keywords,
      robots: seo.metaRobots,
      ...(seo.canonicalURL && {
        alternates: {
          canonical: seo.canonicalURL,
        },
      }),
      openGraph: {
        title: seo.openGraph?.ogTitle || seo.metaTitle || repairData.title,
        description: seo.openGraph?.ogDescription || seo.metaDescription,
        type: 'website',
        ...(seo.openGraph?.ogImage && {
          images: [
            {
              url: seo.openGraph.ogImage.url,
              alt: seo.openGraph.ogImage.alternativeText || repairData.title,
              width: seo.openGraph.ogImage.width,
              height: seo.openGraph.ogImage.height,
            }
          ],
        }),
      },
      ...(seo.metaImage && !seo.openGraph?.ogImage && {
        openGraph: {
          images: [
            {
              url: seo.metaImage.url,
              alt: seo.metaImage.alternativeText || repairData.title,
              width: seo.metaImage.width,
              height: seo.metaImage.height,
            }
          ],
        },
      }),
      // Add structured data if available
      ...(seo.structuredData && {
        other: {
          'application/ld+json': JSON.stringify(seo.structuredData),
        },
      }),
    };
  }

  // Fallback if no SEO data - use Before/After images
  return {
    title: repairData.title,
    description: repairData.description?.substring(0, 160) || "",
    openGraph: {
      title: repairData.title,
      description: repairData.description?.substring(0, 160) || "",
      images: repairData.AfterImage ? [
        {
          url: repairData.AfterImage.url,
          alt: repairData.AfterImage.alternativeText || repairData.title,
          width: repairData.AfterImage.width,
          height: repairData.AfterImage.height,
        }
      ] : [],
    },
  };
}

// ✅ Loader function to fetch repair data
async function loader(slug) {
  const query = qs.stringify(
    {
      filters: { 
        slug: { 
          $eq: slug 
        } 
      },
      populate: {
        AfterImage: {
          fields: ["url", "alternativeText", "name", "width", "height"]
        },
        BeforeImage: {
          fields: ["url", "alternativeText", "name", "width", "height"]
        },
        Seo: {
          populate: {
            metaImage: {
              fields: ["url", "alternativeText", "name", "width", "height"]
            },
            openGraph: {
              populate: {
                ogImage: {
                  fields: ["url", "alternativeText", "name", "width", "height"]
                }
              }
            }
          }
        }
      },
      locale: "en"
    },
    { encodeValuesOnly: true }
  );

  const baseUrl = getStrapiURL();
  const url = `${baseUrl}/api/repairs?${query}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_JWT}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`Strapi error: ${res.status}`);
      return null;
    }

    const data = await res.json();
    console.log("full data", data);
    return data;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

// ✅ Server component that fetches data once and passes it to the client component
export default async function RepairPage({ params }) {
  const { slug } = await params;
  const data = await loader(slug);
  const repairData = data?.data?.[0] || null;

  // Pass the fetched data directly to the client component
  return <RepairDetailPage repairData={repairData} />;
}