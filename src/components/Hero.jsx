import { Location, Active, Git, Twitter, Figma } from "./icons";
import { HeroDesc } from "./texts";

export const Hero = () => {
  return (
    <div className="flex m-auto justify-center gap-12 px-8 py-[96px] ">
      <div className="flex flex-col gap-12 max-w-3xl">
        <div className="flex flex-col gap-2">
          <h2 className="text-black text-6xl font-bold">Hi, I’m Sagar 👋</h2>
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
      <div className="relative w-1/4 ">
        <div className="absolute top-5 left-5 w-5/6 h-full bg-gray-800"></div>
        <img className="absolute top-0 left-0" src="./HeroImg.png" alt="" />
      </div>
    </div>
  );
};
