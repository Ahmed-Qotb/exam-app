import SignUpForm from "./_components/signUpForm";

function page() {
  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl mb-8 font-inter sm:text-start text-center">
        Sign up
      </h2>
      <SignUpForm />
    </div>
  );
}

export default page;
