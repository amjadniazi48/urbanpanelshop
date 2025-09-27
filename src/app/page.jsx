import Hero from "../components/Hero";

import Testimonials from "@/components/Testimonials";

import Carcomparsion from "@/components/Carcomparsion";
import Urbanservices from "@/components/Urbanservices";
import Smashupload from "@/components/Smashupload";

import Workflow from "@/components/Workflow";

//data from lib
import { getStrapiURL } from "@/lib/utils";
import { fetchData } from "@/lib/fetch";

export default async function Home() {
  // Loader function to fetch data
  async function loader() {
    const path = `/api/landing-page`;
    const baseUrl = getStrapiURL();
    const url = new URL(path, baseUrl);
    console.log("Full API URL", url.href); // Debugging the complete URL
    const authToken = process.env.STRAPI_JWT;

    const data = await fetchData(url.href, authToken, {
      cache: "no-store", // ✅ disables cache completely
    });

    // console.log("Data fetched in loader after revalidation:", data);
    return data;
  }

  // BlockRenderer function with switch-case to render components dynamically
  function BlockRenderer(block) {
    switch (block.__component) {
      case "blocks.swiper-hero":
        return <Hero data={block} />; // ✅ pass the block directly
      case "blocks.hero-section":
        return <Smashupload data={block} />; // ✅ pass the block directly
      case "blocks.workflow":
        return <Workflow data={block} />; // ✅ pass the block directly
      case "blocks.services":
        return <Urbanservices data={block} />; // ✅ pass the block directly
      case "blocks.reviews":
        return <Testimonials data={block} />; // ✅ pass the block directly
      case "blocks.recent-repairs":
        return <Carcomparsion data={block} />; // ✅ pass the block directly
      default:
        return null;
    }
  }

  // Fetching data from the loader
  const data = await loader();
  const homeData = data?.data?.SwiperHero || []; // ✅ array of blocks
  console.log("Extracted home blocks:", homeData);

  if (homeData.length === 0) {
    console.log("No home data found");
    return <div>No content available</div>;
  }

  return (
    <div>
      {homeData.map((block, index) => (
        <div key={block.id || `block-${index}`}>{BlockRenderer(block)}</div>
      ))}
    </div>
  );
}
