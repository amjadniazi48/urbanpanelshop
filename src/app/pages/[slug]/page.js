import { getStrapiURL } from "@/lib/utils";
import { fetchData } from "@/lib/fetch";
import Aboutus from "@/components/ui/Aboutus";
import Contact from "@/components/Contact";
import Textbox from "@/components/Textbox";
import Map from "@/components/ui/Map";

// ✅ Add metadata generation
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await loader(slug);
  const pageData = data?.data?.[0];
  
  // Find the SEO block
  const seoBlock = pageData?.blocks?.find(
    (block) => block.__component === "shared.seo"
  );

  if (!seoBlock) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: seoBlock.metaTitle,
    description: seoBlock.metaDescription,
    keywords: seoBlock.keywords,
    robots: seoBlock.metaRobots,
    ...(seoBlock.canonicalURL && {
      alternates: {
        canonical: seoBlock.canonicalURL,
      },
    }),
    ...(seoBlock.metaImage && {
      openGraph: {
        images: [seoBlock.metaImage.url],
      },
    }),
    // Add structured data if available
    ...(seoBlock.structuredData && {
      other: {
        'application/ld+json': JSON.stringify(seoBlock.structuredData),
      },
    }),
  };
}

// ✅ Extract loader function to reuse in both generateMetadata and Page
async function loader(slug) {
  const path = `/api/pages?filters[slug][$eq]=${slug}&populate=blocks`;
  const baseUrl = getStrapiURL();
  const url = new URL(path, baseUrl);
  const authToken = process.env.STRAPI_JWT;

  const data = await fetchData(url.href, authToken, {
    cache: "no-store"
  });

  return data;
}

function BlockRenderer(block) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <Aboutus data={block} />;
    case "blocks.contact":
      return <Contact data={block} />;
    case "blocks.textbox":
      return <Textbox data={block} />;
    case "blocks.map":
      return <Map data={block} />;
    case "shared.seo":
      // Don't render SEO block as visible content
      return null;
    default:
      return null;
  }
}

export default async function Page({ params }) {
  const { slug } = await params;
  const data = await loader(slug);
  const pageData = data?.data?.[0];

  if (!pageData) return <div>Page not found</div>;

  return (
    <div>
      {pageData.blocks?.map((block) => (
        <div key={block.id}>{BlockRenderer(block)}</div>
      ))}
    </div>
  );
}