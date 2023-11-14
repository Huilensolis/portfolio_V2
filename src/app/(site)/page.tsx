import { PrimaryBtn, SecondaryBtn } from "@components/buttons";
import {
  ArrowUpRight,
  IconBxlJavascript,
  IconBxlReact,
  IconCss3,
  IconExpress,
  IconHtml5,
  IconNextjs,
  IconNodeJs,
  IconTypescript,
} from "@components/icons";
import { Card } from "@components/card";
import { Span } from "../components/span";
import { SingleCard } from "../components/card-2";

export const metadata = {
  title: `Huilen Solis's Portfolio`,
  description:
    "Full stack developer, Working with React, Nextjs, Nodejs and Tailwind!",
  openGraph: {
    images: [{ url: "../../public/icon.png", alt: "Huilen Solis logo" }],
    title: `Huilen Solis's Portfolio`,
    description:
      "Full stack developer, Working with React, Nextjs, Nodejs and Tailwind!",
    type: "website",
    siteName: "Huilen Solis's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: `Huilen Solis's Portfolio`,
    description:
      "Full stack developer, Working with React, Nextjs, Nodejs and Tailwind!",
    creator: "@solishuilen",
    images: [{ url: "../../public/icon.png", alt: "Huilen Solis logo" }],
  },
};
const technologies: {
  name: string;
  icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  color: "orange" | "blue" | "violet" | "green";
  span: string;
}[] = [
  {
    name: "Next JS",
    icon: IconNextjs,
    color: "violet",
    span: "col-span-1",
  },
  {
    name: "React JS",
    icon: IconBxlReact,
    color: "blue",
    span: "xl:col-span-2 col-span-1",
  },
  {
    name: "Typescript",
    icon: IconTypescript,
    color: "blue",
    span: "col-span-2",
  },
  {
    name: "CSS",
    icon: IconCss3,
    color: "blue",
    span: "col-span-1",
  },
  {
    name: "HTML",
    icon: IconHtml5,
    color: "orange",
    span: "col-span-1",
  },
  {
    name: "JavaScript",
    icon: IconBxlJavascript,
    color: "orange",
    span: "col-span-2",
  },
  {
    name: "Node JS",
    icon: IconNodeJs,
    color: "green",
    span: "col-span-2",
  },
  {
    name: "Express",
    icon: IconExpress,
    color: "green",
    span: "col-span-1",
  },
];
export default function Home() {
  return (
    <section className="flex flex-col items-center gap-24 max-w-5xl w-full">
      <main className="w-full flex flex-col items-center relative p-20 cm-1xl:p-4 justify-center">
        <h1 className="text-6xl font-bold text-neutral-300 text-center">
          Huilen Solis
        </h1>
        <h2 className="text-xl font-normal text-neutral-400 w-2/3 text-center">
          Full Stack Web Developer, building aesthetic, accesible and scalable
          websites.
        </h2>
        <div className="mt-6 flex justify-center items-center gap-4 cm-1xl:flex-wrap">
          <a href="https://github.com/Huilensolis" target="_blank">
            <SecondaryBtn>
              Github
              <ArrowUpRight classes="w-4 h-4" />
            </SecondaryBtn>
          </a>
          <a href="https://www.linkedin.com/in/huilensolis/" target="_blank">
            <PrimaryBtn>
              LinkedIn <ArrowUpRight classes="w-4 h-4" />
            </PrimaryBtn>
          </a>
        </div>
      </main>
      <section className="w-full flex flex-col justify-center items-center gap-8 mb-20">
        <h3 className="text-4xl font-bold text-neutral-300">Projects</h3>
        <ul className="flex flex-col gap-16 justify-center items-center w-full">
          <li className="z-[1] sticky top-32 cm-2xl:static animate-cm-scale-top w-full">
            <Card
              leftSide={
                <article className="h-full w-full flex flex-col justify-center items-start">
                  <h3 className="text-4xl font-bold tracking-tight text-neutral-300">
                    Culinary Alchemy
                  </h3>
                  <span className="text-cm-orange mb-2">07/2023 - Present</span>
                  <p className="font-normal text-neutral-400">
                    A Recipe Social Network, build in colaboration with{" "}
                    <a
                      href="https://www.linkedin.com/in/jesus-oyola-b9b530284/"
                      className="text-cm-orangefont-semibold hover:underline transition-all delay-75"
                      target="_blank"
                    >
                      Jesus Oyola
                    </a>
                    , who worked on the frontend, while I worked in the Backend
                    my role consisted on creating the backend api, and its
                    routes, controllers, providers, while working with Json Web
                    Tokens to manage user session and roles. Connecting to a
                    database and manageing images hosted in third party
                    services, interacting through an api.
                  </p>
                  <div className="flex cm-1xl:flex-col gap-4 mt-4 justify-start w-full">
                    <a
                      href="https://culinary-alchemy-web-app.vercel.app/"
                      target="_blank"
                    >
                      <PrimaryBtn>
                        Deploy <ArrowUpRight classes="w-4 h-4" />
                      </PrimaryBtn>
                    </a>
                    <a
                      href="https://github.com/CulinaryAlchemy/CulinaryAlchemy"
                      target="_blank"
                    >
                      <SecondaryBtn>
                        Github <ArrowUpRight classes="w-4 h-4" />
                      </SecondaryBtn>
                    </a>
                  </div>
                </article>
              }
              cards={[
                <>
                  <article className="p-8 cm-1xl:p-4 flex flex-col border-neutral-600 border-2 cm-1xl:border-transparent cm-1xl:border-0 h-full w-full rounded-xl">
                    <h3 className="mb-2 text-3xl font-bold tracking-tight text-neutral-300 cm-1xl:break-all">
                      Metodologies
                    </h3>
                    <p className="font-normal text-neutral-400">
                      We have been working with a{" "}
                      <span className="text-orange-400">
                        Clean Architecture
                      </span>{" "}
                      following the{" "}
                      <span className="text-orange-400">Solid principles,</span>{" "}
                      while staying organized using{" "}
                      <span className="text-orange-400">Jira</span> and{" "}
                      <span className="text-orange-400">Scrum metodologie</span>{" "}
                    </p>
                  </article>
                </>,
                <>
                  <article className="p-8 cm-1xl:p-4 flex flex-col border-neutral-600 border-2 cm-1xl:border-transparent cm-1xl:border-0 h-full w-full rounded-xl">
                    <h3 className="mb-2 text-3xl font-bold tracking-tight text-neutral-300 cm-1xl:break-all">
                      Backend Technologies
                    </h3>
                    <p className="font-normal text-neutral-400">
                      <span className="text-orange-400">Typescript</span>,{" "}
                      <span className="text-orange-400">Node.JS</span>,{" "}
                      <span className="text-orange-400">Express</span>,{" "}
                      <span className="text-orange-400">Sequelize</span>{" "}
                      (database ORM),{" "}
                      <span className="text-orange-400">JWT</span> (Json Web
                      Tokens),{" "}
                      <span className="text-orange-400">PostgreSQL</span>,{" "}
                      <span className="text-orange-400">Bcrypt</span>{" "}
                      (encripting library),{" "}
                      <span className="text-orange-400">Express-validator</span>{" "}
                      (input validation)
                    </p>
                  </article>
                </>,
                <>
                  <article className="p-8 cm-1xl:p-4 flex flex-col border-neutral-600 border-2 cm-1xl:border-transparent cm-1xl:border-0 h-full w-full rounded-xl">
                    <h3 className="mb-2 text-3xl  font-bold tracking-tight  text-neutral-300 cm-1xl:break-all">
                      Frontend Technologies
                    </h3>
                    <p className="font-normal text-neutral-400">
                      <span className="text-orange-400">Typescript</span>,{" "}
                      <span className="text-orange-400">React</span>,{" "}
                      <span className="text-orange-400">React-router-dom</span>,{" "}
                      <span className="text-orange-400">Mui</span> (component
                      library), <span className="text-orange-400">Axios</span>{" "}
                      and <span className="text-orange-400">Zod</span> (input
                      validation)
                    </p>
                  </article>
                </>,
              ]}
            />
          </li>
          <li className="sticky top-36 cm-2xl:static z-[2] animate-cm-fade-in-top [animation-timeline:view();] [animation-range:10%_500px] w-full opacity-0">
            <Card
              leftSide={
                <article className="h-full w-full flex flex-col justify-center items-start">
                  <h3 className=" text-4xl font-bold tracking-tight text-neutral-300 cm-1xl:break-all">
                    Spotify Clone
                  </h3>
                  <span className="text-cm-orange mb-2">09/2023 - 09/2023</span>
                  <p className="font-normal text-neutral-400">
                    A personal Project, Built with Next js, Typescript and
                    Tailwind. It Contains almost all Spotify Functionalities,
                    providing a log In service music player, songs upload, user
                    profile, favorites colection and a song search system.
                  </p>
                  <div className="flex cm-1xl:flex-col gap-4 mt-4 justify-start w-full">
                    <a
                      href="https://spotify-clone-jjk.vercel.app/"
                      target="_blank"
                    >
                      <PrimaryBtn>
                        Deploy <ArrowUpRight classes="w-4 h-4" />
                      </PrimaryBtn>
                    </a>
                    <a
                      href="https://github.com/Huilensolis/spotify-clone"
                      target="_blank"
                    >
                      <SecondaryBtn>
                        Github <ArrowUpRight classes="w-4 h-4" />
                      </SecondaryBtn>
                    </a>
                  </div>
                </article>
              }
              cards={[
                <>
                  <article className="p-8 cm-1xl:p-4 flex flex-col border-neutral-600 border-2 cm-1xl:border-transparent cm-1xl:border-0 h-full w-full rounded-xl">
                    <h3 className="mb-2 text-3xl  font-bold tracking-tight text-neutral-300 cm-1xl:break-all">
                      Backend Technologies
                    </h3>
                    <p className="font-normal text-neutral-400">
                      I have used{" "}
                      <span className="text-orange-400">Supabase</span>, which
                      is a Firebase Alternative, Built on PostgreSQL, which
                      comes with a ORM for Next js, letting you interact with
                      your database and authenticating the user.
                    </p>
                  </article>
                </>,
                <>
                  <article className="p-8 cm-1xl:p-4 flex flex-col border-neutral-600 border-2 cm-1xl:border-transparent cm-1xl:border-0 h-full w-full rounded-xl">
                    <h3 className="mb-2 text-3xl  font-bold tracking-tight text-neutral-300 cm-1xl:break-all">
                      Frontend Technologies
                    </h3>
                    <p className="font-normal text-neutral-400">
                      <span className="text-orange-400">Typescript</span>,{" "}
                      <span className="text-orange-400">Next JS</span>,{" "}
                      <span className="text-orange-400">Supabase</span>,{" "}
                      <span className="text-orange-400">Zustand</span> (Global
                      State manager), and{" "}
                      <span className="text-orange-400">Remix</span> (component
                      library)
                    </p>
                  </article>
                </>,
              ]}
            />
          </li>
          <li className="sticky top-40 cm-2xl:static z-[3] animate-cm-fade-in-top [animation-timeline:view();] [animation-range:10%_500px] opacity-0 w-full">
            <Card
              leftSide={
                <article className="h-full w-full flex flex-col justify-center items-start">
                  <h3 className=" text-4xl font-bold tracking-tight text-neutral-300">
                    Owr
                  </h3>
                  <span className="text-cm-orange mb-2">08/2023 - 08/2023</span>
                  <p className="font-normal text-neutral-400">
                    A mini Duolingo clone, which provides random practicing
                    exercises in a entretaining way, providing a sentence in
                    French, letting you choose the correct traduction to
                    English, validation the traduction and communicating if its
                    right or else.
                  </p>
                  <div className="flex cm-1xl:flex-col gap-4 mt-4 justify-start w-full">
                    <a href="https://owr-french.vercel.app/" target="_blank">
                      <PrimaryBtn>
                        Deploy <ArrowUpRight classes="w-4 h-4" />
                      </PrimaryBtn>
                    </a>
                    <a
                      href="https://github.com/Huilensolis/owr"
                      target="_blank"
                    >
                      <SecondaryBtn>
                        Github <ArrowUpRight classes="w-4 h-4" />
                      </SecondaryBtn>
                    </a>
                  </div>
                </article>
              }
              cards={[
                <>
                  <article className="p-8 cm-1xl:p-4 flex flex-col border-neutral-600 border-2 cm-1xl:border-transparent cm-1xl:border-0 h-full w-full rounded-xl">
                    <h3 className="mb-2 text-3xl font-bold tracking-tight text-neutral-300 cm-1xl:break-all">
                      Frontend Technologies
                    </h3>
                    <p className="font-normal text-neutral-400">
                      <span className="text-orange-400">Typescript</span>,{" "}
                      <span className="text-orange-400">React</span>,{" "}
                      <span className="text-orange-400">React-router-dom</span>{" "}
                      and <span className="text-orange-400">Zustand</span>{" "}
                      (global state manager)
                    </p>
                  </article>
                </>,
              ]}
            />
          </li>
        </ul>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-8 mb-20">
        <h3 className="text-4xl font-bold text-neutral-300">About me</h3>
        <div className="h-full w-full xl:p-28 md:p-10 p-5 relative overflow-hidden rounded-lg bg-[#232227] border-neutral-700 border mb-20">
          <p className="text-cm-white font-normal text-lg text-center font-geistSans">
            My web development journey began on Platzi, a online learning
            platform, where I mastered <Span>JavaScript</Span>,{" "}
            <Span>HTML</Span>, and <Span>CSS</Span>, igniting my passion for
            coding. In March 2023, I joined the{" "}
            <Span>Full Stack Santex Bootcamp</Span>, a initiative organized by
            Santex, a software company. it was taught by the developers at the
            company, giving the oportunity to learn web development from
            developers who are actively working in the industry. This experience
            not only honed my technical skills in <Span>JavaScript</Span>,{" "}
            <Span>Node.js</Span>, <Span>Express</Span>, <Span>TypeScript</Span>,{" "}
            <Span>SCSS</Span>,<Span> and Angular</Span>, but also gave me{" "}
            <Span>experiencie working in teamwork and Scrum methodology</Span>.
            As the Bootcamp concluded in October 2023, my journey continued into
            the realm of React. Today,{" "}
            <Span>
              I&apos;m crafting accessible, performant, and maintainable
              projects using React.js, Next.js, Tailwind CSS, Node.js, Express,
              and TypeScript.
            </Span>
            <br /> <br /> The learning never stops, and I&apos;m committed to
            staying at the forefront of web development technologies to deliver
            top-notch solutions. Let&apos;s create something cool together!
          </p>
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center gap-8 mb-20">
        <h3 className="text-4xl font-bold text-neutral-300">My stack</h3>
        <ul className="md:grid flex flex-col w-full max-w-full xl:grid-cols-3 md:grid-cols-2 gap-3">
          {technologies.map((technologie, i) => {
            return (
              <li key={i} className={`w-full h-full ${technologie.span}`}>
                <SingleCard>
                  <article className="flex gap-3 xl:p-14 md:p-10 p-10 w-full h-full">
                    <technologie.icon
                      className={`${
                        technologie.color === "blue"
                          ? "fill-blue-200 text-blue-200"
                          : technologie.color === "orange"
                          ? "fill-orange-200 text-orange-200"
                          : technologie.color === "violet"
                          ? "fill-violet-200 text-violet-200"
                          : technologie.color === "green"
                          ? "fill-green-200 text-green-200"
                          : "fill-neutral-400 text-neutral-400"
                      } w-20 h-20 xl:inline-block hidden`}
                    />
                    <div className="flex flex-col justify-center h-full">
                      <h4
                        className={` ${
                          technologie.color === "blue"
                            ? "text-blue-200"
                            : technologie.color === "orange"
                            ? "text-orange-200"
                            : technologie.color === "violet"
                            ? "text-violet-200"
                            : technologie.color === "green"
                            ? "text-green-200"
                            : "text-neutral-400"
                        } font-geistSans font-semibold text-3xl`}
                      >
                        {technologie.name}
                      </h4>
                    </div>
                  </article>
                </SingleCard>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="w-full flex justify-center items-center flex-col gap-8 mb-20">
        <h3 className="text-4xl font-bold text-neutral-300">Contact me</h3>
        <article className="flex items-center justify-center bg-orange-500 sm:p-36 xl:p-30 p-20 rounded-lg relative group w-full">
          <div className="z-[1] flex items-center justify-center w-full h-ful">
            <h4 className="text-neutral-200 font-geistSans font-semibold xl:text-6xl text-4xl break-all">
              huilensolis@skiff.com
            </h4>
          </div>
          <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 overflow-hidden z-0">
            <span className="text-neutral-200/20 font-geistSans font-semibold text-[30vw] select-none">
              Gmail
            </span>
          </div>
        </article>
        <a
          href="https://www.linkedin.com/in/huilensolis/"
          target="_blank"
          className="z-[1] w-full"
        >
          <article className="flex items-center justify-center bg-blue-500 sm:p-40 xl:p-30 p-20 rounded-lg relative group">
            <div className="flex items-center justify-center w-full h-ful">
              <h4 className="text-neutral-200 font-geistSans font-semibold xl:text-6xl text-4xl break-all">
                Huilensolis
              </h4>
              <ArrowUpRight classes="w-12 h-12 text-neutral-200" />
            </div>
            <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 overflow-hidden z-0">
              <span className="text-neutral-200/20 font-geistSans font-semibold text-[26rem] select-none z-0">
                LinkedIn
              </span>
            </div>
          </article>
        </a>
        <a
          href="https://github.com/Huilensolis"
          target="_blank"
          className="z-[1] w-full"
        >
          <article className="flex items-center justify-center bg-violet-500 sm:p-40 xl:p-30 p-20 rounded-lg relative group">
            <div className="flex items-center justify-center w-full h-ful">
              <h4 className="text-neutral-200 font-geistSans font-semibold xl:text-6xl text-4xl break-all">
                Huilensolis
              </h4>
              <ArrowUpRight classes="w-12 h-12 text-neutral-200" />
            </div>
            <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 overflow-hidden z-0">
              <span className="text-neutral-200/20 font-geistSans font-semibold text-[26rem] select-none z-0">
                Github
              </span>
            </div>
          </article>
        </a>
        <a
          href="https://twitter.com/solishuilen"
          target="_blank"
          className="z-[1] w-full"
        >
          <article className="flex items-center justify-center bg-blue-500 sm:p-40 xl:p-30 p-20 rounded-lg relative group">
            <div className="flex items-center justify-center w-full h-ful">
              <h4 className="text-neutral-200 font-geistSans font-semibold xl:text-6xl text-4xl break-all">
                solishuilen
              </h4>
              <ArrowUpRight classes="w-12 h-12 text-neutral-200" />
            </div>
            <div className="w-full h-full flex items-center justify-center absolute top-0 left-0 overflow-hidden z-0">
              <span className="text-neutral-200/20 font-geistSans font-semibold text-[26rem] select-none z-0">
                Twitter
              </span>
            </div>
          </article>
        </a>
      </section>
    </section>
  );
}
