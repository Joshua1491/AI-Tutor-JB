export type Exam = {
  id: string;
  name: string;
  country: string;
  category: string;
  lessons: number;
  questions: number;
  flashcards: number;
  tests: number;
};

export const exams: Exam[] = [
  {
    id: "sat-us",
    name: "SAT® – United States",
    country: "USA",
    category: "College Entrance",
    lessons: 42,
    questions: 2400,
    flashcards: 820,
    tests: 8,
  },
  {
    id: "jee-india",
    name: "JEE Main – India",
    country: "India",
    category: "Engineering",
    lessons: 55,
    questions: 3200,
    flashcards: 1250,
    tests: 10,
  },
  {
    id: "ielts-global",
    name: "IELTS Academic",
    country: "Global",
    category: "English Language",
    lessons: 30,
    questions: 1800,
    flashcards: 600,
    tests: 6,
  },
  {
    id: "gre-us",
    name: "GRE® General Test",
    country: "USA",
    category: "Graduate Entrance",
    lessons: 38,
    questions: 2600,
    flashcards: 900,
    tests: 5,
  },
  {
    id: "gmat-global",
    name: "GMAT™",
    country: "Global",
    category: "Business School",
    lessons: 40,
    questions: 2300,
    flashcards: 750,
    tests: 6,
  },
  {
    id: "neet-india",
    name: "NEET – India",
    country: "India",
    category: "Medical",
    lessons: 48,
    questions: 3100,
    flashcards: 1180,
    tests: 12,
  },
  {
    id: "cat-india",
    name: "CAT – India",
    country: "India",
    category: "Business School",
    lessons: 36,
    questions: 2100,
    flashcards: 680,
    tests: 4,
  },
  {
    id: "lsat-us",
    name: "LSAT® – United States",
    country: "USA",
    category: "Law School",
    lessons: 29,
    questions: 1700,
    flashcards: 540,
    tests: 7,
  },
];
