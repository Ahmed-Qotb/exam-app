import SignUpForm from "./_components/signup-form";

function Page() {
  return (
    <div className="w-full">
      {/* Title */}
      <h2 className="font-bold text-2xl mb-8 font-inter sm:text-start text-center">Sign up</h2>

      {/* Form */}
      <SignUpForm />
    </div>
  );
}

export default Page;
