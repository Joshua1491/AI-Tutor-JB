import { ReactNode } from "react";
import PageContainer from "@/components/page-container";

export default function StudentLayout({ children }: { children: ReactNode }) {
  return <PageContainer>{children}</PageContainer>;
}
