export const Logos = ({ logos }) => {
  return (
    <div className="grid grid-cols-8 grid-rows-2 flex-row justify-between gap-y-12">
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
