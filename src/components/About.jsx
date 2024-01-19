import { Button } from "./elements";
import { aboutMe } from "@/utils/aboutMe";

export const About = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl m-auto flex flex-col gap-12 items-center py-24 px-8">
        <Button buttName={"About me"} />
        <div className="flex gap-12">
          <div>
            <div>
              <img src="/HomeImg.png" alt="" />
            </div>
            <div></div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-black text-xl">
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
