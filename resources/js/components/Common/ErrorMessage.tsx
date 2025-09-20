import { AlertCircle } from "lucide-react";
import React from "react";

interface ErrorMessageProps {
  message: string;
  className?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-2 text-red-500 ${className}`}>
      <AlertCircle className="w-4 h-4 flex-shrink-0" />
      <span className="text-sm">{message}</span>
    </div>
  );
};
