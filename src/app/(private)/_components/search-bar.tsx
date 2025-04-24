"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Search } from "lucide-react";
import profileImage from "../../../../public/assets/images/Frame 40.png";

export default function QuizHeader() {
  return (
    <div className="flex items-center gap-3 pb-2 mb-11">
      {/* Search Bar */}
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 text-main" />
        <Input placeholder="Search Quiz" className="py-4 ps-16 rounded-[12px] bg-white border-none shadow-lg text-[#696F79] focus-visible:outline-main" />
      </div>

      {/* Start Quiz Button */}
      <Button className="rounded-[12px] sm:px-11 sm:py-4 bg-main hover:bg-blue-700 text-white">
        Start Quiz 
      </Button>

      {/* Avatar */}
      <Image
        src={profileImage}
        alt="User Avatar"
        width={32}
        height={32}
        className="rounded-full object-cover"
      />
    </div>
  );
}
