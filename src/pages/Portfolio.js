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

const Portfolio = () => {
  return (
    <div className=" m-auto text-gray-600">
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
