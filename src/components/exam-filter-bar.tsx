"use client";
import { useState } from "react";
import clsx from "clsx";

export type FilterState = { country: string; category: string };

const countries = ["All", "India", "USA", "UK", "Canada"];
const categories = ["All", "Engineering", "Medical", "College Entrance"];

export default function ExamFilterBar({
  onChange,
}: {
  onChange: (s: FilterState) => void;
}) {
  const [state, setState] = useState<FilterState>({
    country: "All",
    category: "All",
  });

  function update(partial: Partial<FilterState>) {
    const next = { ...state, ...partial } as FilterState;
    setState(next);
    onChange(next);
  }

  return (
    <div className="flex flex-wrap items-center gap-4 mb-10">
      {/* Countries */}
      {countries.map((c) => (
        <button
          key={c}
          className={clsx(
            "rounded-full px-4 py-1 text-xs border transition",
            c === state.country
              ? "bg-primary text-white border-primary"
              : "border-white/20 hover:bg-white/10",
          )}
          onClick={() => update({ country: c })}
        >
          {c}
        </button>
      ))}

      <span className="hidden sm:inline-block w-px h-4 bg-white/20 mx-2" />

      {/* Categories */}
      {categories.map((cat) => (
        <button
          key={cat}
          className={clsx(
            "rounded-full px-4 py-1 text-xs border transition",
            cat === state.category
              ? "bg-accent text-black border-accent"
              : "border-white/20 hover:bg-white/10",
          )}
          onClick={() => update({ category: cat })}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
