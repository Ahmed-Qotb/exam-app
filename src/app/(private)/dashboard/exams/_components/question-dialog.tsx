import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import QuestionForm from "./question-form";
import { getQuestions } from "@/lib/api/questions.api";
import { catchError } from "@/lib/utils/catch-error";

async function Page({ exam }: { exam: string }) {
  const [payload, error] = await catchError(() => getQuestions(exam));

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <Dialog>
      {/* Triggger */}
      <DialogTrigger asChild>
        <Button className="bg-custom-main rounded-full text-white px-6 h-7">start</Button>
      </DialogTrigger>

      {/* Content */}
      <DialogContent className="bg-white rounded-3xl min-h-[550px]">
        {/* Header */}
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        {/* Content */}
        <QuestionForm questions={payload?.questions ?? []} />
      </DialogContent>
    </Dialog>
  );
}

export default Page;
