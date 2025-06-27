import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Toaster } from "sonner";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AI Tutor",
  description: "Personalized AI-powered tutoring platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="bg-background min-h-screen antialiased">
        <ThemeProvider>
          <Navbar />
          <main className="pt-16 relative z-10">{children}</main>
          <Toaster richColors position="top-center" />
        </ThemeProvider>
        {/* Decorative background */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-muted blur-3xl" />
      </body>
    </html>
  );
}
