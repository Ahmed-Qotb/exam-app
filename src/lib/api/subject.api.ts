import { getAuthHeader } from "../utils/auth-header";
import { SingleSubject, Subjects } from "../types/subjects";

// ? get all subjects (subject-list component)
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

  const payload: APIResponse<PaginatedResponse<Subjects>> = await response.json();

  return payload;
};

// ? get single subject ([subjectId])
export const getSingleSubject = async (subjectId: string) => {
  const url = new URL(`${process.env.API}/subjects/${subjectId}`);

  const response = await fetch(url.toString(), {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<SingleSubject> = await response.json();

  return payload;
};
