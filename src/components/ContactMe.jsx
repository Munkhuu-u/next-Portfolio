import { Button } from "./elements";
import { Message, Copy, Phone, Git, Twitter, Figma } from "./icons";

export const ContactMe = () => {
  return (
    <div className="flex flex-col items-center py-24 px-8 gap-8">
      <div className="flex flex-col items-center gap-4">
        <Button buttName={"Get in touch"} />
        <p>
          What’s next? Feel free to reach out to me if you're looking for a
          developer, have a query, or simply want to connect.
        </p>
      </div>
      <div className="flex gap-5">
        <Message />
        <p className="text-4xl">reachsagarshah@gmail.com</p>
        <Copy />
      </div>
      <div className="flex gap-5">
        <Phone />
        <p className="text-4xl">+91 8980500565</p>
        <Copy />
      </div>
      <div className="flex flex-col gap-2">
        <p>You may also find me on these platforms!</p>
        <div className="flex justify-center">
          <Git />
          <Twitter />
          <Figma />
        </div>
      </div>
    </div>
  );
};
