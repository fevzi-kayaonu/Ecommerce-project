import { ProductCard } from "../product/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions/productAction";
import { useEffect, useState } from "react";
import Spinner from "../others/Spinner";
import { useLocation } from "react-router-dom";

export const ProductsShop = () => {
  const { products, loading } = useSelector((store) => store.product);
  const [selectionFilter, setSelectionFilter] = useState(0);
  const [iteratableProduct, setIteratableProduct] = useState([]);
  const location = useLocation();
  const dispatch = useDispatch();
  console.log("products: ", products);

  useEffect(() => {
    if (location.pathname === "/shop") dispatch(getProducts());
    else dispatch(getProducts(location.pathname));
  }, [dispatch, location.pathname]);

  useEffect(() => {
    if (location.pathname === "/shop") setIteratableProduct([...products]);
  }, [location.pathname]);

  const handleClick = () => {
    //selectionFilterın default olma durumunu ayarlıcaksın
    const type = selectionFilter < 2 ? "price" : "rating";
    const newProducts = iteratableProduct?.sort((a, b) => {
      selectionFilter % 2 === 0 ? a[type] - b[type] : b[type] - a[type];
    });

    setIteratableProduct([...newProducts]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "select") setSelectionFilter(value);
  };

  return (
    <>
      <main className="flex justify-center pb-20 pt-10 max-sm:py-10 max-md:pb-15">
        <div className="basis-[90%] flex flex-col text-center">
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
                <select
                  className="bg-bgInput font-normal text-sm text-secondTextColor"
                  name="select"
                  value={selectionFilter}
                  onChange={(e) => handleChange(e)}
                >
                  <option value="0">Default</option>
                  <option value="1">Price Low To High</option>
                  <option value="2">Price High To Low</option>
                  <option value="3">Rating Low To High</option>
                  <option value="4">Rating High To Low</option>
                </select>
              </div>
              <button
                className="font-bold text-sm text-white tracking-wider bg-primary px-[30px] py-[16px] rounded-md hover:opacity-70"
                onClick={handleClick}
              >
                Filter
              </button>
            </div>
          </div>
          {!loading ? (
            <div className="flex flex-wrap mx-auto py-5 px-10 gap-[2.5%]">
              {iteratableProduct?.map((item) => (
                <ProductCard
                  key={item.id}
                  item={item}
                  cssContainer="basis-[23%] max-lg:basis-[31.6%] max-md:basis-[48.7%] max-sm:basis-[100%]"
                  colors={true}
                />
              ))}
            </div>
          ) : (
            <Spinner divCss="self-center mb-6" svgCss="w-14 h-14" />
          )}
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
