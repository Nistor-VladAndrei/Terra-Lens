import { NextResponse } from "next/server";

/** Simple OSM/Nominatim geocode proxy (optional) */
export async function GET(req: Request) {
  const q = new URL(req.url).searchParams.get("q") ?? "";
  if (!q) return NextResponse.json({ error: "q required" }, { status: 400 });

  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q)}`;
  const res = await fetch(url, { headers: { "User-Agent": "pollution-map/1.0" } });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json({ error: text }, { status: res.status });
  }
  return NextResponse.json(await res.json());
}