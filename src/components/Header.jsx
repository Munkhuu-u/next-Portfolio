import { Logo, Sun, Divider, Moon, Hanburger, Esc } from "./icons";
import { UseTheme } from "../context/ThemeContext";
import { useState } from "react";
export const Header = () => {
  const { theme, setTheme } = UseTheme();
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div
      className={`${
        theme === "dark" ? "sm:bg-gray-950 bg-gray-950" : "sm:bg-white bg-white"
      } sticky top-0 right-0 left-0 z-10`}
    >
      <div className="sm:m-auto sm:max-w-screen-xl sm:flex sm:flex-row justify-between sm:px-8 sm:items-center p-4 flex flex-row max-w-screen-xl h-fit">
        <div className="flex">
          <Logo />
        </div>
        <div>
          <div className="sm:flex sm:flex-row sm:visible hidden flex h-fit">
            <div className="sm:flex sm:flex-row sm:gap-6 sm:mr-4 sm:items-center sm:visible flex collapse">
              <a href="#About" scroll={true}>
                About
              </a>
              <a href="#Experience" scroll={true}>
                Testimonials
              </a>
              <a href="#Work" scroll={true}>
                Work
              </a>
              <a href="#Contact" scroll={true}>
                Contact
              </a>
              <Divider />
              <button
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                  console.log(theme);
                }}
              >
                {theme === "dark" ? <Moon /> : <Sun />}
              </button>
            </div>
            <div>
              <button
                className={`${
                  theme === "light"
                    ? "bg-black text-white"
                    : "bg-white text-black"
                } rounded-xl py-[6px] px-[16px] sm:visible collapse`}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="sm:hidden visible">
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <Hanburger />
          </button>
        </div>
      </div>

      {/* Hamburger menu section */}
      <div
        className={`${
          showMenu ? "visible" : "hidden"
        } m-auto max-w-screen-xl flex flex-col items-start py-4 bg-green-800`}
      >
        <div className="flex justify-between">
          <Logo />
          <Esc />
        </div>
        <div className="border-y flex flex-col w-full">
          <a href="#About" scroll={true}>
            About
          </a>
          <a href="#Experience" scroll={true}>
            Testimonials
          </a>
          <a href="#Work" scroll={true}>
            Work
          </a>
          <a href="#Contact" scroll={true}>
            Contact
          </a>
        </div>
        <button
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
            console.log(theme);
          }}
        >
          {theme === "dark" ? <Moon /> : <Sun />}
        </button>
        <button
          className={`${
            theme === "light" ? "bg-black text-white" : "bg-white text-black"
          } rounded-xl py-[6px] px-[16px] sm:visible collapse`}
        >
          Download CV
        </button>
      </div>
    </div>
  );
};
