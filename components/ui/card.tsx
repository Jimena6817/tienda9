
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode | JSX.Element;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return <div className={`rounded-xl shadow p-4 ${className}`}>{children}</div>;
}

interface CardContentProps {
  children: ReactNode | JSX.Element;
  className?: string;
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={className}>{children}</div>;
}
