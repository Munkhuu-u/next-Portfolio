import { Location, Active, Git, Twitter, Figma } from "./icons";
import { HeroDesc } from "./texts";
import { UseTheme } from "../context/ThemeContext";
export const Hero = () => {
  const { theme } = UseTheme();

  return (
    <div id="0" className={`${theme === "dark" ? "bg-gray-950" : "bg-white"}`}>
      <div
        className={
          "sm:max-w-screen-xl sm:m-auto sm:flex sm:flex-row sm:justify-center flex flex-col-reverse sm:gap-12 gap-12 sm:px-8 sm:py-[96px] py-16 px-4"
        }
      >
        {/* Left side */}
        <div className="flex flex-col gap-12 ">
          <div className="flex flex-col gap-2">
            <h2
              className={`${
                theme == "dark" ? "text-gray-50" : "text-black"
              } text-6xl font-bold`}
            >
              Hi, I’m Sagar 👋
            </h2>
            <HeroDesc />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <Location />
              <p>Ahmedabad, India</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Active />
              <p>Available for new projects</p>
            </div>
          </div>
          <div className="flex flex-row">
            <Git />
            <Twitter />
            <Figma />
          </div>
        </div>

        {/* Right side */}
        <div className="sm:relative sm:flex sm:flex-row flex flex-col relative h-full w-2/5 z-10 sm:m-0 m-auto">
          {/* sm:absolute sm:right-5 sm:top-5 sm:w-full sm:h-full absolute right-5 top-5 w-full h-full bg-gray-800 -z-10 */}
          <div className="sm:absolute sm:left-5 sm:top-5 left-5 top-5 sm:w-full sm:h-full absolute w-full h-full bg-gray-800 -z-10"></div>
          <img src="./HeroImg.png" alt="" />
        </div>
      </div>
    </div>
  );
};
