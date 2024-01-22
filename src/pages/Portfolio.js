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
import { ThemeProvider } from "../context/ThemeContext";

const Portfolio = () => {
  return (
    <ThemeProvider>
      <div className="sm:m-auto sm:text-gray-600  m-auto text-gray-600">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Work />
        <ContactMe />
        <Footer />
      </div>
    </ThemeProvider>
  );
};
export default Portfolio;
