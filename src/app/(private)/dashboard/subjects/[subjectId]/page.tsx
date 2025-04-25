import SubjectDetails from "../_components/subject-details";
import { getSingleSubjects } from "@/lib/api/subject.api";
import { catchError } from "@/lib/utils/catch-error";

interface SubjectPageProps {
  params: {
    subjectId: string;
  };
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { subjectId } = params;

  // ? variables
  const [payload, error] = await catchError(() => getSingleSubjects(subjectId));
  // console.log(payload);

  if (error) {
    console.log(error.message);
    return <p>error happened while fetching : {error.message}</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Subject Details</h1>
      {payload ? (
        <SubjectDetails subject={payload} />
      ) : (
        <div>Subject not found.</div>
      )}
    </div>
  );
}
