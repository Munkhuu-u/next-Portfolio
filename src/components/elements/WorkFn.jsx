import { Button } from "../elements";
import { Share } from "../icons";
export const WorkFn = ({ work }) => {
  return (
    <div className="flex flex-col gap-6 p-12 items-start ">
      <p className="text-4xl">Fiskil</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
        urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae.
      </p>
      <div className="flex flex-row gap-2 flex-wrap">
        {work.skills.map((skill) => {
          return <Button buttName={skill} />;
        })}
      </div>
      <div>
        <Share />
      </div>
    </div>
  );
};
