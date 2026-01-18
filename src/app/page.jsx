import HomeClient from "./HomeClient";
import FAQSchema from "@/components/seo/FAQSchema";
import { getStrapiURL } from "@/lib/utils";
import { fetchData } from "@/lib/fetch";

export default async function Home() {
  async function loader() {
    const path = `/api/landing-page`;
    const baseUrl = getStrapiURL();
    const url = new URL(path, baseUrl);
    const authToken = process.env.STRAPI_JWT;

    return await fetchData(url.href, authToken, {
      cache: "no-store",
    });
  }

  const data = await loader();
  const homeData = data?.data?.SwiperHero || [];

  // ✅ Extract FAQ blocks for SEO
  const faqBlocks = homeData.filter(
    (block) => block.__component === "blocks.faqs"
  );
  //console.log("ALL BLOCKS:", homeData);
  return (
    <>
      {/* ✅ JSON-LD injected on SERVER */}
      {faqBlocks.map((block) => (
        <FAQSchema key={block.id} faqs={block.faqs} />
      ))}

      {/* UI */}
      <HomeClient homeData={homeData} />
    </>
  );
}
