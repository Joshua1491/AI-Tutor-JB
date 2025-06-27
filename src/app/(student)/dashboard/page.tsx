import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const stats = [
  {
    title: "Lessons completed",
    value: 12,
  },
  {
    title: "Active streak",
    value: "5 days",
  },
  {
    title: "Average score",
    value: "88%",
  },
];

export default function DashboardPage() {
  return (
    <div className="container py-10 space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.title}>
            <CardHeader>
              <CardTitle className="text-sm text-muted-foreground">
                {s.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className="text-2xl font-semibold">{s.value}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-4">
        <Link href="/lesson">
          <Button>Continue Learning</Button>
        </Link>
        <Link href="/quiz">
          <Button variant="secondary">Take a Quiz</Button>
        </Link>
      </div>
    </div>
  );
} 