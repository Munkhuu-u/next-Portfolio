import { Button, WorkFn } from "./elements";
import { works } from "../utils/works";
import { UseTheme } from "@/context/ThemeContext";

export const Work = () => {
  const { theme } = UseTheme();
  return (
    <div
      id="Work"
      className={`${theme == "dark" ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="max-w-screen-xl m-auto flex flex-col px-8 py-24 gap-12">
        <div className="flex flex-col items-center gap-4">
          <Button buttName={"Work"} />
          <p>Some of the noteworthy projects I have built:</p>
        </div>
        {/* ----------cards---------- */}
        <div className="flex flex-col gap-12">
          {works.map((work, index) => {
            return (
              <div
                className={`rounded-2xl shadow-lg flex ${
                  index % 2 == 0
                    ? "sm:flex-row flex-col"
                    : "sm:flex-row-reverse flex-col-reverse"
                }`}
              >
                <div
                  className={`${
                    theme == "dark" ? "bg-gray-600" : "bg-gray-50"
                  } "flex sm:w-1/2  justify-center"`}
                >
                  <img className="p-12" src={work.url} alt="" />
                </div>
                <div
                  className={`${
                    theme == "dark" ? "bg-gray-900" : "bg-white"
                  } sm:w-1/2`}
                >
                  <WorkFn work={work} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
