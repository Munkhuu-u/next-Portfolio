import { Button } from "./elements";
import { aboutMe } from "@/utils/aboutMe";
import { UseTheme } from "@/context/ThemeContext";

export const About = () => {
  const { theme } = UseTheme();
  console.log(theme);
  return (
    <div
      id="About"
      className={`${theme == "dark" ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-screen-xl m-auto flex flex-col gap-12 items-center py-24 px-8">
        <Button buttName={"About me"} />
        <div className="sm:flex sm:gap-12 sm:flex-col sm:gap-12 flex items-center">
          <div className="relative w-1/3 z-10">
            <div className="absolute top-5 right-5 w-full h-5/6 bg-gray-800 -z-10"></div>
            <img className="z-20" src="/HomeImg.png" alt="" />
          </div>
          <div className="flex flex-col gap-6 sm:w-2/3 w-full">
            <div>
              <h2
                className={`text-black text-3xl  ${
                  theme == "dark" ? "text-gray-50" : "text-gray-900"
                }`}
              >
                "Curious about me? Here you have it:"
              </h2>
            </div>
            <div className="flex flex-col gap-4">
              {aboutMe.map((text) => {
                if (typeof text == "object") {
                  return (
                    <div>
                      <ul className="grid list-disc grid-cols-2 grid-rows-2">
                        {text.map((bullet) => {
                          return <li>{bullet}</li>;
                        })}
                      </ul>
                    </div>
                  );
                } else {
                  return <p>{text}</p>;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
