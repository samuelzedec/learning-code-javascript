import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <h1>Layout do post</h1>
      {children}
    </>
  );
}
