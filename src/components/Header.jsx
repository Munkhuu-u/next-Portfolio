import { Logo, Sun, Divider, Hanburger } from "./icons";
import { UseTheme } from "../context/ThemeContext";
export const Header = () => {
  const { theme, setTheme } = UseTheme();

  const bgColor = theme === "dark" ? "bg-black" : "bg-white";

  console.log(theme === "dark");
  console.log(bgColor);
  return (
    <div
      className={`sm:${bgColor} sm:max-w-screen-xl sm:m-auto sm:visible sm:flex sm:flex-row sm:justify-between sm:px-8 sm:my-4 sm:items-center p-4 flex flex-row max-w-screen-xl h-fit`}
    >
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
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {" "}
            <Sun />
          </button>
        </div>
        <div>
          <button className="bg-black text-white rounded-xl py-[6px] px-[16px] sm:visible collapse">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
