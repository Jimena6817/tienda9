
import { ReactNode } from "react";

export function Button({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <button
      className={`px-4 py-2 rounded-xl font-semibold bg-orange-500 hover:bg-orange-600 text-white ${className}`}
    >
      {children}
    </button>
  );
}
