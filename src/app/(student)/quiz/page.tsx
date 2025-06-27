"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const question = {
  prompt: "Which of the following is a branch of Artificial Intelligence?",
  options: ["Astrophysics", "Machine Learning", "Organic Chemistry", "Civil Law"],
  answer: 1,
};

export default function QuizPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const isCorrect = submitted && selected === question.answer;

  return (
    <div className="container py-10 space-y-6">
      <h1 className="text-3xl font-bold">Quick Quiz</h1>

      <Card>
        <CardHeader>
          <CardTitle>{question.prompt}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {question.options.map((opt, idx) => (
              <li key={idx}>
                <Button
                  variant={selected === idx ? "default" : "secondary"}
                  className="w-full justify-start"
                  onClick={() => !submitted && setSelected(idx)}
                >
                  {opt}
                </Button>
              </li>
            ))}
          </ul>
          {submitted ? (
            <p className="mt-4 font-medium">
              {isCorrect ? "✅ Correct!" : "❌ Incorrect, try again next time."}
            </p>
          ) : (
            <Button
              className="mt-6 w-full"
              disabled={selected === null}
              onClick={() => setSubmitted(true)}
            >
              Submit Answer
            </Button>
          )}
        </CardContent>
      </Card>

      <Link href="/dashboard">
        <Button variant="secondary">Back to Dashboard</Button>
      </Link>
    </div>
  );
} 