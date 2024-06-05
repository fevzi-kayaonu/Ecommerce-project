import arrow from "../../assets/Arrow.png";

export const ContactMain = () => {
  return (
    <>
      <main className="py-10 flex flex-col gap-20 max-md:bg-bgGray">
        <title className="flex flex-col justify-center items-center text-center">
          <h6 className="font-bold text-sm">VISIT OUR OFFICE</h6>
          <h2 className="font-bold text-4xl max-w-[400px]">
            We help small businesses with big ideas
          </h2>
        </title>
        <section className="flex flex-wrap justify-center items-center gap-5">
          <article className="px-16 py-20 bg-white">
            <div className="text-center text-headerColor">
              <i className={"fa-solid fa-phone mb-4 text-primary text-7xl"}></i>
              <h6 className=" font-bold text-sm leading-6">
                georgia.young@example.com
              </h6>
              <h6 className=" font-bold text-sm leading-6">
                georgia.young@ple.com
              </h6>
              <h5 className=" font-bold leading-6 my-4">Get Support</h5>

              <button className="py-4 px-9 border border-primary rounded-full text-primary">
                Submit Request
              </button>
            </div>
          </article>
          <article className="px-16 py-16 max-sm:py-20 bg-headerBlue">
            <div className="text-center text-white">
              <i
                className={
                  "fa-solid fa-location-dot mb-4 text-primary text-7xl"
                }
              ></i>
              <h6 className=" font-bold text-sm leading-6">
                georgia.young@example.com
              </h6>
              <h6 className=" font-bold text-sm leading-6">
                georgia.young@ple.com
              </h6>
              <h5 className=" font-bold leading-6 my-4">Get Support</h5>

              <button className="py-4 px-9 border border-primary rounded-full text-primary">
                Submit Request
              </button>
            </div>
          </article>
          <article className="px-16 py-20 bg-white">
            <div className="text-center text-headerColor">
              <i
                className={"fa-solid fa-envelope mb-4 text-primary text-7xl"}
              ></i>
              <h6 className=" font-bold text-sm leading-6 ">
                georgia.young@example.com
              </h6>
              <h6 className=" font-bold text-sm leading-6">
                georgia.young@ple.com
              </h6>
              <h5 className=" font-bold leading-6 my-4">Get Support</h5>

              <button className="py-4 px-9 border border-primary rounded-full text-primary">
                Submit Request
              </button>
            </div>
          </article>
        </section>
        <section className="flex flex-col justify-center items-center bg-white">
          <img src={arrow} alt="arrow.pg" />
          <h5 className="my-8 font-bold leading-6 ">
            WE Can{"'"}t WAIT TO MEET YOU
          </h5>
          <h1 className="mb-8 font-bold leading-[80px] text-5xl md:text-6xl">
            Let{"'"}s Talk
          </h1>
          <button className="py-4 px-10 bg-primary rounded-md font-bold text-white ">
            Try it free now
          </button>
        </section>
      </main>
    </>
  );
};
