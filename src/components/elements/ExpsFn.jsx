export const ExpsFn = ({ exp }) => {
  return (
    <div className="flex flex-row justify-center gap-12 bg-white p-8 m-auto rounded-xl shadow-lg">
      <div>
        <img src={exp.companyLogo} alt="" />
      </div>
      <div className="max-w-sm">
        <h3>{exp.position}</h3>
        <div>
          <ul className="list-disc"></ul>
          {exp.experiences.map((proj) => {
            return <li className="list-disc ">{proj}</li>;
          })}
        </div>
      </div>
      <div>
        <p>{exp.dates}</p>
      </div>
    </div>
  );
};
