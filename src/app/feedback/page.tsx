"use client";
import dynamic from "next/dynamic";
import LearnPage from "../components/Learn";
const Map = dynamic(() => import("../components/Map"), { ssr: false });
import FeedbackPage from "../components/Feedback";
export default function Page() {
  return (
    <main style={{ height: "100vh", width: "100vw" }}>
      <FeedbackPage />
    </main>
  );
}
