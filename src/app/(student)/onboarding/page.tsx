import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function OnboardingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 bg-background p-6 text-center">
      <h1 className="text-3xl font-bold">Welcome to AI Tutor</h1>
      <p className="max-w-md text-muted-foreground">
        We&apos;ll ask a few quick questions to personalize your learning experience.
      </p>
      <div className="flex gap-4">
        <Link href="/dashboard">
          <Button size="lg">Skip for now</Button>
        </Link>
        <Link href="/lesson">
          <Button variant="secondary" size="lg">
            Start onboarding
          </Button>
        </Link>
      </div>
    </div>
  );
} 