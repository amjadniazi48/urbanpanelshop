import RecentRepairs from "@/components/RecentRepairs";
import { fetchData } from "@/lib/fetch";

export default async function RepairsPage() {
  const STRAPI_URL = `${process.env.STRAPI_URL}/api/repairs?populate=*`;
  const STRAPI_TOKEN = process.env.STRAPI_JWT;

  const response = await fetchData(
    STRAPI_URL,
    STRAPI_TOKEN,
    { next: { revalidate: 60 } }
  );

  return <RecentRepairs data={response.data} />;
}
