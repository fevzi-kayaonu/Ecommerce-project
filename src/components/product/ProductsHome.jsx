import { ProductCard } from "./ProductCard";
import ProductImg from "../../assets/ProductImg.jpg";

const data = [
  ProductImg,
  ProductImg,
  ProductImg,
  ProductImg,
  ProductImg,
  ProductImg,
  ProductImg,
  ProductImg,
  ProductImg,
  ProductImg,
];

export const ProductsHome = () => {
  return (
    <>
      <main className="flex justify-center py-20 max-sm:py-10 max-md:py-15">
        <div className="basis-[90%] text-center">
          <div className="">
            <p className="font-semibold text-xl tracking-wider text-secondTextColor">
              Featured Products
            </p>
            <h3 className="font-bold text-2xl tracking-wide py-3">
              BESTSELLER PRODUCTS
            </h3>
            <p className="font-medium text-sm tracking-wider text-secondTextColor">
              Problems trying to resolve the conflict between{" "}
            </p>
          </div>
          <div className="flex flex-wrap mx-auto py-5 px-10 gap-[2.5%]">
            {data.map((item) => (
              <ProductCard
                key={item}
                item={item}
                cssContainer="basis-[18%] max-xl:basis-[23.1%] max-lg:basis-[31.66%] max-md:basis-[48.74%] max-sm:basis-[100%]"
                colors={false}
              />
            ))}
          </div>
          <button className="font-bold text-primary text-sm tracking-wider border-2	border-primary px-14 py-4 mt-6 hover:opacity-60">
            LOAD MORE PRODUCTS
          </button>
        </div>
      </main>
    </>
  );
};
