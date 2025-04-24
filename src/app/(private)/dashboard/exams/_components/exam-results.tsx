"use client";

import { Button } from "@/components/ui/button";
import {
  CheckResponse,
  CorrectQuestions,
  WrongQuestions,
} from "@/lib/types/exams";
import { useState } from "react";

interface ResultsSummaryProps {
  resultData: CheckResponse;
}

function ExamResaults({ resultData }: ResultsSummaryProps) {
  // ? states
  const [showDetails, setShowDetails] = useState(false); // to show right and wrong answers
  console.log(resultData.WrongQuestions[0].correctAnswer);

  //   ? variables
  const percent = Number(resultData.total.replace("%", ""));
  const correct = resultData.correct;
  const wrong = resultData.wrong;

  return (
    <div className="space-y-4">
      {!showDetails && (
        <div>
          <p className="text-2xl"> Your score</p>
          <div className="flex gap-11 items-center justify-center p-6 bg-white rounded-xl shadow-md space-y-4">
            {/* Circular progress */}
            <div className="relative w-32 h-32">
              <svg
                className="transform -rotate-90"
                width="100%"
                height="100%"
                viewBox="0 0 36 36"
              >
                {/* Background circle (wrong answers in red) */}
                <path
                  className="text-[#CC1010]"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Foreground circle (correct answers in blue) */}
                <path
                  className="text-[#02369C]"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray={`${percent}, 100`}
                  strokeLinecap="round"
                  fill="none"
                  d="M18 2.0845
           a 15.9155 15.9155 0 0 1 0 31.831
           a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-gray-700">
                {percent}%
              </div>
            </div>

            {/* Summary text */}
            <div className="text-center space-y-6 text-xl font-bold">
              <p className="text-[#02369C] font-medium">
                Correct :{" "}
                <span className="ms-2 px-3 border rounded-full border-[#02369C]">
                  {correct}
                </span>
              </p>
              <p className="text-[#CC1010] font-medium">
                Incorrect
                <span className="ms-2 px-2 border rounded-full border-[#CC1010]">
                  {wrong}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}

      <Button
        className="bg-main text-white rounded-full w-full"
        onClick={() => setShowDetails((prev) => !prev)}
      >
        {showDetails ? "Hide Feedback" : "Show Feedback"}
      </Button>

      {showDetails && (
        <div className="space-y-4 mt-4 grid grid-cols-2 gap-4">
          {resultData.WrongQuestions.map((question: WrongQuestions) => (
            <div
              key={question.QID}
              className="p-4 border bg-[#F8D2D2] col-span-1 rounded-xl"
            >
              <p className="font-semibold">{question.Question}</p>
              <p className="text-sm text-gray-700">
                Correct Answer: {question.correctAnswer}
              </p>
              <p className="text-sm text-gray-700">
                Your Answer: {question.inCorrectAnswer}
              </p>
            </div>
          ))}

          {resultData.correctQuestions?.map((question: CorrectQuestions) => (
            <div
              key={question.QID}
              className="p-4 border bg-[#CAF9CC] col-span-1 rounded-xl"
            >
              <p className="font-semibold">{question.Question}</p>
              <p className="text-sm text-gray-700">
                Your Answer: {question.correctAnswer}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExamResaults;
