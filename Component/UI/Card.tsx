import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-1/2 rounded overflow-hidden shadow-lg bg-white ">
      {children}
    </div>
  );
};
