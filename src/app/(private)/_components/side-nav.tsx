"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdSpaceDashboard } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import logo from "../../../../public/assets/images/Final Logo 1.png";
import { BiSolidLogOut } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react"

function Page() {
  const pathName = usePathname();
  // ? side nav items array
  const sideNavItems: { icon: React.ReactNode; name: string; slug: string }[] =
    [
      {
        icon: (
          <MdSpaceDashboard
            className={`text-2xl  ease-in duration-100 ${
              pathName == "/dashboard" ? "text-white" : "text-main"
            }`}
          />
        ),
        name: "Dashboard",
        slug: "/dashboard",
      },
      {
        icon: (
          <RxCountdownTimer
            className={`text-2xl  ease-in duration-100 ${
              pathName == "/quiz-history" ? "text-white" : "text-main"
            }`}
          />
        ),
        name: "Quiz History",
        slug: "/quiz-history",
      },
    ];
  return (
    <nav className="col-span-3">
      {/* logo */}
      <Image
        src={logo}
        width={120}
        height={92}
        alt="elevate logo"
        className="mb-12"
      />

      {/* links */}
      <ul className="">
        {sideNavItems.map((item) => (
          <li
            key={item.slug}
            className={`flex items-center gap-4 py-1 px-2 mb-8 w-fit rounded-xl ease-in duration-100
          ${item.slug == pathName ? "bg-main" : "bg-none"}
          `}
          >
            <span>{item.icon}</span>
            <Link
              href={item.slug}
              className={`font-poppins font-semibold text-xl ease-in duration-100 ${
                item.slug == pathName ? "text-white" : "text-[#696F79]"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}

        {/* log out */}
        <li className="cursor-pointer flex items-center gap-4 py-1 px-2">
          <span>
            <BiSolidLogOut className="text-main text-2xl" />
          </span>
          <Button onClick={() => signOut()} className="font-poppins font-semibold text-xl text-[#696F79]">
            Logout
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Page;
