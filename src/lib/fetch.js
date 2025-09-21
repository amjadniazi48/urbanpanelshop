
export async function fetchData(url, authToken, cacheStatus = {}) {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authToken}`,
  };

  try {
    const response = await fetch(url, {
      method: "GET",
      headers,
      ...cacheStatus,
    });

    console.log("Response Status:", response.status, response.statusText);

    if (!response.ok) {
      const errorData = await response.json(); // Parse error response
      console.error("Fetch failed:", response.status, response.statusText, errorData);
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error; // Propagate error to the caller
  }
}
