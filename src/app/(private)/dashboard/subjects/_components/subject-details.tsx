import { singleSubject } from "@/lib/types/subjects";
import Image from "next/image";

interface SubjectDetailsProps {
  subject: singleSubject;
}

export default function SubjectDetails({ subject }: SubjectDetailsProps) {
  console.log(subject);

  return (
    <div className="bg-white rounded-lg shadow p-6 min-h-[60vh]">
      <div>
        <Image alt="subject image" width={300} height={300} src={subject.category.icon}></Image>
      </div>
      <p className="">
        subject name : <span className="text-custom-main">{subject.category.name}</span>
      </p>
    </div>
  );
}
