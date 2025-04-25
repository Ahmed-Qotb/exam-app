import { userDataType } from "@/lib/types/userdata";
import { getAuthHeader } from "../utils/auth-header";

// ? get user data (profile componant)
export const getUserData = async () => {
  const url = new URL(`${process.env.API}/auth/profileData`);

  const response = await fetch(url, {
    headers: {
      ...(await getAuthHeader()),
    },
  });
  const payload: APIResponse<userDataType> = await response.json();
  return payload;
};