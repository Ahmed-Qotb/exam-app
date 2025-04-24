import type { NextAuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const response = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          cache: "no-store",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });
        const payload: APIResponse<User> = await response.json();

        if ("code" in payload) {
          throw new Error(payload.message);
        }

        return {
          id: payload.user._id,
          user: payload.user,
          token: payload.token,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.token = user.token;
        token.user = user.user;
      }
      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user;
      return session;
    },
  },
};
