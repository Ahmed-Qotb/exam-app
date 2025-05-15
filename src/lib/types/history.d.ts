export type History = {
  history: {
    checkAnswer: "correct" | "wrong";
    QID: {
      _id: string;
      question: string;
      answers: {
        answer: string;
        key: string;
      }[];
      type: "single_choice" | "multiple_choice" | string;
      correct: string;
      subject: string;
      exam: string;
      createdAt: string;
    };
    user: string;
    chosenAnswer: string;
    avgAnswerTime: string;
  };
} & DatabaseProps;
