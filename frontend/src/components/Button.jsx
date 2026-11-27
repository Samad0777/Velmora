const Button = ({ children, type = "button", className = "", ...props }) => {
  return (
    <button
      type={type}
      className={`h-[54px] w-full cursor-pointer bg-forest text-[16px] font-medium text-soft-white transition-colors hover:bg-forest-hover ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
