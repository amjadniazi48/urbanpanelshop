import { getStrapiURL } from "@/lib/utils";
import { fetchData } from "@/lib/fetch";
import Aboutus from "@/components/ui/Aboutus";
import Contact from "@/components/Contact";
import Textbox from "@/components/Textbox";
export default async function Page({ params }) {
  const { slug } = params; // "contact", "about", etc.

  async function loader() {
    const path = `/api/pages?filters[slug][$eq]=${slug}&populate=blocks`;
    const baseUrl = getStrapiURL();
    const url = new URL(path, baseUrl);
    const authToken = process.env.STRAPI_JWT;

    const data = await fetchData(url.href, authToken, {
      next: { revalidate: 30 },
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
      default:
        return null;
    }
  }

  const data = await loader();
  const pageData = data?.data?.[0]; // only one page

  if (!pageData) return <div>Page not found</div>;

  return (
    <div>
      {pageData.blocks?.map((block) => (
        <div key={block.id}>{BlockRenderer(block)}</div>
      ))}
    </div>
  );
}
