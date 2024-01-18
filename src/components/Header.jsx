import { Logo, Sun, Divider } from "./icons";

export const Header = () => {
  return (
    <div className="flex">
      <div>
        <Logo />
      </div>
      <div className="flex gap-6">
        <p>About</p>
        <p>Work</p>
        <p>Testimonials</p>
        <p>Contact</p>
        <Divider />
        <Sun />
      </div>
      <div>
        <button>Download CV</button>
      </div>
    </div>
  );
};
