"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base styles
  [
    "relative inline-flex items-center justify-center whitespace-nowrap",
    "font-black uppercase tracking-widest text-sm",
    "rounded-full overflow-hidden",
    "transition-all duration-300 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--yellow-main)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
    "disabled:pointer-events-none disabled:opacity-40 disabled:saturate-0",
    "select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        // ── Primary — gold pill ──
        primary: [
          "bg-[var(--yellow-main)] text-black",
          "shadow-[0_8px_28px_rgba(212,175,55,0.38)]",
          "hover:bg-black hover:text-[var(--yellow-main)]",
          "hover:shadow-[0_12px_36px_rgba(0,0,0,0.3)]",
          "active:scale-[0.97]",
        ].join(" "),

        // ── Dark — solid black ──
        dark: [
          "bg-black text-white border border-white/10",
          "shadow-[0_6px_20px_rgba(0,0,0,0.4)]",
          "hover:bg-[var(--yellow-main)] hover:text-black hover:border-transparent",
          "hover:shadow-[0_10px_30px_rgba(212,175,55,0.3)]",
          "active:scale-[0.97]",
        ].join(" "),

        // ── Outline — ghost gold border ──
        outline: [
          "bg-transparent text-[var(--yellow-main)]",
          "border-2 border-[var(--yellow-main)]",
          "hover:bg-[var(--yellow-main)] hover:text-black",
          "hover:shadow-[0_8px_28px_rgba(212,175,55,0.3)]",
          "active:scale-[0.97]",
        ].join(" "),

        // ── Ghost — minimal, text only ──
        ghost: [
          "bg-transparent text-slate-500",
          "border border-transparent",
          "hover:text-[var(--yellow-main)] hover:border-[var(--yellow-main)]/30 hover:bg-[var(--yellow-main)]/5",
          "active:scale-[0.97]",
        ].join(" "),

        // ── Destructive ──
        destructive: [
          "bg-red-600 text-white",
          "shadow-[0_6px_20px_rgba(220,38,38,0.35)]",
          "hover:bg-red-700",
          "active:scale-[0.97]",
        ].join(" "),

        // ── Link style ──
        link: [
          "bg-transparent text-[var(--yellow-main)] underline-offset-4",
          "hover:underline rounded-none",
          "tracking-normal font-semibold normal-case",
        ].join(" "),
      },

      size: {
        sm: "h-9  px-5  text-[11px] gap-1.5",
        default: "h-11 px-7  text-[12px] gap-2",
        lg: "h-13 px-9  text-[13px] gap-2.5",
        xl: "h-14 px-11 text-[13px] gap-3",
        icon: "h-11 w-11  p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  /** Shows an animated arrow → appended after children */
  withArrow?: boolean;
  /** Shows a leading icon slot before children */
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, withArrow, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {/* Shimmer sweep on hover */}
        {variant !== "link" && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-20deg] bg-white/10 transition-transform duration-500 ease-out group-hover:translate-x-[200%]"
          />
        )}

        {icon && (
          <span className="flex-shrink-0 flex items-center justify-center">
            {icon}
          </span>
        )}

        {children}

        {withArrow && (
          <span
            aria-hidden="true"
            className="inline-flex items-center translate-x-0 group-hover:translate-x-1 transition-transform duration-200"
          >
            →
          </span>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };