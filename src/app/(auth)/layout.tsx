import React from "react";
import AuthNav from "@/app/(auth)/_components/auth-nav";
import bro from "assets/images/bro.png";
import Image from "next/image";

function layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="sm:flex justify-between w-full">
      {/* Welcome section */}
      <div className="bg-custom-custom-secondary p-5 lg:pt-20 lg:pb-44 lg:ps-20 lg:pe-36 rounded-r-[6rem] shadow-large">
        {/* Text */}
        <div className="mb-5 sm:mb-20">
          <h2 className="font-bold text-5xl pb-2 leading-[150%]">
            Welcome to
            <br />
            <span className="text-custom-main">Elevate</span>
          </h2>
          <p>Quidem autem voluptatibus qui quaerat aspernatur architecto natus</p>
        </div>

        {/* Bro image */}
        <div className="pe-10 sm:pe-20">
          <Image priority src={bro} width={408} alt="bro image" className="w-full"></Image>
        </div>
      </div>

      {/* Form + Nav section */}
      <div className="sm:p-20 pt-14 sm:w-[65%]">
        {/* Navigation */}
        <div className="sm:justify-self-end justify-self-center">
          <AuthNav />
        </div>

        {/* Form */}
        <div className="h-full flex justify-center items-center p-4 mt-5">{children}</div>
      </div>
    </div>
  );
}

export default layout;
