import { catchError } from "@/lib/utils/catch-error";
import { getUserData } from "@/lib/api/user.api";
import Image from "next/image";
import profileImage from "assets/images/Frame-40.png";
import { Progress } from "@/components/ui/progress";
import { AiFillFlag } from "react-icons/ai";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

const achivements: { icon: React.ReactNode; value: string; text: string }[] = [
  {
    icon: <AiFillFlag />,
    value: "27",
    text: "Quiz Passed",
  },
  {
    icon: <MdOutlineAccessTimeFilled />,
    value: "13 min",
    text: "Fastest Time",
  },
  {
    icon: <FaCircleCheck />,
    value: "200",
    text: "Correct Answers",
  },
];

async function Page() {
  // ? variables
  const [userData, error] = await catchError(getUserData);

  if (error) {
    console.log("fetch failed for", error.message);
  }

  return (
    <>
      {/* profile image */}
      <Image src={profileImage} width={200} alt="user image" className="size-28 lg:size-48 mx-auto mb-8 lg:mb-0" priority />

      <div className="w-full text-center lg:text-start">
        {/* Last name */}
        <h3 className="text-custom-main font-bold text-3xl mb-1">
          {userData.user.firstName} {userData.user.lastName}
        </h3>

        {/* Username */}
        <span className="text-custom-gray-400">{userData.user.username}</span>

        {/* Progress bar */}
        <Progress value={80} className="mt-6 mb-6 mx-auto lg:mx-0" />

        {/* Achivements */}
        <ul className="flex gap-6 flex-wrap lg:flex-nowrap">
          {achivements.map((achivement) => (
            <li key={achivement.text} className="flex items-center gap-2 mx-auto lg:mx-0">
              {/* Icon */}
              <div className="text-custom-main size-16 text-3xl rounded-xl shadow-lg flex justify-center items-center">
                {achivement.icon}
              </div>

              <div>
                {/* Value */}
                <div className="text-custom-gray-300 font-bold text-xl lg:text-3xl">{achivement.value}</div>

                {/* Text */}
                <div className="text-custom-gray-300 text-base">{achivement.text}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
