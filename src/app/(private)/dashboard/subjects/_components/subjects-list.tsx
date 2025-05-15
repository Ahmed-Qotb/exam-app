import { getSubjects } from "@/lib/api/subject.api";
import { catchError } from "@/lib/utils/catch-error";
import Link from "next/link";

async function Page() {
  const [subjects, error] = await catchError(() => getSubjects(0));
  if (error) {
    console.log("error happened while fetching subjects :", error);
  }

  // console.log(subjects);

  return (
    <div className="rounded-[20px] py-8 px-4 bg-white shadow-md lg:flex gap-14 font-poppins">
      <div className="w-full">
        {/* quizes , view all */}
        <div className="text-custom-main font-medium mb-6">
          <span>Subjects</span>
        </div>

        {/* subjects */}
        <div className="grid grid-cols-12 gap-5">
          {subjects
            ? subjects.subjects.map((subject) => (
                <div key={subject._id} className="col-span-12 sm:col-span-6 lg:col-span-4 ">
                  <Link href={`/dashboard/subjects/${subject._id}`}>
                    <div
                      className="bg-cover bg-no-repeat bg-center rounded-xl h-44 lg:h-60 flex justify-center items-end pb-6 px-4"
                      style={{ backgroundImage: `url('${subject.icon}')` }}>
                      <div className="relative">
                        <p className="bg-opacity-80 text-white text-sm font-bold z-10 bg-[#1935CA66] p-2 rounded-xl backdrop-blur-sm">
                          {subject.name}
                          <br />
                          <span className="font-medium text-xs">Lorem ipsum dolor sit amet, Lorem</span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            : "no subjects added yet :D"}
        </div>
      </div>
    </div>
  );
}

export default Page;
