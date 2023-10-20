import { ReactNode } from "react";

export function ProseLayout({
  children,
  margings = true,
}: {
  children: ReactNode;
  margings?: boolean;
}) {
  return (
    <div
      className={`prose prose-p:text-3xl prose-p:tracking-wide prose-headings:tracking-wide prose-strong:tracking-wide prose-li:text-xl prose-li:tracking-wide dark:prose-invert max-w-none w-full ${
        !margings &&
        "prose-p:m-0 prose-headings:m-0 prose-strong:m-0 prose-li:m-0"
      }`}
    >
      {children}
    </div>
  );
}
