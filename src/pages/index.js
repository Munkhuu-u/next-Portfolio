import React from "react";
import Portfolio from "./Portfolio";
import { ThemeProvider } from "../context/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
