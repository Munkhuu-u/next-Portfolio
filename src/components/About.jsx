import { Button } from "./elements";
import { aboutMe } from "@/utils/aboutMe";
import { useTheme } from "@/context/ThemeContext";

export const About = () => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div
      id="About"
      className={`${theme == "dark" ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-screen-xl m-auto flex flex-col gap-12 items-center py-24 px-8">
        <Button buttName={"About me"} />
        {/* Card parent view */}
        <div className="sm:flex sm:flex-row sm:items-start sm:gap-12 flex flex-col gap-12 h-full">
          {/* Image section */}
          <div className="sm:relative w-1/3 z-10 h-full sm:m-0 m-auto relative">
            <div className="sm:absolute sm:right-5 sm:top-5 sm:w-full sm:h-full absolute right-5 top-5 w-full h-full bg-gray-800 -z-10"></div>
            <img src="/HomeImg.png" alt="" />
          </div>
          {/* Card view */}
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
