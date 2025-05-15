"use client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { AnswersFields, ExamSchema } from "@/lib/schemes/exam.schema";
import { question } from "@/lib/types/question";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { CheckResponse } from "@/lib/types/exams";
import ExamDuration from "./exam-duration";
import useCheckQuestions from "../_hooks/use-check-questions";
import ExamResaults from "./exam-results";

interface QuestionFormProps {
  questions: question[];
}

function QuestionForm({ questions }: QuestionFormProps) {
  // ? state
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false); // for showing the result after submition
  const [resultData, setResultData] = useState<CheckResponse | null>(null); // to store the results data

  // ? mutations
  const { isPending, checkQuestions } = useCheckQuestions();

  // ? variables
  const currentQusestion = questions[step];

  // ? form
  const form = useForm<AnswersFields>({
    resolver: zodResolver(ExamSchema),
  });

  // ? functions
  const onSubmit: SubmitHandler<AnswersFields> = (values) => {
    checkQuestions(values, {
      onSuccess: (data) => {
        data.WrongQuestions.forEach((question) => {
          let questionIndex: number | null = null;

          form.getValues("answers").find((answer, j) => {
            if (answer.questionId === question.Question) {
              questionIndex = j;
              return true;
            }
            return false;
          });

          if (questionIndex !== null) {
            form.setError(`answers.${questionIndex}`, {
              message: question.correctAnswer,
            });
          }
        });

        setResultData(data);
        setIsSubmitted(true);
      },
    });
  };

  return (
    <>
      {isSubmitted && resultData ? (
        <ExamResaults resultData={resultData} />
      ) : (
        <>
          {/* header */}
          <header className="flex justify-between items-center text-sm">
            <p className="text-custom-main">
              question {step + 1} : {questions.length}
            </p>

            {/* duration */}
            <ExamDuration duration={questions[step].exam.duration} onTimeChange={(date) => form.setValue("time", date.getMinutes())} />
          </header>

          {/* steps */}
          <ul className="flex items-center justify-between">
            {Array.from({ length: questions.length }, (_, i) => i).map((i) => (
              <li key={i} className={cn("size-2 bg-slate-400 rounded-full transition-colors", step + 1 > i && "bg-custom-main")}></li>
            ))}
          </ul>

          {/* form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="font-inter grow flex flex-col">
              <FormField
                control={form.control}
                name={`answers.${step}`}
                render={({ field }) => (
                  <FormItem>
                    {/* label */}
                    <FormLabel className="font-semibold text-lg">{currentQusestion.question}</FormLabel>

                    {/* options */}
                    <FormControl>
                      <RadioGroup
                        disabled={isPending}
                        value={answer}
                        onValueChange={(value) => {
                          setAnswer(value);
                          field.onChange({
                            questionId: currentQusestion._id,
                            correct: value,
                          });
                        }}
                        name={currentQusestion._id}
                        className="flex flex-col space-y-1">
                        {currentQusestion.answers.map((answer) => (
                          <FormItem key={answer.key} className="flex items-center space-x-3 space-y-0 bg-[#EDEFF3] ps-4  rounded-xl">
                            {/* radio */}
                            <FormControl>
                              <RadioGroupItem className="text-custom-main" value={answer.key} />
                            </FormControl>

                            {/* label */}
                            <FormLabel className="font-normal grow py-4 px-4 cursor-pointer">{answer.answer}</FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>

                    {/* feedback */}
                    <FormMessage className="text-green-600 font-bold text-xl" />
                  </FormItem>
                )}></FormField>

              {/* footer */}
              <div className="grid grid-cols-2 gap-6 mt-auto">
                <Button
                  disabled={isPending || step === 0}
                  type="button"
                  onClick={() => {
                    const prevAnswer = form.getValues(`answers.${step - 1}`);

                    if (!prevAnswer?.correct) {
                      setAnswer("");
                    } else {
                      setAnswer(prevAnswer.correct);
                    }

                    setStep((prev) => prev - 1);
                  }}
                  className="bg-white border border-custom-main rounded-full text-custom-main hover:bg-slate-200 ">
                  Previos
                </Button>
                <Button
                  disabled={(() => {
                    if (isPending) return true;
                    if (step === questions.length - 1) return false;

                    const currentAnswer = form.getValues(`answers.${step}`);

                    if (currentAnswer?.correct) return false;

                    return true;
                  })()}
                  type={step < questions.length - 1 ? "button" : "submit"}
                  onClick={() => {
                    if (step === questions.length - 1) return;
                    const nextAnswer = form.getValues(`answers.${step + 1}`);

                    if (!nextAnswer?.correct) {
                      setAnswer("");
                    } else {
                      setAnswer(nextAnswer.correct);
                    }

                    setStep((prev) => prev + 1);
                  }}
                  className="bg-custom-main rounded-full text-white hover:bg-blue-600 ">
                  {step < questions.length - 1 ? "Next" : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        </>
      )}
    </>
  );
}

export default QuestionForm;
