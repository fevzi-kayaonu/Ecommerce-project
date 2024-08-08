import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/actions/shoppingCartAction";
import { getProductById } from "../../store/actions/productAction";

export const ProductDetail = () => {
  const location = useLocation();
  const productId = location.pathname?.split("/").pop();
  const [activeIndex, setActiveIndex] = useState(0);
  const { products } = useSelector((store) => store.product);
  const [product, setProduct] = useState(() =>
    products?.find((product) => product.id == productId)
  );

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (!product) {
      dispatch(getProductById(productId));
    }
  }, []);

  useEffect(() => {
    setProduct(products?.find((product) => product.id == productId));
  }, [products]);

  const handleClick = (e) => {
    const name = e.target.name;

    if (name === "prev") {
      setActiveIndex(
        activeIndex <= 0 ? product.images.length - 1 : activeIndex - 1
      );
    } else if (name === "next") {
      setActiveIndex(
        activeIndex >= product.images.length - 1 ? 0 : activeIndex + 1
      );
    } else if (name === "back") {
      history.goBack();
    } else if (name === "basket") {
      dispatch(addToCart({ ...product }));
    } else {
      console.log(e.target.dataset.value + "girdim");
      setActiveIndex(Number(e.currentTarget.dataset.value));
    }
  };

  return (
    <>
      <section className="flex justify-center bg-bgGray py-16">
        <article className="basis-[85%]">
          <button className="text-xl" name="back" onClick={handleClick}>
            {"<"} Back
          </button>
          <div className="py-5 px-5">
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
          <section className="flex max-md:flex-col justify-between gap-5">
            <article className="basis-[48%]">
              <div className="relative aspect-[1.1/1] pb-5">
                <img
                  src={product.images[activeIndex].url}
                  alt="detail.jpg"
                  className="w-full h-full object-contain"
                />
                <button
                  name="next"
                  className="bg-transparent text-yellow active:text-black text-6xl absolute right-[8%] top-[50%] hover:opacity-75"
                  onClick={handleClick}
                >
                  {">"}
                </button>
                <button
                  name="prev"
                  className="bg-transparent text-yellow active:text-black text-6xl absolute left-[8%] top-[50%] hover:opacity-75"
                  onClick={handleClick}
                >
                  {"<"}
                </button>
              </div>
              <div className="flex gap-[3%]">
                {product.images.map((item, index) => (
                  <div
                    name="direct"
                    data-value={index}
                    className="basis-[20%] aspect-[1/0.75]"
                    key={index}
                    onClick={handleClick}
                  >
                    <img
                      src={item.url}
                      alt="detail.jpg"
                      className={`w-full h-full object-cover ${index == activeIndex ? "opacity-20" : null}`}
                    />
                  </div>
                ))}
              </div>
            </article>
            <article className="flex flex-col justify-between basis-[48%] aspect-[1.1/1] max-md:aspect-[4/3] max-sm:aspect-[1/1.1] pb-[10.5%] max-lg:pb-[2%]">
              <h4 className="text-xl">{product.name}</h4>
              <div className="flex gap-1">
                <i className="fa-solid fa-star text-yellow text-sm max-sm:text-base"></i>
                <i className="fa-solid fa-star text-yellow text-sm max-sm:text-base"></i>
                <i className="fa-solid fa-star text-yellow text-sm max-sm:text-base"></i>
                <i className="fa-solid fa-star text-yellow text-sm max-sm:text-base"></i>
                <i className="fa-solid fa-star text-yellow text-sm max-sm:text-base"></i>
                <p className="text-sm font-bold text-secondTextColor">
                  10 Reviews
                </p>
              </div>
              <div className="flex justify-center text-2xl font-bold tracking-wide gap-2 mr-auto">
                <p className="text-secondTextColor">${product.price}</p>
                <p className="text-secondary">
                  ${(product.price * 0.8).toFixed(2)}
                </p>
              </div>
              <div className="flex">
                <p className="text-sm font-bold text-secondTextColor">
                  Availability :
                </p>
                <p className="text-sm font-bold text-primary">In Stock </p>
              </div>
              <p className="text-xl text-secondTextColor">
                {product.description}
              </p>
              <hr />
              <div className="flex gap-3">
                <div className="bg-primary w-[26px] h-[26px] rounded-full"></div>
                <div className="bg-secondary w-[26px] h-[26px] rounded-full"></div>
                <div className="bg-alert w-[26px] h-[26px] rounded-full"></div>
                <div className="bg-black w-[26px] h-[26px] rounded-full"></div>
              </div>
              <div className="flex gap-4">
                <button
                  name="basket"
                  className="text-sm font-bold bg-primary text-white rounded-md px-6 hover:opacity-75"
                  onClick={handleClick}
                >
                  Sepete ekle
                </button>
                <div className="flex justify-center gap-4 text-xl max-xl:text-sm max-lg:text-xs max-sm:text-2xl">
                  <div className="bg-white rounded-full p-2">
                    <i className="fa-regular fa-heart hover:opacity-45"></i>
                  </div>
                  <div className="bg-white rounded-full p-2">
                    <i className="fa-solid fa-cart-shopping hover:opacity-45"></i>
                  </div>
                  <div className="bg-white rounded-full p-2">
                    <i className="fa-solid fa-eye hover:opacity-45"></i>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </article>
      </section>
    </>
  );
};
