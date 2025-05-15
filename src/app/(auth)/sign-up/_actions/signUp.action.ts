"use server";

import { SignUpFields } from "@/lib/schemes/signup.schema";
import { getAuthHeader } from "@/lib/utils/auth-header";
import { UserDataType } from "@/lib/types/user";

export async function signUpAction(fields: SignUpFields) {
  const response = await fetch(`${process.env.API}/auth/signup`, {
    method: "POST",
    body: JSON.stringify(fields),
    headers: {
      ...(await getAuthHeader()),
      "Content-Type": "application/json",
    },
  });

  const payload: APIResponse<UserDataType> = await response.json();

  return payload;
}
