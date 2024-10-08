import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import ShoppingCart from "./ShoppingCart";
import { useEffect, useState } from "react";

function ShoppingCartDropDown({ handleClickShop, handleClose }) {
  const cart = useSelector((store) => store.shoppingCart.cart);
  const [disabled, setDisabled] = useState(cart.length > 0);

  useEffect(() => {
    if (cart.length <= 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [cart]);

  const handleClick = () => {
    handleClickShop();
  };

  return (
    <div className="flex text-black flex-col bg-white border-2 border-gray-300 rounded-xl w-[350px] max-sm:w-[300px]">
      <p className="px-5 py-3 font-bold">MyBasket ({cart.length} product)</p>
      <div className="flex flex-col gap-2 max-h-[400px] overflow-y-auto">
        {cart?.map((product) => (
          <ShoppingCart key={product.id} product={product} />
        ))}
      </div>
      <div
        className="px-5 py-4 flex justify-between gap-2"
        onClick={handleClick}
      >
        <Link
          to={!disabled ? "#" : "/shopping-cart"}
          className={`basis-1/2 text-center ${disabled ? "hover:bg-primary  hover:text-white" : ""} text-base max-md:text-sm border-[1px] bg-gray-100 border-gray-200 rounded-md py-2`}
          onClick={handleClose}
        >
          Go to Cart
        </Link>
        <Link
          to={!disabled ? "#" : "/create-order"}
          className={`basis-1/2 bg-primary text-center border-[1px] ${disabled ? "hover:scale-105 hover:opacity-85 " : ""}   text-base max-md:text-sm  border-gray-200  text-white rounded-md py-2`}
          onClick={handleClose}
        >
          Complete Order
        </Link>
      </div>
    </div>
  );
}

export default ShoppingCartDropDown;
