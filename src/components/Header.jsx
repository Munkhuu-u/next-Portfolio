import { Logo, Sun, Divider, Moon, Hanburger, Esc } from "./icons";
import { UseTheme } from "../context/ThemeContext";
import { useState } from "react";
export const Header = () => {
  const { theme, setTheme } = UseTheme();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={``}>
      {/* Main header */}
      <div
        className={`fixed top-0 right-0 left-0 z-20 sm:m-auto sm:max-w-screen-xl sm:flex sm:flex-row justify-between sm:px-8 sm:items-center p-4 flex flex-row max-w-screen-xl h-fit 
      ${
        theme === "dark"
          ? "sm:bg-gray-950 bg-gray-950 "
          : "sm:bg-white bg-white"
      }`}
      >
        <div className="flex">
          <a href="#0">
            <Logo />
          </a>
        </div>
        <div>
          <div className="sm:flex sm:flex-row sm:visible flex h-fit">
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
        className={`z-30 sm:hidden flex flex-row bg-red-950 bg-opacity-25 
        ${showMenu ? "visible" : "hidden"} ${
          theme == "dark" ? "bg-gray-950" : "bg-gray-50"
        }`}
      >
        <div className="w-1/5"></div>
        <div className="w-4/5">
          <div className="flex flex-row justify-between items-center p-4">
            <a href="#0">
              <Logo />
            </a>
            <button
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            >
              <Esc />
            </button>
          </div>
          <div
            className={`${
              theme == "dark" ? "text-gray-300" : "text-gray-600"
            } border-y flex flex-col w-full p-4 gap-4 font-medium`}
          >
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
          <div className="flex flex-col p-4 gap-4 w-full  ">
            <div className="flex flex-row justify-between">
              <p>Switch theme</p>
              <button
                onClick={() => {
                  setTheme(theme === "light" ? "dark" : "light");
                  console.log(theme);
                }}
              >
                {theme === "dark" ? <Moon /> : <Sun />}
              </button>
            </div>
            <button
              className={`${
                theme === "light"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              } rounded-xl px-[16px] py-[6px] text-gray-900 text-base font-medium`}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
