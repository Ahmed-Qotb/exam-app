"use client";
type ProvidersProbs = {
  children: React.ReactNode;
};

import { SessionProvider } from "next-auth/react";
import React from "react";

function NextAuthProvider({ children }: ProvidersProbs) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default NextAuthProvider;
