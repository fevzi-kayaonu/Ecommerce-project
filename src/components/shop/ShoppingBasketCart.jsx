import { useDispatch } from "react-redux";
import {
  addToCart,
  decrementToCart,
  removeToCart,
} from "../../store/actions/shoppingCartAction";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ShoppingBasketCart({ product }) {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const name = e.target.name;

    if (name === "increment") {
      dispatch(addToCart({ ...product }));
    } else if (name === "decrement") {
      dispatch(decrementToCart(product.id));
    } else {
      dispatch(removeToCart(product.id));
    }
  };
  return (
    <div className="border-2 border-gray-200 rounded-md mb-2">
      <div className="flex justify-between bg-gray-100 py-2 px-4 flex-wrap gap-2">
        <div className="max-lg:text-sm">
          Seller: Workintech{" "}
          <span className="font-bold bg-green-500 text-white p-1 mx-2 rounded-sm">
            9.7
          </span>{" "}
          {">"}
          <p className="inline-block text-sm border-[1px] border-primary text-primary px-2 py-1 mx-3 rounded-sm">
            Institutional
            <i className="fa-solid fa-circle-info ml-1"></i>
          </p>
        </div>
        <div className="flex gap-4 bg-orange-100 items-center px-2 border-[1px] border-gray-200 rounded-lg max-sm:text-xs">
          <p className="text-black">
            <i className="fa-solid fa-ticket text-orange-400 px-2"></i>$40
            discount for 3 pieces and above
          </p>
          <Link
            to="/shop"
            className="text-orange-600 hover:underline hover:opacity-75"
          >
            All Products {">"}
          </Link>
        </div>
      </div>
      <div className="text-center bg-green-200  py-2">
        <h5 className="text-black">
          {" "}
          <i className="fa-solid fa-cube text-green-500 max-lg:text-sm"></i>{" "}
          Free Shipping !
        </h5>
      </div>
      <div className="flex gap-3 justify-between  py-4 px-6 items-center">
        <picture className="basis-[20%] w-full aspect-[1/1.3]">
          <img
            src={product.images[0].url}
            alt="ProductImg"
            className="w-full h-full object-cover rounded-lg min-w-[100px] max-sm:min-w-[80px]"
          />
        </picture>
        <div className="flex max-lg:flex-col gap-3 basis-[80%] items-center">
          <div className=" flex flex-col gap-3 max-xl:gap-1 basis-[55%]">
            <p className="tracking-wider  line-clamp-2 max-xl:line-clamp-1 break-words max-lg:text-sm">
              <span className="font-bold ">{product.name}</span>{" "}
              {product.description}
            </p>
            <p className="max-lg:text-sm">Body : 38</p>
            <p className="max-lg:text-sm">
              {" "}
              <i className="fa-solid fa-truck text-green-500"></i> If you order
              within 39 minutes, it will be shipped tomorrow at the latest.
            </p>
          </div>

          <div className=" flex justify-around gap-2 basis-[45%] items-center max-lg:gap-10 max-md:gap-5">
            <div className="text-base flex items-center justify-between border border-gray-300 rounded-md ">
              <button
                name="decrement"
                className="text-lg max-lg:text-sm bg-gray-100 text-gray-400 px-4 max-lg:px-3 py-2 max-lg:py-1 border-r-2 border-gray-300 hover:scale-110 rounded-l-md"
                onClick={handleClick}
              >
                -
              </button>
              <p className="px-4 max-sm:px-3 max-lg:text-sm ">
                {product.sell_count}
              </p>
              <button
                name="increment"
                className="text-lg max-lg:text-sm bg-gray-100 text-primary px-4 max-lg:px-3 py-2 max-lg:py-1 border-l-2 border-gray-300 hover:scale-110 rounded-r-md"
                onClick={handleClick}
              >
                +
              </button>
            </div>
            <p className="text-primary font-bold text-center text-xl max-sm:text-base">
              ${(product.price * product.sell_count * 0.8).toFixed(2)}
            </p>
            <i
              name="delete"
              className="fa-regular fa-trash-can text-xl max-sm:text-base text-gray-500 hover:scale-110 "
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingBasketCart;
