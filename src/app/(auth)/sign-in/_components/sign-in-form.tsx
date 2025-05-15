"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInFields, signInSchema } from "@/lib/schemes/signin.schema";
import useSignIn from "../_hooks/use-signin";

function SignInForm() {
  // ? hooks
  const { isPending, error, login } = useSignIn();
  // console.log(error);

  // ?initializing react hook form
  const form = useForm<SignInFields>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
  });

  // ? on submit func
  const onSubmit: SubmitHandler<SignInFields> = (values) => {
    login(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            const hasError = !!form.formState.errors.email;
            return (
              <FormItem className="mb-8">
                {/* label */}
                <FormLabel className="sr-only">email</FormLabel>

                {/* filed */}
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder="Enter Email"
                    className={`h-14 text-[#A1A4A9] shadow-small rounded-[10px] bg-[#F9F9F9] font-inter border-[#E0E0E9] ${
                      hasError ? "focus-visible:outline-[#F04438] border-[#F04438]" : "focus-visible:outline-custom-main"
                    }`}
                  />
                </FormControl>

                {/* feed Back */}
                <FormMessage className="text-[#F04438] px-3" />
              </FormItem>
            );
          }}
        />

        {/* password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            const hasError = form.formState.errors.password;
            // console.log(hasError);

            return (
              <FormItem className="mb-4">
                {/* label */}
                <FormLabel className="sr-only">password</FormLabel>

                {/* filed */}
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Password"
                    className={`h-14 text-[#A1A4A9] shadow-small rounded-[10px] bg-[#F9F9F9] font-inter border-[#E0E0E9] ${
                      hasError ? "focus-visible:outline-[#F04438] border-[#F04438]" : "focus-visible:outline-custom-main "
                    }`}
                  />
                </FormControl>

                {/* feed Back */}
                <FormMessage className="text-[#F04438] px-3 " />
              </FormItem>
            );
          }}
        />

        {/* reset password */}
        <div className="mb-10 flex justify-end">
          <span className="text-custom-main cursor-pointer">Recover Password ?</span>
        </div>

        {error?.message == "Cannot read properties of undefined (reading '_id')" && (
          <p className="text-[#F04438] px-3 mb-2">Wrong Email or Password</p>
        )}

        {/* submit button */}
        <Button
          disabled={isPending || (form.formState.isSubmitted && !form.formState.isValid)}
          type="submit"
          className="w-full bg-custom-main rounded-[20px] text-white hover:bg-blue-700">
          Sign in
        </Button>
      </form>
    </Form>
  );
}

export default SignInForm;
