import { UserDataType } from "@/lib/types/user";
import { getAuthHeader } from "../utils/auth-header";

// ? get user data (profile componant)
export const getUserData = async () => {
  const url = new URL(`${process.env.API}/auth/profileData`);

  const response = await fetch(url, {
    headers: {
      ...(await getAuthHeader()),
    },
  });

  const payload: APIResponse<UserDataType> = await response.json();

  return payload;
};
