import { ArrowUpRight } from "./icons";

interface link {
  name: string;
  href: string;
}

export function Footer() {
  const SOCIALNETWORKS: link[] = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/huilensolis",
    },
    {
      name: "Email",
      href: "mailto:huilensolis@skiff.com",
    },
    {
      name: "Github",
      href: "https://github.com/Huilensolis",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/solishuilen",
    },
  ];
  return (
    <footer className="w-full flex justify-center items-center bg-cm-black px-5 sm:px-20 cm-1xl:px-2 pt-36 pb-12">
      <div className="w-full flex flex-col xl:flex-row justify-center items-center gap-4 lg:max-w-5xl md:justify-between">
        <span className="text-lg text-neutral-300 gap-x-2  text-center sm:text-start">
          © 2023{" "}
          <a href="/" className="hover:underline">
            Huilen Solis.
          </a>{" "}
          All Rights Reserved.
        </span>
        <ul className="w-full lg:w-auto cm-1xl:grid grid-cols-2 max-w-[22rem] gap-4 flex items-center justify-center text-lg font-medium text-neutral-300">
          {SOCIALNETWORKS.map((link) => (
            <li key={link.href} className="w-full">
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-lg flex items-center justify-center w-full text-neutral-300 cm-1xl:p-1 cm-1xl:text-center cm-1xl:bg-neutral-800 cm-1xl:border cm-1xl:border-neutral-600 hover:brightness-110 transition-all delay-75"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
