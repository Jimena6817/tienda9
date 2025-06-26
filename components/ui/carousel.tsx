
import { ReactNode } from "react";

export function Carousel({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-4 overflow-x-auto p-2">
      {children}
    </div>
  );
}
