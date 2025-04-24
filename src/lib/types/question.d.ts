import { exam } from "./exams";
import { subject } from "./subjects";

export type questions = {
  questions: question[];
};

type question = {
  answers: {
    answer: string;
    key: string;
  }[];
  type: "single_choice" | "multiple_choice";
  question: "What does HTML stand for?";
  correct: "A2";
  subject: subject;
  exam: exam;
} & dataBaseProbs;
