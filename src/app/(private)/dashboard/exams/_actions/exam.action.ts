"use server";

import { AnswersFields } from "@/lib/schemes/exam.schema";
import { CheckResponse } from "@/lib/types/exams";
import { getAuthHeader } from "@/lib/utils/auth-header";

export async function checkQuestionsAction(fields: AnswersFields) {
  const response = await fetch(`${process.env.API}/questions/check`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      ...(await getAuthHeader()),
      "Content-Type": "application/json",
    },
  });

  const payload: APIResponse<CheckResponse> = await response.json();

  return payload;
}
