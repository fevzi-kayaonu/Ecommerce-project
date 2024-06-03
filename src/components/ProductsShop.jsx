import { ProductCard } from "./ProductCard";

export const ProductsShop = () => {
  const productCards = [];
  for (let i = 0; i < 10; i++) {
    productCards.push(
      <ProductCard
        key={i}
        cssDiv="basis-[23%] max-lg:basis-[31.6%] max-md:basis-[48.7%] max-sm:basis-[100%]"
      />
    );
  }

  return (
    <>
      <main className="flex justify-center pb-20 pt-10 max-sm:py-10 max-md:pb-15">
        <div className="basis-[90%] text-center">
          <div className="flex max-md:flex-col justify-between max-md:justify-center px-10 items-center flex-wrap gap-5 pb-10">
            <h6 className="font-bold text-sm text-secondTextColor">
              Showing all 12 results
            </h6>
            <div className="flex text-sm gap-3 items-center">
              <h6 className="font-bold text-sm text-secondTextColor">Views:</h6>
              <div className="border-2 border-solid border-lightGray rounded-md py-3 px-5">
                <i className="fa-brands fa-microsoft"></i>
              </div>
              <div className="border-2 border-solid border-lightGray rounded-md py-3 px-5">
                <i className="fa-solid fa-list"></i>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="py-5 rounded-md bg-bgInput pl-8 pr-10 border-2 border-borderGray">
                <select className="bg-bgInput font-normal text-sm text-secondTextColor">
                  <option value="0">Popularity</option>
                </select>
              </div>
              <button className="font-bold text-sm text-white tracking-wider bg-primary px-[30px] py-[16px] rounded-md hover:opacity-70">
                Filter
              </button>
            </div>
          </div>
          <div className="flex flex-wrap mx-auto py-5 px-10 gap-[2.5%]">
            {productCards}
          </div>
          <div className="text-primary w-[313px] h-[74px] flex mx-auto border-2 border-lightGray rounded-md">
            <button className="basis-[33%] border-r-2 border-lightGray cursor-pointer hover:bg-primary hover:text-white	">
              First
            </button>
            <button className="basis-[22%] border-r-2 border-lightGray cursor-pointer hover:bg-primary hover:text-white	">
              1
            </button>
            <button className="basis-[22%] border-r-2 border-lightGray cursor-pointer hover:bg-primary hover:text-white	">
              2
            </button>
            <button className="basis-[22%] border-r-2 border-lightGray cursor-pointer hover:bg-primary hover:text-white	">
              3
            </button>
            <button className="basis-[33%] hover:bg-primary hover:text-white">
              Next
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
