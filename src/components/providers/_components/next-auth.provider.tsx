"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

type ProvidersProbs = {
  children: React.ReactNode;
};

function NextAuthProvider({ children }: ProvidersProbs) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAuthProvider;
