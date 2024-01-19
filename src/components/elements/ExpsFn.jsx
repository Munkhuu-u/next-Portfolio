export const ExpsFn = ({ exp }) => {
  return (
    <div className="flex flex-row justify-center gap-12 bg-white p-8 m-auto rounded-xl shadow-lg">
      <div>
        <img src={exp.companyLogo} alt="" />
      </div>
      <div className="max-w-sm">
        <h3 className="text-black text-[20px]">{exp.position}</h3>
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
