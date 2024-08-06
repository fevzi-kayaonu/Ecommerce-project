import { ProductCard } from "../product/ProductCard";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, setLimit } from "../../store/actions/productAction";
import Spinner from "../others/Spinner";

const selectionSort = { label: "Rating High to Low", value: "rating:desc" };

export const ProductsHome = () => {
  const { products, loading, limit, offset } = useSelector(
    (store) => store.product
  );
  const dispatch = useDispatch();

  const updateLimit = () => {
    const width = window.innerWidth;
    const limit =
      width < 640
        ? 10
        : width < 768
          ? 12
          : width < 1024
            ? 18
            : width < 1280
              ? 24
              : 30;
    return limit;
  };

  const currentLimit = updateLimit();

  useEffect(() => {
    dispatch(
      getProducts({
        sort: selectionSort.value,
        limit: currentLimit,
      })
    );
    return () => window.removeEventListener("resize", updateLimit);
  }, []);

  const handleClick = () => {
    dispatch(
      getProducts({
        sort: selectionSort.value,
        offset: offset,
        limit: limit,
      })
    );
  };

  /* 
  useEffect(() => {
    //dispatch(setOffset(0));
    dispatch(
      getProducts({
        sort: selectionSort.value,
      })
    );
    //dispatch(setTotal(0));
    //dispatch(setLimit());
  }, []);

  const handleClick = () => {
    dispatch(
      getProducts({
        sort: selectionSort.value,
        offset: offset,
      })
    );
  };
 */
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
          {!loading ? (
            <div className="flex flex-wrap mx-auto py-5 px-10 gap-[2.5%]">
              {products?.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  cssContainer="basis-[18%] max-xl:basis-[23.1%] max-lg:basis-[31.66%] max-md:basis-[48.74%] max-sm:basis-[100%]"
                  colors={false}
                />
              ))}
            </div>
          ) : (
            <Spinner divCss="self-center mx-auto" svgCss="w-14 h-14" />
          )}
          <button
            className="font-bold text-primary text-sm tracking-wider border-2	border-primary px-14 py-4 mt-6 hover:opacity-60"
            onClick={handleClick}
          >
            LOAD MORE PRODUCTS
          </button>
        </div>
      </main>
    </>
  );
};
