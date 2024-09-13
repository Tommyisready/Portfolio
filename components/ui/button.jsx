import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-colors", {
  variants: {
    variant: {
      default: "bg-cyan-400 text-black hover:bg-cyan-400",
      primary: "bg-black text-white",
      outline: "border border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-black",
    },
    size: {
      default: "h-[44px] px-6",
      sm: "h-[48px] px-6",
      lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };