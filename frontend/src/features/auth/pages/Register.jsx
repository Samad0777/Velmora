import Button from "../../../components/Button.jsx";
import InputField from "../../../components/InputField.jsx";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth.js";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();
  const { registerHandler, loading, error } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    clearErrors();

    try {
      await registerHandler({
        username: data.username,
        email: data.email,
        password: data.password,
      });
      navigate("/login");
    } catch (requestError) {
      const response = requestError.response?.data;
      const fieldErrors = response?.errors;

      if (Array.isArray(fieldErrors)) {
        fieldErrors.forEach(({ field, message }) => {
          if (["username", "email", "password"].includes(field)) {
            setError(field, { type: "server", message });
          }
        });
      }

      setError("root.serverError", {
        type: "server",
        message:
          response?.message ||
          "Registration failed. Please try again.",
      });
    }
  };

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
            id="full-name"
            name="username"
            label="Full name"
            placeholder="Your name"
            register={register("username", {
              required: "Full name is required.",
            })}
            error={errors.username}
          />

          <div className="mt-[25px]">
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
          </div>

          <div className="mt-[24px]">
            <InputField
              id="password"
              name="password"
              label="Password"
              type="password"
              placeholder="Create a password"
              helperText="Use at least 8 characters."
              register={register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters.",
                },
              })}
              error={errors.password}
            />
          </div>

          {error && (
            <p className="mt-[18px] text-[13px] text-red-600" role="alert">
              {error}
            </p>
          )}

          <div className="mt-[28px]">
            <Button type="submit" disabled={loading}>
              {loading ? "Creating account..." : "Create account"}
            </Button>
          </div>
        </form>

        <p className="mt-[27px] text-[14px] leading-none text-warm-gray">
          By signing up, you agree to our{" "}
          <span className="underline">Terms</span> and{" "}
          <span className="underline">Privacy Policy.</span>
        </p>

        <p className="mt-[24px] text-[15px] leading-none text-charcoal">
          Already have an account?{" "}
          <Link to="/login" className="font-medium">
            Log in
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Register;
