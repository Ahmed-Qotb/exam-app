import ExamList from "./_components/exam-list";

async function Page() {
  return (
    <>
      <div className="text-custom-main font-medium mb-6">
        <span>exams</span>
      </div>
      <ExamList />
    </>
  );
}

export default Page;
