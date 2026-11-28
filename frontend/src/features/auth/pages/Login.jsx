import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/Button.jsx";
import InputField from "../../../components/InputField.jsx";
import useAuth from "../../../hooks/useAuth.js";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const { loginHandler, loading, error } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    clearErrors();

    try {
      await loginHandler({
        email: data.email,
        password: data.password,
      });
      navigate("/");
    } catch (requestError) {
      const response = requestError.response?.data;
      const fieldErrors = response?.errors;

      if (Array.isArray(fieldErrors)) {
        fieldErrors.forEach(({ field, message }) => {
          if (["email", "password"].includes(field)) {
            setError(field, { type: "server", message });
          }
        });
      }

      setError("root.serverError", {
        type: "server",
        message: response?.message || "Login failed. Please try again.",
      });
    }
  };

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
          onSubmit={handleSubmit(onSubmit)}
        >
          {(errors.root?.serverError || error) && (
            <p
              className="mb-[20px] border border-red-600 px-[14px] py-[12px] text-[13px] text-red-600"
              role="alert"
            >
              {errors.root?.serverError?.message || error}
            </p>
          )}

          <InputField
            id="email"
            name="email"
            label="Email address"
            type="email"
            placeholder="you@example.com"
            register={register("email", {
              required: "Email address is required.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address.",
              },
            })}
            error={errors.email}
          />

          <div className="mt-[25px]">
            <InputField
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              register={register("password", {
                required: "Password is required.",
              })}
              error={errors.password}
            />
          </div>

          <p className="mt-[15px] text-right text-[13px] leading-none text-charcoal">
            Forgot password?
          </p>

          <div className="mt-[31px]">
            <Button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Log in"}
            </Button>
          </div>
        </form>

        <p className="mt-[25px] text-[15px] leading-none text-warm-gray">
          New to VELMORA?
        </p>

        <Link
          to="/register"
          className="font-medium mt-[24px] text-[15px] leading-none text-charcoal"
        >
          Create an account
        </Link>
      </section>
    </main>
  );
};

export default Login;
