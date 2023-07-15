"use client";

import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import { useState, useEffect } from "react";

export const metadata = {
  title: "Quotopia",
  description:
    "Discover and share quotes from your favorite books, movies and TV shows.",
};

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode !== null) {
      setDarkMode(JSON.parse(storedDarkMode));
    } else {
      const prefersDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setDarkMode(prefersDarkMode);
      localStorage.setItem("darkMode", JSON.stringify(prefersDarkMode));
    }
    // if (localStorage.darkMode === undefined) {
    //   setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    // } else {
    //   setDarkMode(localStorage.darkMode);
    //   console.log(localStorage.darkMode + darkMode);
    // }
  }, []);

  const handleThemeChange = () => {
    setDarkMode((prevDarkMode) => {
      const newDarkMode = !prevDarkMode;
      localStorage.setItem("darkMode", JSON.stringify(newDarkMode));
      return newDarkMode;
    });
  };

  return (
    <html lang="en" className={darkMode ? "dark" : ""}>
      <body>
        <Provider>
          <div data-dark={darkMode} className="main">
            <div data-dark={darkMode} className="gradient" />
          </div>
          <main className="app">
            <Nav themeHandler={handleThemeChange} />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
