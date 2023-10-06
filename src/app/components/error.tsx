"use client";

import Link from "next/link";

export function ErrorComponent() {
  return (
    <section>
      <h1 className="text-cm-black dark:text-cm-white">
        There its been an error, please reload the page
      </h1>
      <p className="text-cm-black dark:text-cm-white">
        if the error persist, please{" "}
        <Link href={"/contact"} className="text-cm-primary font-bold">
          contact me
        </Link>
      </p>
    </section>
  );
}
