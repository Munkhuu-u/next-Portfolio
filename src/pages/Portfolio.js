import React from "react";
import {
  Header,
  Hero,
  About,
  Skills,
  Experience,
  Work,
  ContactMe,
  Footer,
} from "../components/index";
import { UseTheme } from "../context/ThemeContext";
const Portfolio = () => {
  const { theme } = UseTheme();
  return (
    <div
      className={`m-auto ${
        theme == "dark" ? "text-gray-300   " : " text-gray-600 "
      }`}
    >
      <Header />
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Work /> */}
      <ContactMe />
      <Footer />
    </div>
  );
};
export default Portfolio;
