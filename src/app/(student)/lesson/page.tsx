import { Button } from "@/components/ui/button";
import Link from "next/link";
import LLMChat from "@/components/llm-chat";

export default function LessonPage() {
  return (
    <div className="container py-10 space-y-8">
      <h1 className="text-3xl font-bold">Lesson 1: Introduction to AI</h1>
      <p className="leading-7">
        Artificial Intelligence (AI) refers to the simulation of human
        intelligence in machines that are programmed to think and learn like
        humans. In this lesson, we&apos;ll explore the basics of AI.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>What is AI?</li>
        <li>History &amp; Evolution</li>
        <li>Modern applications</li>
      </ul>

      <div className="flex gap-4 pt-6">
        <Link href="/dashboard">
          <Button variant="secondary">Back to Dashboard</Button>
        </Link>
        <Link href="/quiz">
          <Button>Go to Quiz</Button>
        </Link>
      </div>

      {/* Interactive chat tutor */}
      <h2 className="mt-12 text-xl font-semibold">Ask the Tutor</h2>
      <LLMChat />
    </div>
  );
}
