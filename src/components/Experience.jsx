import { exps } from "../utils/exps";
import { Button, ExpsFn } from "./elements";
import { UseTheme } from "@/context/ThemeContext";
export const Experience = () => {
  const { theme } = UseTheme();
  return (
    <div
      className={`max-w-screen-xl m-auto ${
        theme == "dark" ? " bg-gray-900" : " bg-gray-50"
      }`}
    >
      <div className=" flex flex-col  py-24 px-8 gap-12">
        <div className="flex flex-col  items-center gap-4">
          <Button buttName={"Experience"} />
          <p>Here is a quick summary of my most recent experiences:</p>
        </div>
        <div className="flex flex-col gap-12 ">
          {exps.map((exp) => {
            return <ExpsFn exp={exp} />;
          })}
        </div>
      </div>
    </div>
  );
};
