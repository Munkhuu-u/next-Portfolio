import { Button } from "./elements";
import { Message, Copy, Phone, Git, Twitter, Figma } from "./icons";
import { UseTheme } from "@/context/ThemeContext";

export const ContactMe = () => {
  const { theme } = UseTheme();
  return (
    <div
      id="Contact"
      className={`${theme == "dark" ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="max-w-screen-xl m-auto flex flex-col items-center sm:py-24 py-6 px-8 gap-8">
        <div className="flex flex-col items-center gap-4">
          <Button buttName={"Get in touch"} />
          <p>
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </p>
        </div>
        <div className="flex gap-5">
          <Message />
          <p
            className={`sm:text-4xl text-lg ${
              theme == "dark" ? "text-gray-50" : "text-gray-900"
            }`}
          >
            reachsagarshah@gmail.com
          </p>
          <Copy />
        </div>
        <div className="flex gap-5">
          <Phone />
          <p
            className={`sm:text-4xl text-lg ${
              theme == "dark" ? "text-gray-50" : "text-gray-900"
            }`}
          >
            +91 8980500565
          </p>
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
    </div>
  );
};
