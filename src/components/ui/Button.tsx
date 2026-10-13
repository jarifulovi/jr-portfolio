import React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";

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
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-white text-zinc-950 hover:bg-zinc-200 shadow-sm shadow-white/10 active:scale-[0.98]",
  secondary:
    "border border-white/15 bg-white/5 text-zinc-100 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm active:scale-[0.98]",
  ghost:
    "text-zinc-400 hover:text-white hover:bg-white/5 active:scale-[0.98]",
  outline:
    "border border-zinc-700 text-zinc-200 hover:bg-zinc-800/80 hover:text-white active:scale-[0.98]",
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
