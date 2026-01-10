import HomeClient from "./HomeClient";

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

    return data;
  }

  // Fetching data from the loader
  const data = await loader();
  const homeData = data?.data?.SwiperHero || []; // ✅ array of blocks
  console.log("Extracted home blocks:", homeData);

  if (homeData.length === 0) {
    console.log("No home data found");
    return <div>No content available</div>;
  }

  // ✅ Pass the homeData to the client component
  return <HomeClient homeData={homeData} />;
}