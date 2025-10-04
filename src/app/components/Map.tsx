"use client";

// IMPORTANT: the order matters!
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer, CircleMarker, Tooltip, useMap } from "react-leaflet";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import { City, DEFAULT_CITIES } from "../../../lib/cities";
import { LatLngExpression } from "leaflet";
import AirPollutionControl from "./AirPolutionControl";

// Mocked color function for PM2.5 values (you can replace this with the real one)
const pm25Color = (value: number) => {
  if (value <= 12) return "green";
  if (value <= 35) return "yellow";
  if (value <= 55) return "orange";
  return "red";
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

type Point = {
  lat: number;
  lon: number;
  parameter?: string;
  value?: number; // Ensure value is optional but can be set if available
  unit?: string;
  location?: string;
};

const useOpenMeteoAQ = (lat: number, lon: number) => {
  return useSWR(
    `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=pm2_5,pm10,ozone,nitrogen_dioxide`,
    fetcher
  );
};

const UpdateMapCenter = ({ lat, lon }: { lat: number; lon: number }) => {
  const map = useMap(); // Get the map instance
  useEffect(() => {
    map.setView([lat, lon], map.getZoom()); // Update center and keep current zoom
  }, [lat, lon, map]);

  return null;
};

export default function Map() {
  const position: LatLngExpression = [51.505, -0.09];

  const [city, setCity] = useState<City>(DEFAULT_CITIES[0]);
  const [points, setPoints] = useState<Point[]>([]);
  const [selectedPoint, setSelectedPoint] = useState<Point | null>(null); // Store the selected point data
     const [polutedData, setPolutedData] = useState<number | undefined>(undefined);  // Fetch air quality data for nearby locations
  const { data: locs, isLoading: loadingLocs } = useSWR(
    `/api/openaq/locations?lat=${city.lat}&lon=${city.lon}&radius=15000`,
    fetcher
  );

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = cityOptions.find((x) => x.name === e.target.value);
    if (selectedCity) {
      setCity(selectedCity);
    }
  };

  const handlePointClick = (point: Point) => {
    console.log("Point clicked:", point); // Debugging
    // Set the selected point when a marker is clicked
    setSelectedPoint(point);
   const something: City = {
        id:"2",
        name: "ceva",
        lat: point.lat,
        lon: point.lon,
    };
    setCity(something);
  };

  // Fetch air quality data for each location
  useEffect(() => {
    let cancelled = false;
    if (!locs) return; // Ensure locs is defined
    (async () => {
      if (!locs?.results) {
        setPoints([]);
        return;
      }
      console.log(locs.results)
      const newPoints = locs.results.map((loc: any) => ({
        lat: loc.coordinates.latitude,
        lon: loc.coordinates.longitude,
        location: loc.location ?? "Station", // Set location name if available
        parameter: loc.parameter,
        value: loc.value, // Ensure value is assigned correctly
        unit: loc.unit,
      }));
    if (selectedPoint) {
      const { lat, lon } = selectedPoint;
      //const { data: aq } = useOpenMeteoAQ(lat, lon);

      if (aq?.hourly?.pm2_5?.[0]) {
        // Update the state with the pm2_5 value
        setPolutedData(aq.hourly.pm2_5[0]);
      }
    }

      //console.log("New points:", newPoints); // Debugging
      // Only update the points if the component is still mounted
      if (!cancelled) {
        setPoints(newPoints);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [city, locs]); // Re-run when `locs` changes (i.e., when API data is fetched)

  const { data: aq } = useOpenMeteoAQ(city.lat, city.lon);
  const nowPm25 = aq?.hourly?.pm2_5?.[0] as number | undefined;
  const cityOptions = useMemo(() => DEFAULT_CITIES, []);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
     <AirPollutionControl city={city} setCity={setCity} cities={cityOptions} nowPm25={nowPm25} />
      <MapContainer
        center={[city.lat, city.lon]}
        zoom={11}
        scrollWheelZoom={true}
        zoomControl={false}
        style={{ height: "100%", width: "100%",  zIndex: 0 }}
      >
        <TileLayer
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locs?.results && <UpdateMapCenter lat={city.lat} lon={city.lon} />}
        {points.length > 0 &&
          points.map((p, i) => (
            <CircleMarker
              key={`${p.lat}-${p.lon}-${i}`}
              center={[p.lat, p.lon]}
              radius={Math.max(20, Math.min(22, (p.value ?? 0) / 2 + 6))}
              pathOptions={{
                color: p.parameter === "pm2_5" ? pm25Color(Number(p.value)) : "#00ba1cff", // Color based on PM2.5 value
              }}
              eventHandlers={{
                click: () => handlePointClick(p), // Handle click event on the marker
              }}
            >
              <Tooltip>
                <div>
                  <strong>{p.location}</strong>
                </div>
                {p.parameter && (
                  <div>
                    {p.parameter.toUpperCase()}: {p.value} {p.unit ?? ""}
                  </div>
                )}
              </Tooltip>
            </CircleMarker>
          ))}
      </MapContainer>
      {/* Loading hint */}
        {loadingLocs && (
        <div
                style={{
                position: "fixed",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: 18,
                background: "rgba(31, 41, 55, 0.9)",
                color: "white",
                padding: "8px 12px",
                borderRadius: 8,
                fontSize: 13,
                boxShadow: "0 6px 20px rgba(0,0,0,0.45)",
                zIndex: 99999,
                }}
         >
            Loading stations…
        </div>
        )}
    </div>
  );
}
