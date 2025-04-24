import { Suspense } from "react";
import Profile from "./_components/profile";
import Subjects from "./_components/subjects";
function Page() {
  return (
    <div className="min-h-[60vh]">
      <div className="mb-10 rounded-[20px] py-8 px-4 bg-white shadow-md lg:flex gap-14 font-poppins">
        <Suspense fallback="loading...">
          <Profile />
        </Suspense>
      </div>
      <div className="rounded-[20px] py-8 px-4 bg-white shadow-md lg:flex gap-14 font-poppins">
        <Suspense fallback="loading...">
          <Subjects />
        </Suspense>
      </div>
    </div>
  );
}

export default Page;
