import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../store/actions/globalAction";
import { useEffect } from "react";
import Spinner from "../others/Spinner";

export const ShopContainer = () => {
  const { categories, loading } = useSelector((store) => store.global);

  return (
    <>
      <section className="flex justify-center bg-bgGray py-4">
        <div className="flex flex-col justify-center basis-[85%] gap-4 pb-6">
          <div className="flex max-md:flex-col justify-between items-center px-4">
            <h3 className="font-bold text-2xl">Shop</h3>

            <div className="py-5">
              <Link className="font-bold text-sm hover:underline" to="/">
                Home
              </Link>
              <i className="fa-solid fa-chevron-right m-2 text-muted"></i>
              <Link
                className="font-bold text-sm text-muted hover:underline"
                to="/shop"
              >
                Shop
              </Link>
            </div>
          </div>
          <div className="flex justify-center max-lg:justify-center flex-wrap gap-4">
            {!loading /* ?.sort((a, b) => a.rating - b.rating)?.slice(0, 5) */ ? (
              categories
                ?.filter((item) => item.id <= 5)
                ?.map((category) => (
                  <Link
                    to={`/shop/${
                      category.gender === "k"
                        ? `kadin/${category.code.slice(2)}/${category.id}`
                        : `erkek/${category.code.slice(2)}/${category.id}`
                    }`}
                    key={category.id}
                    className="relative basis-[18%] max-lg:basis-[30%] max-md:basis-[45%] max-sm:basis-[85%] aspect-[1/1.1] max-md:aspect-[1.1/1] hover:scale-105 hover:shadow-sm hover:opacity-75"
                  >
                    <img
                      className="w-full h-full object-cover"
                      src={category.img}
                      alt={category.title ? `${category.title}` : "Shop image"}
                    />
                    <div className="absolute flex flex-col bottom-[50%] translate-y-[50%] left-[50%] translate-x-[-50%] text-white text-center">
                      <h3 className="font-bold text-base">
                        {category?.title.toUpperCase()}
                      </h3>
                      <p className="font-normal text-sm">{category.rating}</p>
                    </div>
                  </Link>
                ))
            ) : (
              <Spinner svgCss="w-12 h-12" />
            )}
          </div>
        </div>
      </section>
    </>
  );
};
