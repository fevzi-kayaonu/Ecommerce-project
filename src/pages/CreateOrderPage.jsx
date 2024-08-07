import { useSelector } from "react-redux";
import ShoppingBasketCart from "../components/shop/ShoppingBasketCart";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { AddressContainer } from "../components/order/AddressContainer";

const CreateOrderPage = () => {
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

  const cargoPrice = 20;
  return (
    <section className="flex justify-center items-center py-10">
      <article className="flex  max-md:flex-col gap-2 basis-[85%]">
        <div className="">
          <div className="flex text-2xl font-bold gap-2">
            <div className="basis-1/2 aspect-[4/1] flex justify-center items-center border-2 border-b-8 border-b-orange-500 rounded-lg text-orange-500">
              Adres Bilgileri
            </div>
            <div className="basis-1/2 aspect-[4/1] flex justify-center items-center border-2 border-b-8 rounded-lg text-gray-500 bg-gray-200">
              Ödeme Seçenekleri
            </div>
          </div>
          <div className="flex items-baseline border-2 rounded-lg my-4 p-4 text-base">
            <i className="fa-solid fa-circle-info text-orange-500 mr-2"></i>
            <h6 className=" text-gray-600 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae in
              ratione repudiandae, itaque eos blanditiis dolore velit? Ut
              officia iusto, eius mollitia necessitatib
            </h6>
          </div>
          <AddressContainer />
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
          <button className="  w-full text-sm border-2 border-gray-200 rounded-md py-2 px-5 my-2">
            <p className="inline-block text-xl font-bold text-orange-500 pr-2">
              +
            </p>
            İNDİRİM KODU GİR
          </button>
          <Link className="block basis-1/2 bg-orange-500 text-center border-[1px] hover:scale-105 max-md:text-sm hover:opacity-85 border-gray-200  text-white rounded-md py-2">
            Siparişi Tamamla
          </Link>
        </div>
      </article>
    </section>
  );
};

export default CreateOrderPage;
