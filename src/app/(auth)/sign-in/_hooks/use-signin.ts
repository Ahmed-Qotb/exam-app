import { signInFields } from "@/lib/schemes/signin.schema";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
export default function useSignIn() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (signInFields: signInFields) => {
      const response = await signIn("credentials", {
        email: signInFields.email,
        password: signInFields.password,
        redirect: false,
      });
      if (response?.error) throw new Error(response.error);
      return response;
    },
    onSuccess: (data) => {
      toast.success("loged in successfully");
      setTimeout(() => {
        window.location.href = data?.url || "/";
      }, 1000);
    },
  });
  // console.log(error);

  return { isPending, error, login: mutate };
}
