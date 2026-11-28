import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const InputField = ({
  id,
  name,
  label,
  type = "text",
  placeholder,
  helperText,
  register,
  error,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPassword = type === "password";

  return (
    <div>
      <label
        className="block text-[13px] leading-none text-charcoal"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative mt-[10px]">
        <input
          id={id}
          name={name}
          type={isPassword && isPasswordVisible ? "text" : type}
          placeholder={placeholder}
          className={`h-[54px] w-full border bg-soft-white px-[14px] text-[14px] text-charcoal outline-none placeholder:text-warm-gray focus:border-forest ${
            isPassword ? "pr-[48px]" : ""
          } ${error ? "border-red-600" : "border-warm-gray"}`}
          aria-invalid={Boolean(error)}
          {...register}
        />
        {isPassword && (
          <button
            type="button"
            className="absolute right-0 top-0 flex h-[54px] w-[48px] items-center justify-center text-warm-gray"
            onClick={() => setIsPasswordVisible((visible) => !visible)}
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
          >
            {isPasswordVisible ? (
              <EyeOff className="cursor-pointer" size={18} />
            ) : (
              <Eye className="cursor-pointer" size={18} />
            )}
          </button>
        )}
      </div>
      {error ? (
        <p className="mt-[12px] text-[12px] leading-none text-red-600">
          {error.message}
        </p>
      ) : helperText ? (
        <p className="mt-[12px] text-[12px] leading-none text-warm-gray">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export default InputField;
