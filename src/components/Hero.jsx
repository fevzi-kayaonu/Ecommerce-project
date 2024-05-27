import HeroImg from "../assets/heroImg.png";

export const Hero = () => {
  return (
    <>
      <section className="flex justify-center">
        <div className="flex basis-[90%] pl-[7%] items-center bg-gradient-to-r from-heroLeft to-heroRight z-index-2 rounded-2xl">
          <div className="basis-1/2 outline">
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
          <div className="basis-[50%]">
            <div className="relative mr-[-10%]">
              <img className=" w-100 z-10 " src={HeroImg} alt="Hero.png" />
              <div className="bg-white w-50 aspect-square rounded-full absolute z-index top-[-5%] right-[10%]"></div>
              <div className="bg-white w-[11%] aspect-square rounded-full absolute z-index top-0 left-[7%]"></div>
              <div className="bg-white  z-30 w-[4%] aspect-square rounded-full absolute top-[40%] right-[4%]"></div>
              <div className="bg-heroBonus w-[2%] aspect-square rounded-full absolute top-[20%] right-[2%]"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
