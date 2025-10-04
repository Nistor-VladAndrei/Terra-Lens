import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronDown } from "lucide-react";
import { City } from "../../../lib/cities";

export type Props = {
  cities: City[];
  city: City;
  setCity: Dispatch<SetStateAction<City>>;
  nowPm25?: number | undefined;
  pm25Color?: (v: number | undefined) => string;
};

export default function AirPollutionControl({
  cities,
  city,
  setCity,
  nowPm25,
  pm25Color,
}: Props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => setHighlight(0), [query]);

  const normalized = (s: string) => s.trim().toLowerCase();
  const filtered = cities.filter((c) => normalized(c.name).includes(normalized(query)));

  const handleSelect = (c: City) => {
    setCity(c);
    setOpen(false);
    setQuery("");
    inputRef.current?.blur();
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (!open && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      setOpen(true);
      return;
    }

    if (e.key === "ArrowDown") {
      setHighlight((h) => Math.min(h + 1, filtered.length - 1));
      e.preventDefault();
    }
    if (e.key === "ArrowUp") {
      setHighlight((h) => Math.max(h - 1, 0));
      e.preventDefault();
    }
    if (e.key === "Enter") {
      const hit = filtered[highlight];
      if (hit) handleSelect(hit);
    }
    if (e.key === "Escape") {
      setOpen(false);
      setQuery("");
    }
  };

  const fallbackColor = (v: number | undefined) => {
    if (v == null || isNaN(Number(v))) return "#9CA3AF";
    if (v <= 12) return "#10B981";
    if (v <= 35) return "#F59E0B";
    if (v <= 55) return "#F97316";
    return "#EF4444";
  };

  const getPmColor = (v: number | undefined) => (pm25Color ? pm25Color(v) : fallbackColor(v));

  return (
    <motion.div
      initial={{ opacity: 0, y: -8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="absolute z-50 top-3 left-3 min-w-[260px] max-w-[300px] text-sm"
      style={{
        fontFamily: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
        background: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(10px)",
        borderRadius: "20px",
      }}
    >
      <div className="text-white p-4 shadow-2xl">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-semibold text-xl tracking-tight">Air Pollution Map</div>
            <div className="text-xs text-gray-300 mt-1">Data: OpenAQ (observed), Open-Meteo (forecast)</div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setOpen((o) => !o);
                inputRef.current?.focus();
              }}
              aria-expanded={open}
              className="bg-gray-800/40 hover:bg-gray-800/60 transition p-1 rounded-md"
              title="Toggle search"
            >
              <ChevronDown size={18} />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-xs text-gray-300 mb-2">City</label>

          <div className="relative">
            <div className="flex items-center gap-2 bg-gray-800/60 rounded-md px-3 py-2">
              <Search size={16} className="text-gray-300" />

              <input
                ref={inputRef}
                className="bg-transparent outline-none flex-1 placeholder:text-gray-500 text-sm"
                placeholder={city ? city.name : "Search city..."}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setOpen(true);
                }}
                onFocus={() => setOpen(true)}
                onKeyDown={handleKeyDown}
                aria-autocomplete="list"
              />

              {query ? (
                <button onClick={() => setQuery("")} className="p-1 rounded hover:bg-gray-700/50">
                  <X size={14} />
                </button>
              ) : (
                <div className="text-xs text-gray-400">⌘K</div>
              )}
            </div>

            <select
              className="sr-only"
              value={city?.name ?? ""}
              onChange={(e) => {
                const c = cities.find((x) => x.name === e.target.value);
                if (c) handleSelect(c);
              }}
            >
              <option value="">Select</option>
              {cities.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>

            <AnimatePresence>
              {open && (
                <motion.ul
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.16 }}
                  className="absolute z-40 mt-2 max-h-52 w-full overflow-auto rounded-lg border border-gray-800/60 bg-gray-900/95 shadow-lg py-1"
                >
                  {filtered.length === 0 ? (
                    <li className="px-3 py-2 text-xs text-gray-400">No cities found</li>
                  ) : (
                    filtered.map((c, i) => (
                      <motion.li
                        key={c.name}
                        onMouseEnter={() => setHighlight(i)}
                        onClick={() => handleSelect(c)}
                        whileHover={{ scale: 1.01 }}
                        className={`px-3 py-2 cursor-pointer flex items-center justify-between gap-2 select-none ${
                          i === highlight ? "bg-gray-800/60" : "hover:bg-gray-800/40"
                        }`}
                      >
                        <div className="truncate">{c.name}</div>
                        <div className="text-xs text-gray-400">
                          {c.lat.toFixed(2)}, {c.lon.toFixed(2)}
                        </div>
                      </motion.li>
                    ))
                  )}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="text-xs text-gray-300">Forecast PM2.5 (now)</div>
          <div className="text-sm font-semibold" style={{ color: getPmColor(nowPm25) }}>
            {nowPm25 ?? "—"} µg/m³
          </div>
        </div>

        <div className="mt-3 text-[12px] text-gray-500">Tip: start typing to search cities — use arrow keys + Enter to pick.</div>
      </div>
    </motion.div>
  );
}
