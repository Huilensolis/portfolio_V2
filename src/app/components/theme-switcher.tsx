"use client";

import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [isToggled, setToggle] = useState(() => {
    const initialValue = (localStorage.theme = "light" ? true : false);
    return initialValue;
  });

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme === "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme === "light";
    }
  }, [isToggled]);

  function handleToggle() {
    localStorage.theme === "dark"
      ? (localStorage.theme = "light")
      : (localStorage.theme = "dark");
    setToggle(!isToggled);
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
