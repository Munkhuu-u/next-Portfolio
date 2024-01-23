import { UseTheme } from "@/context/ThemeContext";
export const ExpsFn = ({ exp }) => {
  const { theme } = UseTheme();
  return (
    <div
      className={`flex flex-row justify-center gap-12  p-8 m-auto rounded-xl shadow-lg ${
        theme == "dark" ? "bg-gray-800" : " bg-white"
      }`}
    >
      <div>
        <img src={exp.companyLogo} alt="" />
      </div>
      <div className="max-w-sm">
        <h3
          className={`${
            theme == "dark" ? "text-gray-50" : "text-black"
          } text-[20px] font-semibold`}
        >
          {exp.position}
        </h3>
        <div>
          <ul className="list-disc">
            {exp.experiences.map((proj) => {
              return <li>{proj}</li>;
            })}
          </ul>
        </div>
      </div>
      <div>
        <p>{exp.dates}</p>
      </div>
    </div>
  );
};
