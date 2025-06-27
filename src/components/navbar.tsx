"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/onboarding", label: "Onboarding" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/lesson", label: "Lesson" },
  { href: "/quiz", label: "Quiz" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-bold">
          AI Tutor
        </Link>
        <button
          className="sm:hidden p-2"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        <ul className="hidden sm:flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={
                  pathname === l.href ? "font-semibold text-primary" : "text-muted-foreground"
                }
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <ul className="sm:hidden bg-background border-t border-border px-6 pb-4 pt-2 space-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                onClick={() => setOpen(false)}
                href={l.href}
                className={
                  pathname === l.href ? "font-semibold text-primary" : "text-muted-foreground"
                }
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
} 