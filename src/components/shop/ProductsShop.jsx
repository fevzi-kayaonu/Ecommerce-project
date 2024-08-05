import { ProductCard } from "../product/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, setFilter } from "../../store/actions/productAction";
import { useEffect, useState } from "react";
import Spinner from "../others/Spinner";
import { useLocation } from "react-router-dom";

const selectionSort = [
  { label: "Default", value: "" },
  { label: "Price Low to High", value: "price:asc" },
  { label: "Price High to Low", value: "price:desc" },
  { label: "Rating Low to High", value: "rating:asc" },
  { label: "Rating High to Low", value: "rating:desc" },
];

export const ProductsShop = () => {
  const { products, loading, filter } = useSelector((store) => store.product);
  const [sort, setSort] = useState(selectionSort[0].value);
  const location = useLocation();
  const dispatch = useDispatch();
  console.log("products: ", products);

  /*   useEffect(() => {
    if (location.pathname === "/shop") dispatch(getProducts());
    else dispatch(getProducts(location.pathname));
  }, [dispatch, location.pathname, filter]);
 */
  useEffect(() => {
    const parts = location.pathname?.split("/");
    const category = parts.length >= 3 ? parts.pop() : null;

    dispatch(
      getProducts({ category: category, sort: sort, filter: filter, limit: 12 })
    );
  }, [dispatch, location.pathname, sort, filter]);

  /*   useEffect(() => {
    if (location.pathname === "/shop") setIteratableProduct([...products]);
  }, [location.pathname]);
 */
  const handleClick = () => {
    /*  //selectionFilterın default olma durumunu ayarlıcaksın
    /*    const type = selectionFilter < 2 ? "price" : "rating";
    const newProducts = iteratableProduct?.sort((a, b) => {
      selectionFilter % 2 === 0 ? a[type] - b[type] : b[type] - a[type];
    }); */
    /*  setIteratableProduct([...newProducts]); 

    dispatch(setFilter(selectionFilter));*/
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    if (name === "select") setSort(value);
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
            <div className="flex gap-[15px] max-lg:justify-self-end justify-center items-center">
              <select
                className="bg-bgInput font-normal text-sm text-secondTextColor py-2 rounded-md pl-4 border-2 border-borderGray w-40 "
                name="select"
                value={sort}
                onChange={(e) => handleChange(e)}
              >
                {selectionSort.map((select, index) => (
                  <>
                    <option key={index} value={select.value}>
                      {select.label}
                    </option>
                  </>
                ))}
              </select>
              <div>
                <input
                  type="text"
                  name="filter"
                  className="border border-[#DADADA] py-2 rounded-md bg-[#F5F5F5] text-black p-2 w-60 max-xl:w-40 max-md:w-30"
                  placeholder="Search"
                  onChange={handleChange}
                  value={filter}
                ></input>
                {/*                 <button onClick={cleanFilter}>
                  <i className="fa-solid fa-x"></i>
                </button> */}
              </div>

              <button
                className="font-bold text-sm text-white tracking-wider bg-primary px-6 py-3 rounded-md hover:opacity-70"
                onClick={handleClick}
              >
                Search
              </button>
            </div>
          </div>
          {!loading ? (
            <div className="flex flex-wrap mx-auto py-5 px-10 gap-[2.5%]">
              {products?.map((item) => (
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
