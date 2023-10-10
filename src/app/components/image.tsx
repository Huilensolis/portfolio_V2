/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { ErrorIcon } from "./icons";

import Link from "next/link";
import { ProseLayout } from "./prose-layout";

export function ImageComponent({
  src,
  alt,
  className = "w-full h-full object-cover object-center",
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const [error, setError] = useState(() => {
    try {
      new URL(src);
      return false;
    } catch (error) {
      return true;
    }
  });
  return (
    <>
      {!error && (
        <img
          src={src}
          alt={alt}
          className={className}
          onError={() => setError(true)}
        />
      )}
      {error && <ErrorImage />}
    </>
  );
}
function ErrorImage() {
  return (
    <figure className="w-full h-full flex flex-col gap-1 justify-center items-center bg-slate-800 sm:p-1 p-5">
      <ProseLayout margings={false}>
        <div className="flex flex-col justify-center items-center">
          <ErrorIcon classes="text-slate-400 sm:w-32 sm:h-32 hidden sm:inline-block" />{" "}
          <p className="m-auto text-slate-400 text-center">
            There is been an error trying to load the image.
          </p>
        </div>
        <p className="text-slate-400 text-center">
          if the error persist,{" "}
          <Link href={"/contact"} className="text-blue-500 text-center">
            Contact me
          </Link>
        </p>
      </ProseLayout>
    </figure>
  );
}
