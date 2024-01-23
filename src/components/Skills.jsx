import { logos } from "../utils/logos";
import { Logos } from "../components/elements";
import { Button } from "../components/elements";
import { UseTheme } from "@/context/ThemeContext";
export const Skills = () => {
  const { theme } = UseTheme();
  return (
    <div className={`${theme == "dark" ? "bg-black" : " bg-white"}`}>
      <div className="max-w-screen-xl m-auto flex flex-col justify-center px-[32px] py-[96px] gap-12 ">
        <div className="flex flex-col  items-center gap-4">
          <Button buttName="Skills" />
          <p>The skills, tools and technologies I am really good at:</p>
        </div>
        <Logos logos={logos} />
      </div>
    </div>
  );
};
