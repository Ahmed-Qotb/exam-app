import { getHistory } from "@/lib/api/quiz-history";
import { catchError } from "@/lib/utils/catch-error";

async function Page() {
  // ? functions
  const [data, error] = await catchError(() => getHistory());
  if (error) {
    console.log("error while fetching quiz history", error);
    return <p>something went wrong</p>;
  }

  if (!data) {
    return <p>something went wrong</p>;
  }
  // console.log(data?.history);

  // ?variables
  const history = data?.history;
  return (
    <>
      {data.history ? (
        <div className="flex justify-between shadow-lg p-6 rounded-xl min-h-[60vh]">
          {/* icon + name*/}
          <div className="w-1/2">
            <div>
              <p>
                Question :{" "}
                <span className="text-main">{history?.QID.question}</span>
              </p>
              <p>
                correct answer :{" "}
                <span className="text-main">{history?.QID.correct}</span>
              </p>
              <p>
                chosenAnswer :{" "}
                <span className="text-main">{history?.chosenAnswer}</span>
              </p>
            </div>
          </div>

          {/* data */}
          <div>
            <p>
              avgAnswerTime :{" "}
              <span className="text-main">{history?.avgAnswerTime}</span>
            </p>
          </div>
        </div>
      ) : (
        <p className="min-h-[60vh]">go solve an exam first :D</p>
      )}
    </>
  );
}

export default Page;
