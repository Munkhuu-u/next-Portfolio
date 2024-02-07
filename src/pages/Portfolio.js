import React from "react";
import { useTheme } from "../context/ThemeContext";
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

export const Portfolio = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`m-auto ${
        theme == "dark" ? "text-gray-300   " : " text-gray-600 "
      }`}
    >
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <ContactMe />
      <Footer />
    </div>
  );
};
export default Portfolio;
