import { ProductCard } from "./ProductCard";

const ProductBestSellers = () => {
  const productCards = [];
  for (let i = 0; i < 8; i++) {
    productCards.push(
      <ProductCard
        key={i}
        cssContainer="basis-[23%] max-lg:basis-[31.6%] max-md:basis-[48.7%] max-sm:basis-[100%] bg-white"
        colors={false}
      />
    );
  }

  return (
    <>
      <main className="flex justify-center pb-20 pt-10 max-sm:py-10 max-md:pb-15 bg-bgGray">
        <div className="basis-[90%] text-center">
          <div className="flex max-md:flex-col justify-between max-md:justify-center px-10 items-center flex-wrap gap-3 pb-5">
            <h3 className="font-bold text-2xl">BESTSELLER PRODUCTS</h3>
            <div className="border-b-2	border-black"></div>
          </div>
          <div className="flex flex-wrap mx-auto py-5 px-10 gap-[2.5%]">
            {productCards}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductBestSellers;
