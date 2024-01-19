export const Logos = ({ logos }) => {
  return (
    <div className="flex flex-col gap-12">
      {logos.map((logos1) => {
        return (
          <div className="">
            <div className="sm:grid-cols-8 grid grid-rows-2 grid-cols-3 flex flex-row justify-between gap-y-12">
              {logos1.map((logo) => {
                return (
                  <div className="flex flex-col gap-2 items-center justify-between ">
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
