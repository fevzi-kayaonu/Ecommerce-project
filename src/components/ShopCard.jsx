import left from "../assets/ShopCardLeft.jpg";
import topRight from "../assets/ShopCardRightUp.jpg";
import bottomRight from "../assets/ShopCardRightDown.jpg";

export const ShopCard = () => {
  return (
    <>
      <section className="py-10 flex justify-center">
        <div className=" flex justify-center basis-[90%] max-md:flex-wrap gap-5">
          <div className="relative text-white max-md:basis-[100%] basis-[45%] min-w-[345px] max-md:aspect-[4/5] max-sm:aspect-[3/5]">
            <img className="object-cover w-full h-full" src={left} alt="" />
            <div className="bg-customColor bg-opacity-75 absolute bottom-0 max-lg:p-5 py-10 px-20 max-md:w-full  flex flex-col items-center ">
              <h2 className="font-bold text-2xl mb-4 ">
                Top Product Of the Week
              </h2>
              <button className="text-sm border-solid border-[1px] border-white py-3 px-8 rounded-md hover:bg-primary hover:opacity-60">
                EXPLORE ITEMS
              </button>
            </div>
          </div>

          <div className="basis-[45%] max-md:basis-[100%] ">
            <div className="aspect-[2/1] relative text-white mb-5 min-w-[345px] max-md:aspect-[4/5]">
              <img
                className="object-cover w-full h-full"
                src={topRight}
                alt=""
              />
              <div className="bg-customColor bg-opacity-75 absolute bottom-0 max-lg:p-5 py-10 pl-10 max-md:w-full pr-20 text-center ">
                <h2 className="font-normal text-xl">Top Product Of the Week</h2>
                <button className="text-sm border-solid border-[1px] border-white py-3 px-8 rounded-md mt-3 hover:bg-primary hover:opacity-60">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
            <div className="aspect-[2/1] relative text-white min-w-[345px] max-md:aspect-[4/5]">
              <img
                className="object-cover w-full h-full "
                src={bottomRight}
                alt=""
              />
              <div className="bg-customColor bg-opacity-75 absolute bottom-0 max-lg:p-5 py-10 pl-10 max-md:w-full pr-20 text-center ">
                <h2 className="font-normal text-xl">Top Product Of the Week</h2>
                <button className="text-sm border-solid border-[1px] border-white py-3 px-8 rounded-md mt-3 hover:bg-primary hover:opacity-60">
                  EXPLORE ITEMS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
