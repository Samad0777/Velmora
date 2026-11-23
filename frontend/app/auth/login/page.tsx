"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const fieldClass =
    "h-[52px] w-full rounded-lg border border-[#dcded5] bg-white/55 px-[15px] text-[14px] text-[#24352c] outline-none transition placeholder:text-[#adb3aa] focus:border-[#8e9e90] focus:bg-white focus:ring-[3px] focus:ring-[#8e9e90]/15";

  return (
    <main className="min-h-screen grid-cols-1 bg-[#f7f5ee] text-[#24352c] md:grid md:grid-cols-[42%_58%] lg:grid-cols-[55%_45%]">
      <section
        className="relative hidden min-h-[calc(100vh-24px)] overflow-hidden rounded-[18px] bg-[linear-gradient(145deg,#8da68f,#6f8b78)] text-[#f8f7ef] md:m-3 md:block"
        aria-label="Velmora introduction"
      >
        <div className="relative z-10 flex items-center gap-2.5 px-[42px] pt-[38px] font-[Georgia] text-[20px] font-bold">
          <span className="grid size-[29px] place-items-center rounded-full border border-white/70">
            <span className="size-[11px] rotate-[-45deg] rounded-[50%_50%_50%_2px] bg-[#f2e7cf]" />
          </span>
          <span>Velmora</span>
        </div>
        <div className="absolute top-[31%] left-[8%] z-10 lg:left-[10%]">
          <p className="mb-[22px] text-[12px] font-bold tracking-[2.1px] uppercase opacity-80">
            A quieter way to work
          </p>
          <h1 className="m-0 font-[Georgia] text-[50px] leading-[0.98] font-medium tracking-[-3.5px] lg:text-[clamp(48px,5vw,76px)]">
            Welcome back.
            <br />
            <em className="font-normal text-[#eef0df]">Begin again.</em>
          </h1>
          <p className="mt-7 max-w-[390px] text-[17px] leading-[1.65] opacity-85">
            Return to the work and ideas that matter.
          </p>
        </div>
      </section>
      <section className="relative flex min-h-screen items-center justify-center px-6 py-[86px] md:px-12 md:py-[96px]">
        <div className="absolute top-[26px] right-6 flex items-center gap-3 text-[13px] text-[#6e786f] md:top-9 md:right-[42px]">
          <span>New to Velmora?</span>
          <Link
            href="/auth/register"
            className="border-b border-[#9daa9e] pb-0.5 font-bold text-[#24352c]"
          >
            Create account
          </Link>
        </div>
        <div className="w-full md:max-w-[430px]">
          <p className="mb-[42px] font-[Georgia] text-[20px] font-bold md:hidden">
            Velmora
          </p>
          <header className="mb-9">
            <p className="mb-2.5 text-[12px] font-bold tracking-[1.8px] text-[#7c897f] uppercase">
              Sign in
            </p>
            <h2 className="m-0 font-[Georgia] text-[41px] leading-[1.05] font-medium tracking-[-2px] md:text-[clamp(38px,4vw,52px)]">
              Good to see you.
            </h2>
          </header>
          <form onSubmit={handleSubmit} className="grid gap-[19px]">
            <label className="grid gap-2 text-[12px] font-bold text-[#536057]">
              <span>Email address</span>
              <input
                className={fieldClass}
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
              />
            </label>
            <label className="grid gap-2 text-[12px] font-bold text-[#536057]">
              <span>Password</span>
              <div className="relative">
                <input
                  className={`${fieldClass} pr-[58px]`}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Your password"
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((visible) => !visible)}
                  className="absolute top-1/2 right-3 grid size-8 -translate-y-1/2 place-items-center rounded-md text-[#738076] transition hover:bg-[#edf0ea]"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={18} strokeWidth={1.8} />
                  ) : (
                    <Eye size={18} strokeWidth={1.8} />
                  )}
                </button>
              </div>
            </label>
            <button
              className="mt-[3px] flex h-[54px] items-center justify-center gap-3 rounded-lg bg-[#294233] text-[14px] font-bold text-white shadow-[0_10px_24px_rgba(41,66,51,.12)] transition hover:-translate-y-px hover:bg-[#20382a]"
              type="submit"
            >
              Sign in <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
        <p className="absolute bottom-6 left-6 text-[11px] text-[#adb3aa] md:left-[42px]">
          © 2026 Velmora
        </p>
      </section>
    </main>
  );
}
