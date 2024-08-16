import { useSelector } from "react-redux";
import ShoppingBasketCart from "../components/shop/ShoppingBasketCart";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ShoppingCartPage = () => {
  const cart = useSelector((store) => store.shoppingCart.cart);

  const totalPriceCalculate = () => {
    return cart
      .reduce((accumulator, product) => {
        return accumulator + product.price * product.sell_count * 0.8;
      }, 0)
      .toFixed(2);
  };
  const [totalPrice, setTotalPrice] = useState(() => totalPriceCalculate());
  console.log("cart: ", cart);

  useEffect(() => {
    setTotalPrice(totalPriceCalculate());
  }, [cart]);

  useEffect(() => {
    setTotalPrice(totalPriceCalculate());
  }, []);

  const cargoPrice = 20;

  return (
    <section className="flex justify-center items-center py-10">
      <div className="basis-[85%] gap-2 flex flex-wrap">
        <p className="px-5 py-3 font-bold pl-0 basis-[100%]">
          My Cart ({cart.length} items)
        </p>
        <div className="basis-[67%] max-lg:basis-[100%]">
          <div className="flex max-md:flex-col gap-5 max-lg:gap-1 justify-between max-md:items-center">
            <div className="">
              {cart?.map((product) => (
                <ShoppingBasketCart key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
        <div className="basis-[30%] min-w-[250px] max-lg:basis-[100%]">
          <div className="border-2 border-gray-200 rounded-md p-4">
            <h1 className="pb-4 text-2xl max-lg:text-xl">Order Summary</h1>
            <div className="flex justify-between">
              <p className="max-lg:text-sm text-gray-400">Product Total</p>
              <p className="font-bold"> ${totalPrice}</p>
            </div>
            <div className="flex justify-between max-lg:text-sm py-2">
              <p className="text-gray-400">Shipping Cost</p>
              <p className="font-bold"> ${cargoPrice}</p>
            </div>
            <div className="flex justify-between border-b-2 pb-2 max-lg:text-sm">
              <p className="text-gray-400">
                Free Shipping on Orders Over $150 <br /> (Seller Covers)
              </p>
              <p className="text-primary max-lg:text-sm font-bold">
                -$ {totalPrice >= 150 ? cargoPrice : 0}
              </p>
            </div>
            <div className="flex justify-between max-lg:text-sm pt-2">
              <p className="text-gray-700">Total</p>
              <p className="text-primary font-bold">
                ${" "}
                {totalPrice > 150
                  ? totalPrice
                  : (parseFloat(totalPrice) + parseFloat(cargoPrice)).toFixed(
                      2
                    )}
              </p>
            </div>
          </div>
          <button className="  w-full text-sm border-2 border-gray-200 rounded-md py-2 px-5 my-2 focus:outline-none focus:ring-2 focus:ring-orange-800">
            <p className="inline-block text-xl font-bold text-primary pr-2">
              +
            </p>
            ENTER DISCOUNT CODE
          </button>
          <Link
            to="create-order"
            className="block basis-1/2 bg-primary text-center border-[1px] hover:scale-105 max-md:text-sm hover:opacity-85 border-gray-200  text-white rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-orange-800"
          >
            Complete Order
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ShoppingCartPage;
