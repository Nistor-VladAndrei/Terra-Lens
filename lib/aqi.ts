/** Simple PM2.5 color ramp (µg/m³) — tweak as you like */
export function pm25Color(v: number | undefined) {
  if(v === undefined) return "#1e88e5";
  if (v == null) return "#666";
  if (v <= 12) return "#2ecc71";
  if (v <= 35) return "#f1c40f";
  if (v <= 55) return "#e67e22";
  if (v <= 150) return "#e74c3c";
  return "#8e44ad";
}