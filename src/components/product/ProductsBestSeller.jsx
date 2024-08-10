import { ProductCard } from "./ProductCard";
import ProductImg from "../../assets/Best-Seller-1.jpg";
import { useSelector } from "react-redux";

const data = [ProductImg];

const ProductBestSellers = () => {
  const { products } = useSelector((store) => store.product);

  return (
    <>
      <main className="flex justify-center pb-20 pt-10 max-sm:py-10 max-md:pb-15 bg-bgGray">
        <div className="basis-[90%] ">
          <div className="px-10">
            <h3 className="font-bold text-2xl pb-5">BESTSELLER PRODUCTS</h3>
            <div className="border-[1px] border-lightGray" />
          </div>
          <div className="flex flex-wrap mx-auto py-5 px-10 gap-[2.5%] justify-center">
            {products
              .sort((a, b) => a.sell_count - b.sell_count)
              .slice(0, 8)
              .map((item, index) => (
                <ProductCard
                  key={index}
                  item={item}
                  cssContainer="basis-[23%] max-lg:basis-[31.6%] max-md:basis-[48.7%] max-sm:basis-[100%] bg-white"
                  colors={false}
                />
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductBestSellers;
