import { ReactNode } from "react";

export default function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-6 py-12 text-center">
      {children}
    </div>
  );
}
