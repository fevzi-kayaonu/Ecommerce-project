import { ProductCard } from "./ProductCard";

export const ProductsShop = () => {
  const productCards = [];
  for (let i = 0; i < 10; i++) {
    productCards.push(
      <ProductCard key={i} cssDiv="basis-[23%] max-lg:basis-[48%]" />
    );
  }

  return (
    <>
      <main className="flex justify-center py-20 max-sm:py-10 max-md:py-15">
        <div className="basis-[90%] text-center">
          <div className="flex justify-between px-10 items-center flex-wrap">
            <h6 className="font-bold text-sm text-secondTextColor">
              Showing all 12 results
            </h6>
            <div className="flex text-xs gap-3 items-center">
              <h6 className="font-bold text-sm text-secondTextColor">Views:</h6>
              <div className="border-2 border-solid border-lightGray rounded-md py-3 px-5">
                <i className="fa-brands fa-microsoft"></i>
              </div>
              <div className="border-2 border-solid border-lightGray rounded-md py-3 px-5">
                <i className="fa-solid fa-list"></i>
              </div>
            </div>
            <div className="flex gap-3">
              <select className="py-5 rounded-md bg-bgInput px-5">
                <option value="0">Popularity:</option>
              </select>
              <button className="font-bold text-sm text-white tracking-wider bg-primary px-[30px] py-[16px] rounded-md hover:opacity-70">
                Filter
              </button>
            </div>
          </div>
          <div className="flex flex-wrap mx-auto py-5 px-10 gap-[2.5%]">
            {productCards}
          </div>
          <div className="text-primary w-[313px] h-[74px] flex mx-auto border-2 border-lightGray rounded-md">
            <button className="basis-[33%] border-r-2 border-lightGray cursor-pointer	">
              First
            </button>
            <button className="basis-[22%] border-r-2 border-lightGray cursor-pointer	">
              1
            </button>
            <button className="basis-[22%] border-r-2 border-lightGray cursor-pointer	">
              2
            </button>
            <button className="basis-[22%] border-r-2 border-lightGray cursor-pointer	">
              3
            </button>
            <button className="basis-[33%] ">Next</button>
          </div>
        </div>
      </main>
    </>
  );
};
