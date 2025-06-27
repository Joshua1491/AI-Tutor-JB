"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function Navbar(): ReactNode {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur">
      {/* --- inner container keeps 24-32 px side padding & centres max-width --- */}
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-8">
        {/* Brand ---------------------------------------------------------------- */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight transition-colors hover:text-primary"
        >
          AI&nbsp;Tutor
        </Link>

        {/* Nav links ----------------------------------------------------------- */}
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/onboarding" className="hover:opacity-80">
            Onboarding
          </Link>
          <Link href="/dashboard" className="hover:opacity-80">
            Dashboard
          </Link>
          <Link href="/lesson" className="hover:opacity-80">
            Lesson
          </Link>
          <Link href="/quiz" className="hover:opacity-80">
            Quiz
          </Link>
        </nav>
      </div>
    </header>
  );
}
