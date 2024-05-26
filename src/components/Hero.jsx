import HeroLogo from "../assets/noneHeaderKızıl.png";

export const Hero = () => {
  return (
    <>
      <section className="py-10 pl-[2rem] flex justify-center ">
        <div className="flex  basis-[95%] flex-col bg-gradient-custom pl-14">
          <div className="flex items-center basis-[90%] pl-14">
            <div className="basis-1/2 ">
              <p className="font-bold text-base text-heroContent py-4">
                SUMMER 2024
              </p>
              <h1 className="font-bold text-6xl py-4">NEW COLLECTION</h1>
              <p className="font-normal text-xl text-secondTextColor py-4 max-w-xs">
                We know how large objects will act, but things on a small scale.
              </p>
              <button className="bg-primary text-white font-bold text-2xl px-8 py-4 rounded-md">
                SHOP NOW
              </button>
            </div>
            <div className="basis-1/2 relative z-10">
              <img
                className="w-full min-w-[328px] relative"
                src={HeroLogo}
                alt="Hero.png"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
