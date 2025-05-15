import { Questions } from "@/lib/types/question";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const JWT = await getToken({ req });

  const response = await fetch(`${process.env.API}/questions?${searchParams.toString()}`, {
    headers: {
      token: JWT?.token || "",
    },
  });

  const payload: APIResponse<PaginatedResponse<Questions>> = await response.json();

  return NextResponse.json(payload, { status: response.status });
}
