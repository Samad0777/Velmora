import { Link } from "react-router-dom";
import Button from "../../../components/Button.jsx";
import InputField from "../../../components/InputField.jsx";

const Login = () => {
  return (
    <main className="min-h-screen bg-soft-white px-6 text-charcoal">
      <section className="mx-auto w-full max-w-[460px] pt-[94px] text-center">
        <h1
          className="text-[45px] leading-[1.1] font-normal"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Welcome back.
        </h1>
        <p className="mt-[24px] text-[16px] leading-none text-charcoal">
          Sign in to your VELMORA account.
        </p>

        <form
          className="mt-[41px] text-left"
          onSubmit={(event) => event.preventDefault()}
        >
          <InputField
            id="email"
            name="email"
            label="Email address"
            type="email"
            placeholder="you@example.com"
          />

          <div className="mt-[25px]">
            <InputField
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <p className="mt-[15px] text-right text-[13px] leading-none text-charcoal">
            Forgot password?
          </p>

          <div className="mt-[31px]">
            <Button type="submit">Log in</Button>
          </div>
        </form>

        <p className="mt-[25px] text-[15px] leading-none text-warm-gray">
          New to VELMORA?
        </p>

        <Link
          to="/register"
          className="mt-[24px] text-[15px] leading-none text-charcoal"
        >
          Create an account
        </Link>
      </section>
    </main>
  );
};

export default Login;
