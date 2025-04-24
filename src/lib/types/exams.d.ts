export type exam = {
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: true;
} & dataBaseProbs;

export type exams = {
  exams: exam[];
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
  // answers: {}
};

export type CorrectQuestions = {
  QID: string;
  Question: string;
  incorrectAnswer: string;
  correctAnswer: string;
  // answers: {}
};
