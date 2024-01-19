import { Logo, Sun, Divider } from "./icons";

export const Header = () => {
  return (
    <div>
      <div className="max-w-screen-xl m-auto flex flex-row justify-between px-8 my-4 items-center">
        <div>
          <Logo />
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row gap-6 mr-4 items-center">
            <p>About</p>
            <p>Work</p>
            <p>Testimonials</p>
            <p>Contact</p>
            <Divider />
            <Sun />
          </div>
          <div>
            <button className="bg-black text-white rounded-xl py-[6px] px-[16px]">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
