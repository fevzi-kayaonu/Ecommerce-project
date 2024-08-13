import { ProductCard } from "../product/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  setFilter,
  setLimit,
  setOffset,
  setSort,
} from "../../store/actions/productAction";
import { useEffect, useState } from "react";
import Spinner from "../others/Spinner";
import { useHistory, useLocation } from "react-router-dom";

const selectionSort = [
  { label: "Default", value: "" },
  { label: "Price Low to High", value: "price:asc" },
  { label: "Price High to Low", value: "price:desc" },
  { label: "Rating Low to High", value: "rating:asc" },
  { label: "Rating High to Low", value: "rating:desc" },
];

export const ProductsShop = () => {
  const { products, loading, filter, total, limit, offset, sort } = useSelector(
    (store) => store.product
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(Math.ceil(total / limit));
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(true);
  const [searchInput, setSearchInput] = useState(filter); // State for input value
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();

  const pageLimit = 5;

  useEffect(() => {
    console.log("giridm1");
    dispatch(setOffset(0));
    console.log("giridm2");
    setCurrentPage(1);

    const params = new URLSearchParams(location.search);
    const filterParam = params.get("filter") || "";
    const sortParam = params.get("sort") || selectionSort[0].value;

    const parts = location.pathname?.split("/");
    const category = parts.length >= 3 ? parts[4] : null;

    dispatch(setFilter(filterParam));
    dispatch(setSort(sortParam));
    console.log(
      "sortParam :",
      sortParam,
      "filterParam :",
      filterParam,
      "category :",
      category,
      "filter :",
      filter,
      " sort :",
      sort
    );
    dispatch(
      getProducts({
        category,
        sort: sortParam,
        filter: filterParam,
        limit: 12,
        updateLimit: true,
      })
    );
    setSearchInput(filterParam);
  }, [location]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (filter) {
      params.set("filter", filter);
    } else {
      params.delete("filter");
    }
    if (sort) {
      params.set("sort", sort);
    } else {
      params.delete("sort");
    }
    console.log(
      "girdim sort :",
      sort,
      "filter ",
      filter,
      " params :",
      params.toString()
    );

    history.replace({
      pathname: location.pathname,
      search: params.toString(),
    });
  }, [sort, filter]);

  useEffect(() => {
    setDisabledPrev(currentPage === 1);
    setDisabledNext(currentPage === totalPage);
  }, [currentPage, totalPage]);

  useEffect(() => {
    setTotalPage(Math.ceil(total / 12));
    setSort(selectionSort[0].value); //total değişimine bağlanmamalı ama sort değişiminede bağlanmıyor daha sonra düzelt.
  }, [total]);

  useEffect(() => {
    const parts = location.pathname?.split("/");
    const category = parts.length >= 3 ? parts.pop() : null;
    const needOffset = (currentPage - 1) * limit;

    const currentLimit =
      needOffset > offset
        ? needOffset - offset + limit
        : needOffset == offset
          ? limit
          : 0; //needOffset <offSet durumu 2 dal'a ayrılabilir.

    console.log("offSet :", offset);
    currentLimit != 0 &&
      dispatch(
        getProducts({
          category,
          sort,
          filter: filter,
          limit: currentLimit,
          offset: offset,
        })
      );
  }, [currentPage]);

  const handleClick = (e) => {
    const { name, value } = e.target;

    if (name === "search") {
      dispatch(setFilter(searchInput));
      setCurrentPage(1);
      dispatch(setOffset(0));
    } else if (name === "prev") {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    } else if (name === "next") {
      setCurrentPage((prev) => Math.min(prev + 1, totalPage));
    } else if (name === "page") {
      setCurrentPage(parseInt(value, 10));
    } else if (name === "jumpBack") {
      setCurrentPage((prev) => Math.max(prev - pageLimit, 1));
    } else if (name === "jumpForward") {
      setCurrentPage((prev) => Math.min(prev + pageLimit, totalPage));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "select") {
      dispatch(setSort(value));
    } else if (name === "filter") {
      setSearchInput(value);
    }
  };

  const getPaginationGroup = () => {
    const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit)
      .fill()
      .map((_, idx) => start + idx + 1)
      .filter((page) => page <= totalPage);
  };

  return (
    <main className="flex justify-center pb-20 pt-10 max-sm:py-10 max-md:pb-15">
      <div className="basis-[90%] flex flex-col text-center">
        <div className="flex max-md:flex-col justify-between max-md:justify-center px-10 items-center flex-wrap gap-10 pb-10">
          <h6 className="font-bold text-sm text-secondTextColor">
            Showing all {products.length} results
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
          <div className="flex max-sm:flex-col gap-4 max-sm:gap-8 max-lg:justify-self-end justify-center items-center ml-auto max-md:m-auto">
            <select
              className="bg-bgInput font-normal text-sm text-secondTextColor py-2 rounded-md pl-4 border-2 border-borderGray w-40"
              name="select"
              value={sort}
              onChange={handleChange}
            >
              {selectionSort.map((select, index) => (
                <option key={index} value={select.value}>
                  {select.label}
                </option>
              ))}
            </select>
            <div className="flex gap-1">
              <input
                type="text"
                name="filter"
                className="border border-[#DADADA] py-2 rounded-md bg-[#F5F5F5] text-black p-2 w-60 max-xl:w-40 max-md:w-30"
                placeholder="Search"
                onChange={handleChange}
                value={searchInput} // Bind input to searchInput state
              />
              <button
                name="search"
                className="font-bold text-sm text-white tracking-wider bg-primary px-6 py-3 rounded-md hover:opacity-70"
                onClick={handleClick}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        {total === 0 && !loading ? (
          <p className="font-bold text-4xl mt-10 text-center">
            Not found product
          </p>
        ) : (
          <>
            {!loading ? (
              <div className="flex flex-wrap mx-auto py-5 px-10 gap-[2.5%]">
                {products
                  ?.slice((currentPage - 1) * limit, currentPage * limit)
                  ?.map((item) => (
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
              <button
                name="prev"
                className={`basis-[33%] border-r-2 border-lightGray cursor-pointer ${!disabledPrev ? "hover:bg-primary hover:text-white" : ""}`}
                onClick={handleClick}
                disabled={disabledPrev}
              >
                Prev
              </button>
              {currentPage > pageLimit && (
                <button
                  name="jumpBack"
                  className={`basis-[22%] border-r-2 border-lightGray cursor-pointer ${!disabledPrev ? "hover:bg-primary hover:text-white" : ""}`}
                  onClick={handleClick}
                >
                  ...
                </button>
              )}
              {getPaginationGroup().map((pageNumber) => (
                <button
                  key={pageNumber}
                  name="page"
                  value={pageNumber}
                  className={`basis-[22%] border-r-2 border-lightGray cursor-pointer ${currentPage === pageNumber ? "bg-primary text-white" : ""} ${!disabledPrev ? "hover:bg-primary hover:text-white" : ""}`}
                  onClick={handleClick}
                >
                  {pageNumber}
                </button>
              ))}
              {totalPage > pageLimit &&
                currentPage <= totalPage - pageLimit && (
                  <button
                    name="jumpForward"
                    className={`basis-[22%] border-r-2 border-lightGray cursor-pointer ${!disabledNext ? "hover:bg-primary hover:text-white" : ""}`}
                    onClick={handleClick}
                  >
                    ...
                  </button>
                )}
              <button
                name="next"
                className={`basis-[33%] cursor-pointer ${!disabledNext ? "hover:bg-primary hover:text-white" : ""}`}
                onClick={handleClick}
                disabled={disabledNext}
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};
