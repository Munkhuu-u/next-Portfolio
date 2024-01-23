import { Location, Active, Git, Twitter, Figma } from "./icons";
import { HeroDesc } from "./texts";
import { UseTheme } from "../context/ThemeContext";
export const Hero = () => {
  const { theme } = UseTheme();
  const bgColor = theme === "dark" ? "bg-gray-950" : "bg-white";

  return (
    <div className={`${bgColor}`}>
      <div
        className={` flex max-w-screen-xl m-auto justify-center gap-12 px-8 py-[96px] `}
      >
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
        <div className="relative w-full ">
          <div className="absolute top-5 left-5 w-4/6 h-full bg-gray-800"></div>
          <img className="absolute " src="./HeroImg.png" alt="" />
        </div>
      </div>
    </div>
  );
};
