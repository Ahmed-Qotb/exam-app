import { redirect } from "next/navigation";

export default function Home() {
  redirect("/sign-in"); // Better to be handeled in next.config.mjs (See docs: https://nextjs.org/docs/app/api-reference/config/next-config-js/redirects)
}
