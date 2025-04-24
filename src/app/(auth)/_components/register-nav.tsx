"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ? auth nav items array
const authNavItems: { name: string; slug: string }[] = [
  { name: "Sign In", slug: "/sign-in" },
  { name: "Register", slug: "/sign-up" },
];

function Page() {
  const pathName = usePathname();

  return (
    <div>
      <nav>
        <ul className="flex gap-2 whitespace-nowrap font-inter">
          <li className="px-4">English</li>
          {authNavItems.map((item) => (
            <li key={item.slug}>
              <Link
                href={`${item.slug}`}
                className={`${
                  pathName === item.slug
                    ? "font-bold text-main border-2 shadow-small border-main2  rounded-2xl px-4 py-1 ease-in duration-200"
                    : "font-bold text-main border-2 border-transparent rounded-2xl px-4 py-1"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Page;
