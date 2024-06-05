export const AboutContent = () => {
  return (
    <section className="flex justify-center items-center py-10">
      <div className="flex flex-col justify-center items-center basis-[80%]">
        <article className="max-md:text-center m-auto lg:text-left">
          <p className="text-error font-medium text-sm mt-10 md:mt-0">
            Problems trying
          </p>
          <div className="mt-6 md:flex m-auto">
            <h3 className="text-headerColor font-bold text-2xl mb-10 lg:mb-0 md:mr-10 basis-[40%]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </h3>
            <h2 className="text-start basis-[60%]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </h2>
          </div>
        </article>

        <article className="py-24 px-5 md:flex justify-between items-center w-full">
          <div className="text-center mb-10 md:mb-0">
            <h1 className="text-headerColor font-bold text-6xl leading-[80px] ">
              15K
            </h1>
            <h5 className="text-secondTextColor font-bold leading-6 ">
              Happy Customers
            </h5>
          </div>
          <div className="text-center mb-10 md:mb-0">
            <h1 className="text-headerColor font-bold text-6xl leading-[80px] ">
              150K
            </h1>
            <h5 className="text-secondTextColor font-bold leading-6 ">
              Monthly Visitors
            </h5>
          </div>
          <div className="text-center mb-10 md:mb-0">
            <h1 className="text-headerColor font-bold text-6xl leading-[80px]">
              15
            </h1>
            <h5 className="text-secondTextColor font-bold leading-6 ">
              Countries Worldwide
            </h5>
          </div>
          <div className="text-center mb-10 md:mb-0">
            <h1 className="text-headerColor font-bold text-6xl leading-[80px] ">
              100+
            </h1>
            <h5 className="text-secondTextColor font-bold leading-6 ">
              Top Partners
            </h5>
          </div>
        </article>
      </div>
    </section>
  );
};
