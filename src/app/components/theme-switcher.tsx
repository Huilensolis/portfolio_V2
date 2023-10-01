"use client";

import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [isToggled, setToggle] = useState(() => {
    if (typeof localStorage !== "undefined") {
      return localStorage.theme === "light";
    }
    return false;
  });

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      if (
        localStorage.theme === "dark" ||
        (!localStorage.theme &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      }
    }
  }, [isToggled]);

  function handleToggle() {
    if (typeof localStorage !== "undefined") {
      localStorage.theme === "dark"
        ? (localStorage.theme = "light")
        : (localStorage.theme = "dark");
    }
    setToggle((prevState) => !prevState);
  }

  return (
    <Expand
      className="text-cm-black dark:text-cm-white text-cm-icons"
      duration={750}
      onToggle={handleToggle}
      toggled={isToggled}
    />
  );
}
