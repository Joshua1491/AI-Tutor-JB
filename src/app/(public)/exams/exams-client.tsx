"use client";

import { useState, useMemo } from "react";
import ExamCard from "@/components/exam-card";
import ExamFilterBar, { FilterState } from "@/components/exam-filter-bar";
import { exams } from "@/lib/mock-exams";

export default function ExamsClient() {
  const [filter, setFilter] = useState<FilterState>({
    country: "All",
    category: "All",
  });

  const filtered = useMemo(() => {
    return exams.filter((e) => {
      const countryOk =
        filter.country === "All" || e.country === filter.country;
      const categoryOk =
        filter.category === "All" || e.category === filter.category;
      return countryOk && categoryOk;
    });
  }, [filter]);

  return (
    <div className="relative isolate">
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-radial py-24">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fadeInUp">
            Conquer Your Exam
          </h1>
          <p className="mt-4 text-muted-foreground animate-fadeInUp delay-100">
            Search 10,000+ curated exam study plans, lessons and AI-powered
            tests.
          </p>
        </div>
        {/* subtle noise overlay */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20" />
      </section>

      {/* CONTENT */}
      <section className="-mt-12 pb-24 px-6">
        <div className="mx-auto max-w-6xl">
          <ExamFilterBar onChange={setFilter} />

          {/* Grid */}
          <div
            id="exam-grid"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((exam) => (
              <ExamCard key={exam.id} exam={exam} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
