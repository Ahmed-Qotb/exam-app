import { getAuthHeader } from "../utils/auth-header";
import { questions } from "../types/question";

export const getQuestions = async (examId: string) => {
  const url = new URL(`${process.env.API}/questions`);
  url.searchParams.append("exam", examId);
  // console.log("Requested exam ID:", examId); 
  const response = await fetch(url.toString(), {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<paginatedResponse<questions>> = await response.json();
  return payload;
};
