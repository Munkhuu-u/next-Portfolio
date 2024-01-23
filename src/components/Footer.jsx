import { Copyright } from "./icons";
import { UseTheme } from "@/context/ThemeContext";

export const Footer = () => {
  const { theme } = UseTheme();
  return (
    <div className={`${theme == "dark" ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="max-w-screen-xl m-auto ">
        <div className="flex flex-row max-w-screen-xl m-auto justify-center items-center px-[32px] sm:py-[96px] py-6 gap-[8px] ">
          <Copyright />
          <p className="text-sm">
            2023 | <span className="underline ">Designed</span>{" "}
            <span>and </span>
            <span className=" underline ">coded</span> with <span>❤️ </span>
            by Sagar Shah
          </p>
        </div>
      </div>
    </div>
  );
};
