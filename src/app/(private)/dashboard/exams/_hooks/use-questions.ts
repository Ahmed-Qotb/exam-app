// import { questions } from "@/lib/types/question";
// import { useQuery } from "@tanstack/react-query";
// import { useSearchParams } from "next/navigation";

// export default function useQuestions() {
//   // ? navigation
//   const searchParams = useSearchParams();
//   console.log(searchParams);

//   // ? queries
//   const { isLoading, error, data } = useQuery({
//     queryKey: ["questions"],
//     queryFn: async () => {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API}/questions?${searchParams.toString()}`
//       );

//       const payload: APIResponse<questions> = await response.json();

//       if ("code" in payload) throw new Error(payload.message);
//       return payload;
//     },
//   });

//   return { isLoading, error, payload: data };
// }
