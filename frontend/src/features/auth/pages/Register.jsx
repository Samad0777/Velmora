import Button from "../../../components/Button.jsx";
import InputField from "../../../components/InputField.jsx";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="min-h-screen bg-soft-white px-6 text-charcoal">
      <section className="mx-auto w-full max-w-[460px] pt-[58px] text-center">
        <h1
          className="text-[45px] leading-[1.1] font-normal"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Make yourself at home.
        </h1>
        <p className="mt-[24px] text-[16px] leading-none text-charcoal">
          A few details, and you're part of the story.
        </p>

        <form
          className="mt-[41px] text-left"
          onSubmit={(event) => event.preventDefault()}
        >
          <InputField
            id="full-name"
            name="fullName"
            label="Full name"
            placeholder="Your name"
          />

          <div className="mt-[25px]">
            <InputField
              id="email"
              name="email"
              label="Email address"
              type="email"
              placeholder="you@example.com"
            />
          </div>

          <div className="mt-[24px]">
            <InputField
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Create a password"
              helperText="Use at least 8 characters."
            />
          </div>

          <div className="mt-[28px]">
            <Button type="submit">Create account</Button>
          </div>
        </form>

        <p className="mt-[27px] text-[14px] leading-none text-warm-gray">
          By signing up, you agree to our{" "}
          <span className="underline">Terms</span> and{" "}
          <span className="underline">Privacy Policy.</span>
        </p>

        <p className="mt-[24px] text-[15px] leading-none text-charcoal">
          Already have an account? <Link to="/login" className="font-medium">Log in</Link>
        </p>
      </section>
    </main>
  );
};

export default Register;