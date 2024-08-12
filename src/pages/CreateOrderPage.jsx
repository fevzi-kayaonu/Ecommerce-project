import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AddressContainer } from "../components/order/AddressContainer";
import { CreditCardContainer } from "../components/order/CreditCardContainer";
import { postOrder } from "../store/actions/shoppingCartAction";
import Spinner from "../components/others/Spinner";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const totalPriceCalculate = (cart) => {
  return cart
    .reduce((accumulator, product) => {
      return accumulator + product.price * product.sell_count * 0.8;
    }, 0)
    .toFixed(2);
};

const CreateOrderPage = () => {
  const { cart, payment, orderAddress, loading } = useSelector(
    (store) => store.shoppingCart
  );
  const [totalPrice, setTotalPrice] = useState(() => totalPriceCalculate(cart));
  const [toggle, setToggle] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    setTotalPrice(totalPriceCalculate(cart));
  }, [cart]);

  const handleClick = (e) => {
    const name = e.target.name;

    if (name === "makePayment") {
      dispatch(postOrder(cart, payment, orderAddress, totalPrice, history));
    } else setToggle(!toggle);
  };

  const cargoPrice = 20;
  return (
    <section className="flex justify-center items-center py-10">
      <article className="flex justify-between  max-md:flex-col gap-2 basis-[85%]">
        <div className="w-full">
          <div className="flex text-2xl font-bold gap-2">
            <div
              className={`basis-1/2 aspect-[4/1] flex justify-center items-center border-2 ${toggle ? "border-b-8 border-b-primary text-primary" : "border-b-8 text-gray-500 bg-gray-200"} rounded-lg `}
              onClick={handleClick}
            >
              Address Information
            </div>
            <div
              className={`basis-1/2 aspect-[4/1] flex justify-center items-center border-2 rounded-lg ${toggle ? "border-b-8 text-gray-500 bg-gray-200" : "border-b-8 border-b-primary text-primary"}`}
              onClick={handleClick}
            >
              Payment Options
            </div>
          </div>
          <div className="flex items-baseline border-2 rounded-lg my-4 p-4 text-base">
            {toggle ? (
              <>
                <i className="fa-solid fa-circle-info text-primary mr-2"></i>
                <h6 className=" text-gray-600 font-bold">
                  To make a corporate purchase with an invoice, uncheck the
                  'Send my Invoice to the Same Address' option and select your
                  registered Corporate Invoice address as the billing address
                </h6>
              </>
            ) : (
              <div className="flex items-center">
                <i className="fa-regular fa-circle-dot text-primary text-2xl mx-3"></i>
                <div>
                  <h6 className="inline font-bold text-2xl">Pay with Card</h6>
                  <p>
                    You have chosen to pay by card. You can securely make your
                    payment using a bank or credit card.
                  </p>
                </div>
              </div>
            )}
          </div>
          {toggle ? <AddressContainer /> : <CreditCardContainer />}
        </div>
        <div className="min-w-[250px] max-lg:min-w-[200px] max-md:min-w-[250px]">
          <div className="border-2 border-gray-200 rounded-md p-4">
            <h1 className="pb-4 text-2xl max-lg:text-xl">Order Summary</h1>
            <div className="flex justify-between">
              <p className="max-lg:text-sm text-gray-400">Subtotal</p>
              <p className="font-bold"> ${totalPrice}</p>
            </div>
            <div className="flex justify-between max-lg:text-sm py-2">
              <p className="text-gray-400">Shipping Total</p>
              <p className="font-bold"> ${cargoPrice}</p>
            </div>
            <div className="flex justify-between border-b-2 pb-2 max-lg:text-sm">
              <p className="text-gray-400">
                Free Shipping on Orders Over $150 (Covered by Seller)
              </p>
              <br />
              <p className="text-primary max-lg:text-sm font-bold">
                -$ {totalPrice >= 150 ? cargoPrice : 0}
              </p>
            </div>
            <div className="flex justify-between max-lg:text-sm pt-2">
              <p className="text-gray-700">Total</p>
              <p className="text-primary font-bold">
                {totalPrice >= 150 ? totalPrice + cargoPrice : totalPrice}
              </p>
            </div>
          </div>
          {toggle ? (
            <button
              name="saveAndContinue"
              className="block w-full bg-primary text-white text-center border-[1px] hover:scale-105 hover:opacity-85 max-md:text-sm  border-gray-200   rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-orange-800"
              onClick={handleClick}
              disabled={loading}
            >
              Save and Continue
            </button>
          ) : (
            <button
              name="makePayment"
              className="block w-full bg-primary text-white text-center border-[1px] hover:scale-105 hover:opacity-85 max-md:text-sm  border-gray-200   rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-orange-800"
              onClick={handleClick}
              disabled={loading}
            >
              {loading ? <Spinner svgCss="w-5 h-5 m-auto" /> : "Make Payment"}
            </button>
          )}
        </div>
      </article>
    </section>
  );
};

export default CreateOrderPage;
