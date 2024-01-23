import { UseTheme } from "@/context/ThemeContext";
export const Button = ({ buttName }) => {
  const { theme } = UseTheme();
  return (
    <button
      className={`text-sm ${
        theme == "dark"
          ? "text-gray-300 bg-gray-700"
          : "text-gray-600 bg-gray-200"
      } rounded-xl px-5 py-1 w-fit`}
    >
      {buttName}
    </button>
  );
};
