import PostImg from "../assets/PostImg.jpg";

export const Post = () => {
  return (
    <>
      <article className="shadow-lg pr-5 max-sm:py-4 hover:shadow-2xl hover:shadow-secondTextColor">
        <div className="flex justify-center gap-4 max-sm:flex-wrap  ">
          <div className="relative basis-[44%] max-sm:basis-[80%] aspect-[2/3.5] max-sm:aspect-[1/1]">
            <img className="w-full h-full" src={PostImg} alt="" />
            <p className="absolute text-sm max-sm:text-lg leading-6 top-5 left-5 bg-error text-white px-3">
              Sale
            </p>
            <div className="absolute bottom-5 left-[13%] max-lg:left-[25%] max-sm:left-[19%] flex justify-center gap-4 text-xl max-xl:text-sm max-lg:text-xs max-sm:text-2xl">
              <div className="bg-white rounded-full p-2">
                <i className="fa-regular fa-heart"></i>
              </div>
              <div className="bg-white rounded-full p-2">
                <i className="fa-solid fa-cart-shopping"></i>
              </div>
              <div className="bg-white rounded-full p-2">
                <i className="fa-solid fa-eye"></i>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 basis-[53%] max-sm:basis-[80%] aspect-[1/1]  justify-evenly">
            <div className="flex justify-between">
              <p className="font-normal text-sm max-sm:text-lg py-1 text-primary">
                English Department
              </p>
              <div className="flex bg-black gap-1 rounded-3xl py-2 px-3">
                <i className="fa-solid fa-star text-yellow text-xs max-sm:text-base"></i>
                <p className="text-xs max-sm:text-base text-white ">4.9</p>
              </div>
            </div>
            <h3 className="text-base max-sm:text-2xl font-bold">
              Graphic Design
            </h3>
            <p className="font-normal text-sm max-sm:text-base">
              We focus on ergonomics and meeting you where you work. It{"'"}s
              only a keystroke away.
            </p>
            <div className="flex gap-1">
              <i className="fa-solid fa-arrow-up-from-bracket text-sm text-secondTextColor"></i>
              <p className="text-sm max-sm:text-lg font-bold text-secondTextColor">
                15 Sales
              </p>
            </div>
            <div className="flex gap-2 text-base max-sm:text-lg ">
              <p className="text-muted font-bold  leading-6">$16.48</p>
              <p className="text-secondary font-bold leading-6">$6.48</p>
            </div>
            <div className="flex gap-1">
              <div className="bg-primary w-[16px] h-[16px] rounded-full"></div>
              <div className="bg-secondary w-[16px] h-[16px] rounded-full"></div>
              <div className="bg-alert w-[16px] h-[16px] rounded-full"></div>
              <div className="bg-black w-[16px] h-[16px] rounded-full"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1 text-xs ">
                <i className="fa-regular fa-clock text-primary"></i>
                <p className="">22h</p>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <i className="fa-regular fa-chart-bar text-alert"></i>
                <p className="">64 Lessons</p>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <i className="fa-solid fa-chart-line text-secondary"></i>
                <p className="">Progress</p>
              </div>
            </div>
            <button className="font-bold text-sm max-sm:text-lg leading-6 font-montserrat text-primary border-solid border-[1px] border-primary w-[50%] min-w-[200px] px-1 rounded-3xl py-1 ">
              Learn More <span>{">"}</span>
            </button>
          </div>
        </div>
      </article>
    </>
  );
};
