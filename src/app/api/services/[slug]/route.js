import { NextResponse } from "next/server";
import qs from "qs";

export async function GET(req, { params }) {
  const { slug } = await params;

  const query = qs.stringify(
    {
      filters: { 
        slug: { 
          $eq: slug 
        } 
      },
      populate: {
        images: {
          fields: ["url", "alternativeText", "name"]
        },
        Seo: {
          populate: {
            metaImage: {
              fields: ["url", "alternativeText", "name"]
            },
            openGraph: {
              populate: {
                ogImage: {
                  fields: ["url", "alternativeText", "name"]
                }
              }
            }
          }
        }
      },
      locale: "en"
    },
    { encodeValuesOnly: true } // Important for Strapi v5
  );

  const url = `${process.env.STRAPI_URL}/api/services?${query}`;
  
  // Log the URL for debugging
   // console.log("Fetching URL:", url);

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_JWT}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData = await res.text();
      console.error("Strapi error:", errorData);
      return NextResponse.json(
        { error: `Failed with status ${res.status}`, details: errorData },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("Fetch error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}