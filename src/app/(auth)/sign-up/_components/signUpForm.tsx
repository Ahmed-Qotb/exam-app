"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpFields, signUpSchema } from "@/lib/schemes/signUp.schema";
import useSinUp from "../_hooks/useSignUp";
import { useRouter } from "next/navigation";

function SignUpForm() {
  // ? hooks
  const router = useRouter();
  const { isPending, signUp } = useSinUp();

  // ?initializing react hook form
  const form = useForm<SignUpFields>({
    resolver: zodResolver(signUpSchema),
  });

  // ? on submit func
  const onSubmit: SubmitHandler<SignUpFields> = (values) => {
    signUp(values, {
      onSuccess: () => {
        router.push("/sign-in");
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
        {/* user name */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => {
            const hasError = !!form.formState.errors.username;
            return (
              <FormItem className="mb-8">
                {/* label */}
                <FormLabel className="sr-only">username</FormLabel>

                {/* filed */}
                <FormControl>
                  <Input
                    {...field}
                    type="username"
                    placeholder="Enter username"
                    className={`h-14 text-[#A1A4A9] shadow-small rounded-[10px] bg-[#F9F9F9] font-inter border-[#E0E0E9] ${
                      hasError
                        ? "focus-visible:outline-[#F04438] border-[#F04438]"
                        : "focus-visible:outline-main"
                    }`}
                  />
                </FormControl>

                {/* feed Back */}
                <FormMessage className="text-[#F04438] rounded-[10px] px-3 py-1" />
              </FormItem>
            );
          }}
        />

        {/* first name */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => {
            const hasError = !!form.formState.errors.firstName;
            return (
              <FormItem className="mb-8">
                {/* label */}
                <FormLabel className="sr-only">firstName</FormLabel>

                {/* filed */}
                <FormControl>
                  <Input
                    {...field}
                    type="firstName"
                    placeholder="Enter firstName"
                    className={`h-14 text-[#A1A4A9] shadow-small rounded-[10px] bg-[#F9F9F9] font-inter border-[#E0E0E9] ${
                      hasError
                        ? "focus-visible:outline-[#F04438] border-[#F04438]"
                        : "focus-visible:outline-main"
                    }`}
                  />
                </FormControl>

                {/* feed Back */}
                <FormMessage className="text-[#F04438] rounded-[10px] px-3 py-1" />
              </FormItem>
            );
          }}
        />

        {/* last name*/}
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => {
            const hasError = !!form.formState.errors.lastName;
            return (
              <FormItem className="mb-8">
                {/* label */}
                <FormLabel className="sr-only">lastName</FormLabel>

                {/* filed */}
                <FormControl>
                  <Input
                    {...field}
                    type="lastName"
                    placeholder="Enter lastName"
                    className={`h-14 text-[#A1A4A9] shadow-small rounded-[10px] bg-[#F9F9F9] font-inter border-[#E0E0E9] ${
                      hasError
                        ? "focus-visible:outline-[#F04438] border-[#F04438]"
                        : "focus-visible:outline-main"
                    }`}
                  />
                </FormControl>

                {/* feed Back */}
                <FormMessage className="text-[#F04438] rounded-[10px] px-3 py-1" />
              </FormItem>
            );
          }}
        />

        {/* email */}
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
                      hasError
                        ? "focus-visible:outline-[#F04438] border-[#F04438]"
                        : "focus-visible:outline-main"
                    }`}
                  />
                </FormControl>

                {/* feed Back */}
                <FormMessage className="text-[#F04438] rounded-[10px] px-3 py-1" />
              </FormItem>
            );
          }}
        />

        {/* phone number */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => {
            const hasError = !!form.formState.errors.phone;
            return (
              <FormItem className="mb-8">
                {/* label */}
                <FormLabel className="sr-only">phone</FormLabel>

                {/* filed */}
                <FormControl>
                  <Input
                    {...field}
                    type="phone"
                    placeholder="Enter phone"
                    className={`h-14 text-[#A1A4A9] shadow-small rounded-[10px] bg-[#F9F9F9] font-inter border-[#E0E0E9] ${
                      hasError
                        ? "focus-visible:outline-[#F04438] border-[#F04438]"
                        : "focus-visible:outline-main"
                    }`}
                  />
                </FormControl>

                {/* feed Back */}
                <FormMessage className="text-[#F04438] rounded-[10px] px-3 py-1" />
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
              <FormItem className="mb-8">
                {/* label */}
                <FormLabel className="sr-only">password</FormLabel>

                {/* filed */}
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="Password"
                    className={`h-14 text-[#A1A4A9] shadow-small rounded-[10px] bg-[#F9F9F9] font-inter border-[#E0E0E9] ${
                      hasError
                        ? "focus-visible:outline-[#F04438] border-[#F04438]"
                        : "focus-visible:outline-main "
                    }`}
                  />
                </FormControl>

                {/* feed Back */}
                <FormMessage className="text-[#F04438] rounded-[10px] px-3 py-1" />
              </FormItem>
            );
          }}
        />

        {/*re password */}
        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => {
            const hasError = form.formState.errors.rePassword;
            // console.log(hasError);

            return (
              <FormItem className="mb-4">
                {/* label */}
                <FormLabel className="sr-only">rePassword</FormLabel>

                {/* filed */}
                <FormControl>
                  <Input
                    {...field}
                    type="password"
                    placeholder="rePassword"
                    className={`h-14 text-[#A1A4A9] shadow-small rounded-[10px] bg-[#F9F9F9] font-inter border-[#E0E0E9] ${
                      hasError
                        ? "focus-visible:outline-[#F04438] border-[#F04438]"
                        : "focus-visible:outline-main "
                    }`}
                  />
                </FormControl>

                {/* feed Back */}
                <FormMessage className="text-[#F04438] rounded-[10px] px-3 py-1" />
              </FormItem>
            );
          }}
        />

        {/* submit button */}
        <Button
          disabled={
            isPending || (form.formState.isSubmitted && !form.formState.isValid)
          }
          type="submit"
          className="w-full bg-main rounded-[20px] text-white hover:bg-blue-700"
        >
          Register
        </Button>
      </form>
    </Form>
  );
}

export default SignUpForm;
