import { NextResponse } from "next/server";
import qs from "qs";

export async function GET(req, { params }) {
  const { slug } =  params;

  const query = qs.stringify({
    filters: { slug: { $eq: slug } },
    populate: { AfterImage: true, BeforeImage: true },
    locale: "en",
  });

  const url = `${process.env.STRAPI_URL}/api/repairs?${query}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_JWT}`,
      },
      cache: "no-store", // always fresh
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed with status ${res.status}` },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
