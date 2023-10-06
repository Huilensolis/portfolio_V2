import { ReactNode } from "react";
import Link from "next/link";
import { IconChevronLeft } from "@tabler/icons-react";
import { PostFooter } from "./post-footer";
import { InterfacePostMetadata } from "../../../models/post-metadata.interface";
import { AvatarCard } from "../../../components/avatar-card";
import { Logo } from "../../../components/icons";

export function PostLayout({
  children,
  blogsMetaData,
}: {
  children: ReactNode;
  blogsMetaData: InterfacePostMetadata[];
}) {
  return (
    <>
      <Link
        href={"/blog"}
        className="mb-[20px] flex w-full justify-start items-center"
      >
        <IconChevronLeft className="text-gray-500 dark:text-gray-400 w-6 h-6" />
        <span className="text-gray-500 dark:text-gray-400 text-2xl">
          Go back
        </span>
      </Link>
      {children}
      <hr className="w-full mt-7 border-transparent" />
      <div className="w-full flex justify-start">
        <AvatarCard
          btnHref="https://www.linkedin.com/in/huilensolis/"
          btnTarget="__blank"
          btnText="Connect on Linkedin"
          subtitle="FullStack Developer"
          title="Huilen Solis"
          logo={<Logo classes={"h-16 w-16"} />}
        >
          this is my about me!
        </AvatarCard>
      </div>
      <hr className="w-full my-14 dark:border-gray-700 border-b-[1px] border-gray-400" />
      <PostFooter blogsMetaData={blogsMetaData} />
    </>
  );
}
