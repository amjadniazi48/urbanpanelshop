import { getStrapiURL } from "@/lib/utils";
import qs from "qs";
import ServicesDetails from "@/components/ServiceDetails"; // Your client component

// ✅ Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await loader(slug);
  const serviceData = data?.data?.[0];

  if (!serviceData) {
    return {
      title: "Service Not Found",
    };
  }

  const seo = serviceData.Seo;

  // Auto-generate FAQ schema from FAQs array
  const faqSchema = serviceData.faqs?.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>/g, '') // Strip HTML tags from answer
      }
    }))
  } : null;

  // Combine existing structured data from Strapi with auto-generated FAQ schema
  const getCombinedStructuredData = () => {
    const strapiStructuredData = seo?.structuredData;
    
    // If both exist, combine them in an array
    if (strapiStructuredData && faqSchema) {
      return [strapiStructuredData, faqSchema];
    }
    
    // If only FAQ schema exists
    if (faqSchema) {
      return faqSchema;
    }
    
    // If only Strapi structured data exists
    if (strapiStructuredData) {
      return strapiStructuredData;
    }
    
    // If neither exists
    return null;
  };

  const combinedStructuredData = getCombinedStructuredData();

  // If SEO data exists, use it
  if (seo) {
    return {
      title: seo.metaTitle || serviceData.title,
      description: seo.metaDescription || serviceData.description?.substring(0, 160),
      keywords: seo.keywords,
      robots: seo.metaRobots,
      ...(seo.canonicalURL && {
        alternates: {
          canonical: seo.canonicalURL,
        },
      }),
      openGraph: {
        title: seo.openGraph?.ogTitle || seo.metaTitle || serviceData.title,
        description: seo.openGraph?.ogDescription || seo.metaDescription,
        type: 'website',
        ...(seo.openGraph?.ogImage && {
          images: [
            {
              url: seo.openGraph.ogImage.url,
              alt: seo.openGraph.ogImage.alternativeText || serviceData.title,
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
              alt: seo.metaImage.alternativeText || serviceData.title,
              width: seo.metaImage.width,
              height: seo.metaImage.height,
            }
          ],
        },
      }),
      // Add combined structured data (from Strapi + auto-generated FAQ schema)
      ...(combinedStructuredData && {
        other: {
          'application/ld+json': JSON.stringify(combinedStructuredData),
        },
      }),
    };
  }

  // Fallback if no SEO data (but still include FAQ schema if available)
  return {
    title: serviceData.title,
    description: serviceData.description?.substring(0, 160) || "",
    openGraph: {
      title: serviceData.title,
      description: serviceData.description?.substring(0, 160) || "",
      images: serviceData.images?.[0] ? [
        {
          url: serviceData.images[0].url,
          alt: serviceData.images[0].alternativeText || serviceData.title,
        }
      ] : [],
    },
    ...(faqSchema && {
      other: {
        'application/ld+json': JSON.stringify(faqSchema),
      },
    }),
  };
}

// ✅ Loader function to fetch service data
async function loader(slug) {
  const query = qs.stringify(
    {
      filters: { 
        slug: { 
          $eq: slug 
        } 
      },
      populate: {
        images: {
          fields: ["url", "alternativeText", "name", "width", "height"]
        },
         bannerImage: {
          fields: ["url", "alternativeText", "name", "width", "height"]
        },
        serviceIcon: {
          fields: ["url", "alternativeText"]
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
        },
        Features: {
          populate: {
            mainImage: {
              fields: ["url", "alternativeText", "name", "width", "height"],
            },
            Features: {
              populate: {
                image: {
                  fields: ["url", "alternativeText", "name", "width", "height"],
                },
              },
            },
          },
        },
        faqs: {
          fields: ["question", "answer"]
        },
      },
      locale: "en"
    },
    { encodeValuesOnly: true }
  );

  const baseUrl = getStrapiURL();
  const url = `${baseUrl}/api/services?${query}`;

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
    console.log("full data with features", data);
    return data;
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

// ✅ Server component that fetches data once and passes it to the client component
export default async function ServicePage({ params }) {
  const { slug } = await params;
  const data = await loader(slug);
  const serviceData = data?.data?.[0] || null;

  // Pass the fetched data directly to the client component
  return <ServicesDetails serviceData={serviceData} />;
}