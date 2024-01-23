import { Logo, Sun, Divider, Moon } from "./icons";
import { UseTheme } from "../context/ThemeContext";
export const Header = () => {
  const { theme, setTheme } = UseTheme();
  return (
    //${theme === "dark" ? "bg-gray-950" : "bg-white"}
    <div className={`${theme === "dark" ? "sm:bg-gray-950" : "sm:bg-white"}`}>
      <div className="sm:m-auto sm:max-w-screen-xl  sm:visible sm:flex sm:flex-row sm:justify-between sm:px-8  sm:items-center p-4 flex flex-row max-w-screen-xl h-fit">
        <div className="flex">
          <Logo />
        </div>
        <div className="sm:flex sm:flex-row sm:visible collapse flex h-fit">
          <div className="sm:flex sm:flex-row sm:gap-6 sm:mr-4 sm:items-center sm:visible flex collapse">
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
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
                theme === "light" ? "dark " : "light "
              } rounded-xl py-[6px] px-[16px] sm:visible collapse`}
            >
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
