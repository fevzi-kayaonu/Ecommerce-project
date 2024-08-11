import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { AddressContainer } from "../components/order/AddressContainer";
import { CreditCardContainer } from "../components/order/CreditCardContainer";
import { postOrder } from "../store/actions/shoppingCartAction";

const CreateOrderPage = () => {
  const { cart, payment, orderAddress } = useSelector(
    (store) => store.shoppingCart
  );

  const [toggle, setToggle] = useState(true);

  const dispatch = useDispatch();

  const totalPriceCalculate = () => {
    return cart
      .reduce((accumulator, product) => {
        return accumulator + product.price * product.sell_count * 0.8;
      }, 0)
      .toFixed(2);
  };
  const [totalPrice, setTotalPrice] = useState(() => totalPriceCalculate());

  useEffect(() => {
    setTotalPrice(totalPriceCalculate());
  }, [cart]);

  const handleClick = (e) => {
    const name = e.target.name;

    if (name === "makePayment") {
      dispatch(postOrder(cart, payment, orderAddress, totalPrice));
    } else setToggle(!toggle);
  };

  const cargoPrice = 20;
  return (
    <section className="flex justify-center items-center py-10">
      <article className="flex justify-between  max-md:flex-col gap-2 basis-[85%]">
        <div className="w-full">
          <div className="flex text-2xl font-bold gap-2">
            <div
              className={`basis-1/2 aspect-[4/1] flex justify-center items-center border-2 ${toggle ? "border-b-8 border-b-orange-500 text-orange-500" : "border-b-8 text-gray-500 bg-gray-200"} rounded-lg `}
              onClick={handleClick}
            >
              Adres Bilgileri
            </div>
            <div
              className={`basis-1/2 aspect-[4/1] flex justify-center items-center border-2 rounded-lg ${toggle ? "border-b-8 text-gray-500 bg-gray-200" : "border-b-8 border-b-orange-500 text-orange-500"}`}
              onClick={handleClick}
            >
              Ödeme Seçenekleri
            </div>
          </div>
          <div className="flex items-baseline border-2 rounded-lg my-4 p-4 text-base">
            {toggle ? (
              <>
                <i className="fa-solid fa-circle-info text-orange-500 mr-2"></i>
                <h6 className=" text-gray-600 font-bold">
                  Kurumsal faturalı alışveriş yapmak için "Faturamı Aynı Adrese
                  Gönder" tikini kaldırın ve Fatura adresi olarak kayıtlı
                  Kurumsal Fatura adresinizi seçin.
                </h6>
              </>
            ) : (
              <div className="flex items-center">
                <i className="fa-regular fa-circle-dot text-orange-600 text-2xl mx-3"></i>
                <div>
                  <h6 className="inline font-bold text-2xl">Kart ile öde</h6>
                  <p>
                    Kart ile ödemeyi seçtiniz. Banka veya kredi kartı kullanarak
                    ödemenizi güvenle yapabilirsiniz.
                  </p>
                </div>
              </div>
            )}
          </div>
          {toggle ? <AddressContainer /> : <CreditCardContainer />}
        </div>
        <div className="min-w-[250px] max-lg:min-w-[200px] max-md:min-w-[250px]">
          <div className="border-2 border-gray-200 rounded-md p-4">
            <h1 className="pb-4 text-2xl max-lg:text-xl">Sipariş Özeti</h1>
            <div className="flex justify-between">
              <p className="max-lg:text-sm text-gray-400">Ürün Toplamı</p>
              <p className="font-bold"> ${totalPrice}</p>
            </div>
            <div className="flex justify-between max-lg:text-sm py-2">
              <p className="text-gray-400">Kargo Toplam</p>
              <p className="font-bold"> ${cargoPrice}</p>
            </div>
            <div className="flex justify-between border-b-2 pb-2 max-lg:text-sm">
              <p className="text-gray-400">
                150 $ ve Üzeri <br /> Kargo Bedava(Satıcı Karşılar)
              </p>
              <p className="text-orange-500 max-lg:text-sm font-bold">
                -$ {totalPrice >= 150 ? cargoPrice : 0}
              </p>
            </div>
            <div className="flex justify-between max-lg:text-sm pt-2">
              <p className="text-gray-700">Toplam</p>
              <p className="text-orange-500 font-bold">
                {totalPrice >= 150 ? totalPrice + cargoPrice : totalPrice}
              </p>
            </div>
          </div>
          {toggle ? (
            <button
              name="saveAndContinue"
              className="block w-full bg-orange-500 text-white text-center border-[1px] hover:scale-105 hover:opacity-85 max-md:text-sm  border-gray-200   rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-orange-800"
              onClick={handleClick}
            >
              Kaydet ve Devam Et
            </button>
          ) : (
            <button
              name="makePayment"
              className="block w-full bg-orange-500 text-white text-center border-[1px] hover:scale-105 hover:opacity-85 max-md:text-sm  border-gray-200   rounded-md py-2 focus:outline-none focus:ring-2 focus:ring-orange-800"
              onClick={handleClick}
            >
              Ödeme Yap
            </button>
          )}
        </div>
      </article>
    </section>
  );
};

export default CreateOrderPage;
