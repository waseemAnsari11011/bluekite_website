import React from "react";

// Define the props for our button
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  onClick,
  className = "",
  variant = "primary",
}: ButtonProps) {
  // Define base styles
  const baseStyle = "px-6 py-3 rounded-full font-semibold transition-colors";

  // Define styles for each variant
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
