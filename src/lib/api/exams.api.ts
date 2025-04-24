import { getAuthHeader } from "../utils/auth-header";
import { exams } from "../types/exams";

export const getExams = async (limit: number) => {
  const url = new URL(`${process.env.API}/exams`);

  if (limit !== undefined || 0) {
    url.searchParams.append("limit", limit.toString());
  }

  const response = await fetch(url.toString(), {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<paginatedResponse<exams>> =
    await response.json();

  return payload;
};
