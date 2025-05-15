"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdSpaceDashboard } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import logo from "assets/images/Final Logo 1.png";
import { BiSolidLogOut } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils/cn";

function Page() {
  // Navigation
  const pathName = usePathname();

  // Variables
  const sideNavItems: { icon: React.ReactNode; name: string; slug: string }[] = [
    {
      icon: (
        <MdSpaceDashboard className={cn("text-2xl  ease-in duration-100 text-custom-main", pathName == "/dashboard" && "text-white")} />
      ),
      name: "Dashboard",
      slug: "/dashboard",
    },
    {
      icon: (
        <RxCountdownTimer className={cn("text-2xl  ease-in duration-100 text-custom-main", pathName == "/quiz-history" && "text-white")} />
      ),
      name: "Quiz History",
      slug: "/quiz-history",
    },
  ];

  return (
    <nav className="col-span-3">
      {/* logo */}
      <Image src={logo} width={120} height={92} alt="elevate logo" className="mb-12" />

      {/* links */}
      <ul>
        {sideNavItems.map((item) => (
          <li
            key={item.slug}
            className={`flex items-center gap-4 py-1 px-2 mb-8 w-fit rounded-xl ease-in duration-100
          ${item.slug == pathName ? "bg-custom-main" : "bg-none"}
          `}>
            {/* Icon */}
            <span>{item.icon}</span>

            {/* Link */}
            <Link
              href={item.slug}
              className={`font-poppins font-semibold text-xl ease-in duration-100 ${
                item.slug == pathName ? "text-white" : "text-custom-gray-300"
              }`}>
              {item.name}
            </Link>
          </li>
        ))}

        {/* log out */}
        <li className="cursor-pointer flex items-center gap-4 py-1 px-2">
          {/* Icon */}
          <BiSolidLogOut className="text-custom-main text-2xl" />

          {/* Button */}
          <Button onClick={() => signOut()} className="font-poppins font-semibold text-xl text-custom-gray-300">
            Logout
          </Button>
        </li>
      </ul>
    </nav>
  );
}

export default Page;
