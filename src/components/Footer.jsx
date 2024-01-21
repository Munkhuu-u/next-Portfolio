import { Copyright } from "./icons";

export const Footer = () => {
  return (
    <div className="max-w-screen-xl m-auto bg-gray-50">
      <div className="flex flex-row max-w-screen-xl m-auto justify-center items-center px-[32px] py-[96px] gap-[8px] ">
        <Copyright />
        <p className="text-sm">
          2023 | <span className="underline ">Designed</span> <span>and </span>
          <span className=" underline ">coded</span> with <span>❤️ </span>
          by Sagar Shah
        </p>
      </div>
    </div>
  );
};
