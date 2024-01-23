export const Logos = ({ logos }) => {
  return (
    <div
      className="sm:grid sm:grid-cols-8 sm:grid-rows-2 sm:flex-row sm:justify-between sm:gap-y-12 
    grid grid-cols-3  flex-row justify-between gap-y-12"
    >
      {logos.map((logo) => {
        return (
          <div className="flex flex-col items-center">
            <>{logo.url}</>
            <p>{logo.name}</p>
          </div>
        );
      })}
    </div>
  );
};
