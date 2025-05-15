import { getAuthHeader } from "../utils/auth-header";
import { Exams } from "../types/exams";

// ? get all exams with limit params
export const getExams = async (limit: number) => {
  const url = new URL(`${process.env.API}/exams`);

  // ? if limit is sent or not 0 else get all exams
  if (limit !== undefined || 0) {
    url.searchParams.append("limit", limit.toString());
  }

  const response = await fetch(url.toString(), {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<PaginatedResponse<Exams>> = await response.json();

  return payload;
};
