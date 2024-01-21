import { Button } from "./elements";
import { aboutMe } from "@/utils/aboutMe";
{
  /* <div className="relative w-1/4 ">
  <div className="absolute top-5 left-5 w-5/6 h-full bg-gray-800"></div>
  <img className="absolute top-0 left-0" src="./HeroImg.png" alt="" />
</div>; */
}

export const About = () => {
  return (
    <div className="max-w-screen-xl m-auto bg-gray-50">
      <div className=" flex flex-col gap-12 items-center py-24 px-8">
        <Button buttName={"About me"} />
        <div className="flex gap-12">
          <div className="relative w-1/3">
            <div className="absolute top-5 right-5 w-full h-5/6 bg-gray-800"></div>
            <img className="absolute" src="/HomeImg.png" alt="" />
          </div>
          <div className="flex flex-col gap-6 w-2/3">
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
