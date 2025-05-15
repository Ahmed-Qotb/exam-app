import { Exam } from "./exams";

export type Questions = {
  questions: Question[];
};

type Question = {
  answers: {
    answer: string;
    key: string;
  }[];
  type: "single_choice" | "multiple_choice";
  question: "What does HTML stand for?";
  correct: "A2";
  subject: Subject;
  exam: Exam;
} & DatabaseProps;
