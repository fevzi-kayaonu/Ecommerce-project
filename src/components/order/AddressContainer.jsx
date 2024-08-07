import { useState } from "react";
import { AddressForm } from "../form/AddressForm";
import { AddressCart } from "./AddressCart";

export const AddressContainer = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleClose = () => {
    setToggle(false);
  };

  return (
    <div className="border-2 rounded-lg px-4 py-6">
      <div className="flex justify-between mb-8">
        <h6 className="text-lg text-gray-600 font-bold">Teslimat Adresi</h6>
        <h6 className="text-base text-gray-400">
          <i className="fa-solid fa-square-check text-orange-500 text-lg mr-2"></i>
          Faturamı Aynı Adrese Gönder
        </h6>
      </div>
      <div className="flex gap-4 flex-wrap max-lg:flex-col">
        <div className="flex justify-center items-center basis-[45%] m-auto aspect-[4/1] max-lg:aspect-[3/1] max-md:w-[85%] border-2 rounded-lg p-4">
          <div className="text-center" onClick={handleClick}>
            <button className="text-5xl text-orange-500">+</button>
            <h6 className="text-base text-gray-500 font-bold">
              Yeni Adres Ekle
            </h6>
          </div>
        </div>
        <AddressCart />
        <AddressCart />
        <AddressCart />
        <AddressCart />
        <AddressCart />
      </div>
      {toggle && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleClose}
          ></div>
          <div className="relative bg-white p-8 rounded-lg shadow-md z-50">
            <AddressForm />
          </div>
        </div>
      )}
    </div>
  );
};
