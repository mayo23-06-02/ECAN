import React from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "tertiary";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  children: React.ReactNode;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#FC55E5] text-white hover:bg-tertiary focus:ring-primary",
  secondary:
    "bg-[#DB8DD0] text-white hover:bg-primary focus:ring-secondary",
  tertiary:
    "bg-tertiary text-white hover:bg-primary focus:ring-tertiary",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "px-5 h-10 cursor-pointer hover:scale-105 ease-out delay-100 rounded-sm font-outfit font-semibold shadow transition-colors focus:outline-none w-[150px]  text-center",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
