import { Button, WorkFn } from "./elements";
import { works } from "../utils/works";

export const Work = () => {
  return (
    <div className="max-w-screen-xl m-auto flex flex-col px-8 py-24 gap-12">
      <div className="flex flex-col items-center gap-4">
        <Button buttName={"Work"} />
        <p>Some of the noteworthy projects I have built:</p>
      </div>
      {/* ----------cards---------- */}
      <div className="flex flex-col gap-12">
        {works.map((work, index) => {
          let seq = index % 2 != 0 ? "flex-row" : "flex-row-reverse";
          return (
            <div className={`rounded-2xl flex ${seq}  shadow-lg `}>
              <div className="flex bg-gray-50 w-1/2 justify-center">
                <img className="p-12" src={work.url} alt="" />
              </div>
              <div className="w-1/2">
                <WorkFn work={work} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
