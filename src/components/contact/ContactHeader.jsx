import contactHeader from "../../assets/ContactHeader.png";

export const ContactHeader = () => {
  return (
    <>
      <section className="flex flex-wrap justify-center items-center py-10">
        <div className="flex max-md:flex-col justify-between items-center basis-[85%] gap-16">
          <article className="md:w-3/6 text-center lg:text-left elative basis-[45%]">
            <h5 className="font-bold text-headerColor ">CONTACT US</h5>
            <h5 className="font-bold text-headerColor my-9 text-6xl leading-[80px] ">
              Get in touch today!
            </h5>
            <h4 className="font-normal text-xl text-secondTextColor lg:w-2/3">
              We know how large objects will act, but things on a small scale
            </h4>
            <h3 className="my-9 text-headerColor font-bold text-2xl ">
              Phone : +451 215 215
            </h3>
            <h3 className="mb-9 text-headerColor font-bold text-2xl ">
              Fax : +451 215 215
            </h3>
            <div className="flex items-center text-headerColor text-3xl justify-center lg:justify-normal">
              <i className="fa-brands fa-twitter  mr-7"></i>
              <i className="fa-brands fa-facebook  mr-7"></i>
              <i className="fa-brands fa-instagram mr-7"></i>
              <i className="fa-brands fa-linkedin "></i>
            </div>
          </article>
          <article className="relative basis-[45%] ">
            <img className="w-full h-full" src={contactHeader} alt="" />
            <div className="bg-[#977DF4] w-[3%] aspect-square rounded-full absolute left-[-1%] bottom-[40%]"></div>
            <div className="bg-[#977DF4] w-[3%] aspect-square rounded-full absolute right-0 top-[22%]"></div>
            <div className="bg-[#FFE9EA] w-[6%] aspect-square rounded-full absolute right-[2%] top-[38%]"></div>
            <div className="bg-[#FFE9EA] w-[14%] aspect-square rounded-full absolute left-[-6%] top-[8%]"></div>
            <div className="bg-[#FFE9EA] w-[85%] aspect-square  rounded-full absolute left-[5%] top-[7%] z-[-1]"></div>
          </article>
        </div>
      </section>
    </>
  );
};
