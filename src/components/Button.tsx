
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "operator" | "equals" | "accent";
  className?: string;
}

const Button = ({ children, onClick, variant = "primary", className }: ButtonProps) => {
  const baseClasses = "h-14 rounded-xl flex items-center justify-center font-medium text-lg transition-all duration-200 active:scale-95 hover:shadow-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50";
  
  const variantClasses = {
    primary: "bg-purple-100 text-purple-900 hover:bg-purple-200",
    secondary: "bg-purple-200 text-purple-800 hover:bg-purple-300",
    operator: "bg-orange-500 text-white hover:bg-orange-600",
    equals: "bg-purple-600 text-white hover:bg-purple-700",
    accent: "bg-red-500 text-white hover:bg-red-600"
  };

  return (
    <button 
      onClick={onClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
