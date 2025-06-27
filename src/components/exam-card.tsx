import Link from "next/link";
import { Exam } from "@/lib/mock-exams";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ExamCard({ exam }: { exam: Exam }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={`/exams/${exam.id}`}
        className="group relative block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-card hover:shadow-xl transition-shadow duration-300"
      >
        {/* glow */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none group-hover:ring-2 group-hover:ring-accent/60 transition" />
        <h3 className="text-lg font-semibold mb-1">{exam.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {exam.country} · {exam.category}
        </p>

        <ul className="text-xs grid grid-cols-2 gap-2 opacity-90 mb-6">
          <li>{exam.lessons} Lessons</li>
          <li>{exam.questions} Qs</li>
          <li>{exam.flashcards} Flashcards</li>
          <li>{exam.tests} Tests</li>
        </ul>

        <span className="inline-flex items-center gap-1 text-primary font-medium">
          Explore <ArrowRight size={14} />
        </span>
      </Link>
    </motion.div>
  );
}
