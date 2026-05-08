import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonAs = "button" | "a";

interface SharedProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

type ButtonProps =
  | (SharedProps &
      React.ButtonHTMLAttributes<HTMLButtonElement> & {
        as?: "button";
      })
  | (SharedProps &
      React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        as: "a";
      });

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-zinc-900 text-white hover:bg-zinc-800",
  secondary: "bg-white text-zinc-900 ring-1 ring-zinc-200 hover:ring-zinc-300",
  ghost: "text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100",
  outline: "ring-1 ring-zinc-800 text-zinc-100 hover:bg-zinc-900",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  as = "button",
  ...props
}) => {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (as === "a") {
    return (
      <a className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};
