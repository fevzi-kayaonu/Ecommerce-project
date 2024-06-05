export const AboutClients = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center py-10 bg-bgGray">
        <h2 className="text-4xl text-center">Big Companies Are Here</h2>
        <p className="text-sm text-center max-w-[45%] py-5">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="basis-[90%] flex justify-center flex-wrap gap-x-20 gap-y-10  text-6xl max-lg:text-7xl max-md:text-8xl max-sm:text-9xl text-secondTextColor p-8">
          <i className="fa-brands fa-hooli "></i>
          <i className="fa-brands fa-lyft "></i>
          <i className="fa-brands fa-pied-piper-hat "></i>
          <i className="fa-brands fa-stripe "></i>
          <i className="fa-brands fa-aws "></i>
          <i className="fa-brands fa-reddit-alien "></i>
        </div>
      </section>
    </>
  );
};
