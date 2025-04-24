"use server";

import { SignUpFields } from "@/lib/schemes/signUp.schema";
import { getAuthHeader } from "@/lib/utils/auth-header";
import { userDataType } from "@/lib/types/userdata";

export async function signUpAction(fields: SignUpFields) {
  const response = await fetch(`${process.env.API}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      ...(await getAuthHeader()),
      "Content-Type": "application/json",
    },
  });

  const payload: APIResponse<userDataType> = await response.json();

  return payload;
}
