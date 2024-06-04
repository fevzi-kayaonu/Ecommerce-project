import { useState } from "react";
import detailImg1 from "../assets/detail-1.jpg";
import detailImg2 from "../assets/detail-2.jpeg";

const data = [detailImg1, detailImg2];

export const ProductDetail = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (e) => {
    const name = e.target.name;

    if (name === "prev") {
      setActiveIndex(activeIndex <= 0 ? data.length - 1 : activeIndex - 1);
    } else if (name === "next") {
      setActiveIndex(activeIndex >= data.length - 1 ? 0 : activeIndex + 1);
    } else {
      console.log(e.target.value + "girdim");
      setActiveIndex(e.target.value);
    }
  };

  return (
    <>
      <section className="flex justify-center bg-bgGray py-16">
        <article className="basis-[85%]">
          <div className="py-5 px-5">
            <a className="font-bold text-sm hover:underline" href="/">
              Home
            </a>
            <i className="fa-solid fa-chevron-right m-2 text-muted"></i>
            <a
              className="font-bold text-sm text-muted hover:underline"
              href="/shop"
            >
              Shop
            </a>
          </div>
          <section className="flex max-md:flex-col justify-between gap-5">
            <article className="basis-[48%]">
              <div className="relative aspect-[1.1/1] pb-5">
                <img
                  src={data[activeIndex]}
                  alt="detail.jpg"
                  className="w-full h-full object-contain"
                />
                <button
                  name="next"
                  className="bg-transparent text-yellow active:text-black text-6xl absolute right-[8%] top-[50%] hover:opacity-75"
                  onClick={handleClick}
                >
                  {">"}
                </button>
                <button
                  name="prev"
                  className="bg-transparent text-yellow active:text-black text-6xl absolute left-[8%] top-[50%] hover:opacity-75"
                  onClick={handleClick}
                >
                  {"<"}
                </button>
              </div>
              <div className="flex gap-[3%]">
                {data.map((item, index) => (
                  <div
                    name="direct"
                    value={index}
                    className="basis-[20%] aspect-[1/0.75]"
                    key={index}
                    onClick={handleClick}
                  >
                    <img
                      src={item}
                      alt="detail.jpg"
                      className={`w-full h-full object-cover ${index == activeIndex ? "opacity-20" : null}`}
                    />
                  </div>
                ))}
              </div>
            </article>
            <article className="flex flex-col justify-between basis-[48%] aspect-[1.1/1] max-md:aspect-[4/3] max-sm:aspect-[1/1.1] pb-[10.5%] max-lg:pb-[2%]">
              <h4 className="text-xl">Floating Phone</h4>
              <div className="flex gap-1">
                <i className="fa-solid fa-star text-yellow text-sm max-sm:text-base"></i>
                <i className="fa-solid fa-star text-yellow text-sm max-sm:text-base"></i>
                <i className="fa-solid fa-star text-yellow text-sm max-sm:text-base"></i>
                <i className="fa-solid fa-star text-yellow text-sm max-sm:text-base"></i>
                <i className="fa-solid fa-star text-yellow text-sm max-sm:text-base"></i>
                <p className="text-sm font-bold text-secondTextColor">
                  10 Reviews
                </p>
              </div>
              <p className="text-2xl font-bold">$1,139.33</p>
              <div className="flex">
                <p className="text-sm font-bold text-secondTextColor">
                  Availability :
                </p>
                <p className="text-sm font-bold text-primary">In Stock </p>
              </div>
              <p className="text-sm text-secondTextColor">
                Met minim Mollie non desert Alamo est sit cliquey dolor do met
                sent. RELIT official consequent door ENIM RELIT Mollie.
                Excitation venial consequent sent nostrum met.
              </p>
              <hr />
              <div className="flex gap-3">
                <div className="bg-primary w-[26px] h-[26px] rounded-full"></div>
                <div className="bg-secondary w-[26px] h-[26px] rounded-full"></div>
                <div className="bg-alert w-[26px] h-[26px] rounded-full"></div>
                <div className="bg-black w-[26px] h-[26px] rounded-full"></div>
              </div>
              <div className="flex gap-4">
                <button className="text-sm font-bold bg-primary text-white rounded-md px-6">
                  Select Options
                </button>
                <div className="flex justify-center gap-4 text-xl max-xl:text-sm max-lg:text-xs max-sm:text-2xl">
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
            </article>
          </section>
        </article>
      </section>
    </>
  );
};
