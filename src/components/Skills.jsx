import { logos } from "../utils/logos";
import { Logos } from "../components/elements";
import { Button } from "../components/elements";

export const Skills = () => {
  return (
    <div className="px-[32px] py-[96px] ">
      <div>
        <Button buttName="Skills" />
        <p>The skills, tools and technologies I am really good at:</p>
      </div>
      <Logos logos={logos} />
    </div>
  );
};
