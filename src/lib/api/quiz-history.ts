import { getAuthHeader } from "../utils/auth-header";
import { History } from "../types/history";

export const getHistory = async () => {
  const url = new URL(`${process.env.API}/questions/history`);

  const response = await fetch(url, {
    headers: {
      ...(await getAuthHeader()),
    },
  });
  const payload: APIResponse<History> = await response.json();
  return payload;
};
