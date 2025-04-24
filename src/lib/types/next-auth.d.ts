import { User } from "next-auth";

declare module "next-auth" {
  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User {
    token: string;
    user: {
      username: string;
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      role: string;
      isVerified: false;
    } & dataBaseProbs;
  }

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends Omit<User, "token"> {}
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends User {
    /** OpenID ID Token */
    idToken?: string;
  }
}
