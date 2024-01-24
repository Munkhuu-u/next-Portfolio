import { UseTheme } from "@/context/ThemeContext";
export const Hanburger = () => {
  const { theme } = UseTheme();

  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 18H26"
        stroke={`${theme == "dark" ? "#D1D5DB" : "#4B5563"}`}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 12H26"
        stroke={`${theme == "dark" ? "#D1D5DB" : "#4B5563"}`}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 24H26"
        stroke={`${theme == "dark" ? "#D1D5DB" : "#4B5563"}`}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
