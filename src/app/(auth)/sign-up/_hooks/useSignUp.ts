import { SignUpFields } from '@/lib/schemes/signUp.schema';
import { useMutation } from "@tanstack/react-query";
import { signUpAction } from "../_actions/signUp.action";

export default function useSinUp() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (fields: SignUpFields) => {
      const payload = await signUpAction(fields);

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  return { isPending, error, signUp: mutate };
}
