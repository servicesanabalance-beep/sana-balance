"use client";

import * as React from "react";
import { cn } from "./lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-sana border-2 border-sana-beige bg-sana-white px-4 py-3 text-base text-sana-black placeholder:text-sana-brown/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sana-gold focus-visible:border-sana-brown disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
