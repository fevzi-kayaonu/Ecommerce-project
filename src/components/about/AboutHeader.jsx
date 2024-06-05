import aboutHeader from "../../assets/aboutHeaderImg.png";

export const AboutHeader = () => {
  return (
    <>
      <section className="flex flex-wrap justify-center items-center pt-10">
        <div className="flex max-md:flex-col justify-between items-center basis-[80%] gap-16">
          <article className="md:w-3/6 text-center lg:text-left basis-[45%]">
            <h5 className="font-bold text-headerColor ">ABOUT COMPANY</h5>
            <h5 className="font-bold text-headerColor my-9 text-6xl leading-[80px] ">
              ABOUT US
            </h5>
            <h4 className="font-normal text-xl text-secondTextColor lg:w-2/3">
              We know how large objects will act, but things on a small scale
            </h4>
            <button className="bg-primary text-white font-bold text-sm px-8 py-4 my-9 rounded-md hover:opacity-75">
              Get Quote Now
            </button>
          </article>
          <article className="relative basis-[45%] ">
            <img className="w-full h-full" src={aboutHeader} alt="" />
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
