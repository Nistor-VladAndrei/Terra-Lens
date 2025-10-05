"use client";
import dynamic from "next/dynamic";
import LearnPage from "../components/Learn";
const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function Page() {
  return (
    <main style={{ height: "100vh", width: "100vw" }}>
      <LearnPage />
    </main>
  );
}
