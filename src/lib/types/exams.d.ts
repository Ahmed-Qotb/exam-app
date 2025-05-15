export type Exam = {
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: true;
} & dataBaseProbs;

export type Exams = {
  exams: Exam[];
};

declare type CheckResponse = {
  correct: number;
  wrong: number;
  total: string;
  WrongQuestions: WrongQuestions[];
  correctQuestions: CorrectQuestions[];
};

export type WrongQuestions = {
  QID: string;
  Question: string;
  correctAnswer: string;
  inCorrectAnswer: string;
};

export type CorrectQuestions = {
  QID: string;
  Question: string;
  incorrectAnswer: string;
  correctAnswer: string;
  // answers: {}
};
