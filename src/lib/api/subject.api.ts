import { getAuthHeader } from "../utils/auth-header";
import { singleSubject, subjects } from "../types/subjects";

export const getSubjects = async (limit: number) => {
  const url = new URL(`${process.env.API}/subjects`);

  if (limit !== undefined) {
    url.searchParams.append("limit", limit.toString());
  }

  const response = await fetch(url.toString(), {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<paginatedResponse<subjects>> =
    await response.json();

  return payload;
};

export const getSingleSubjects = async (subjectId: string) => {
  const url = new URL(`${process.env.API}/subjects/${subjectId}`);

  const response = await fetch(url.toString(), {
    headers: {
      ...(await getAuthHeader()),
    },
  });
  // console.log(response);

  const payload: APIResponse<singleSubject> = await response.json();

  return payload;
};
