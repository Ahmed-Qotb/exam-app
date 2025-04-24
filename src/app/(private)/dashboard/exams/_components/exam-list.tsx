import { getExams } from "@/lib/api/exams.api";
import { catchError } from "@/lib/utils/catch-error";
import { FaBook } from "react-icons/fa";
import QuestionsDialog from "./question-dialog";

async function Page() {
  const [exams, error] = await catchError(() => getExams(0));
  if (error) {
    console.log("error happened while fetching subjects :", error);
  }

  // console.log(subjects);

  return (
    <div className="lg:flex gap-14 font-inter">
      <div className="w-full">
        {/* exams */}
        <div className="">
          {exams
            ? exams.exams.map((exam) => (
                <div key={exam._id}>
                  <div className="rounded-[20px] py-8 px-4 bg-white shadow-md mb-6 flex items-center justify-between">
                    {/* title question number */}
                    <div className="flex items-center gap-4 sm:gap-6">
                      <div>
                        <FaBook className="text-4xl text-main" />
                      </div>
                      <div>
                        <h2 className="text-sm font-bold">{exam.title}</h2>
                        <p className="text-xs font-normal text-[#535353]">
                          {exam.numberOfQuestions} Questions
                        </p>
                      </div>
                    </div>
                    {/* start exam and duration */}
                    <div>
                      <p>{exam.duration} munites</p>
                      <QuestionsDialog exam={exam._id} />
                    </div>
                  </div>
                </div>
              ))
            : "no exams added yet added yet :D"}
        </div>
      </div>
    </div>
  );
}

export default Page;
