import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");
  const radius = searchParams.get("radius") ?? "15000";
  const limit = searchParams.get("limit") ?? "100";

  if (!lat || !lon) {
    return NextResponse.json({ error: "lat/lon required" }, { status: 400 });
  }

  const url = `https://api.openaq.org/v3/locations?coordinates=${lat},${lon}&radius=${radius}&limit=${limit}`;
  const res = await fetch(url, {
    headers: { "X-API-Key": "e34b71eef9ed0d444413f37ce6d0d8b2186f01fd566cdf3d41ffdda4ac5dd4cb"},
    next: { revalidate: 60 }
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json({ error: text }, { status: res.status });
  }
  const data = await res.json();
  return NextResponse.json(data);
}
