export const Logos = ({ logos }) => {
  return (
    <div className="flex flex-col gap-12">
      {logos.map((logos1) => {
        return (
          <div className="flex flex-col ">
            <div className="flex flex-row justify-between">
              {logos1.map((logo) => {
                return (
                  <div className="flex flex-col gap-2 items-center justify-between">
                    <img src={logo.url} alt="" />
                    <p>{logo.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
