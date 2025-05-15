import { getAuthHeader } from "../utils/auth-header";
import { Questions } from "../types/question";

// ? get all questions in a single exam
export const getQuestions = async (examId: string) => {
  const url = new URL(`${process.env.API}/questions`);

  url.searchParams.append("exam", examId);

  const response = await fetch(url.toString(), {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<PaginatedResponse<Questions>> = await response.json();

  return payload;
};
