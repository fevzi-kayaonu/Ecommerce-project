import { useEffect, useState } from "react";
import { AddressForm } from "../form/AddressForm";
import { AddressCart } from "./AddressCart";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../../store/actions/clientAction";

export const AddressContainer = () => {
  const [visibleForm, setVisibleForm] = useState(false);
  const { addressList } = useSelector((store) => store.client);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddress());
  }, []);

  const handleClick = (e) => {
    const name = e.target.name || e.target.getAttribute("data-name");
    console.log("name:adresscontainer", name);
    if (name === "addAddress") {
      setVisibleForm(!visibleForm);
    } else if (name === "exit" || name === "space") {
      setVisibleForm(false);
    }
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
        <div
          data-name="addAddress"
          className="flex flex-col justify-center items-center basis-[45%] mr-auto max-lg:m-auto aspect-[4/1] max-lg:aspect-[3/1] max-md:w-[85%] border-2 rounded-lg p-4"
          onClick={handleClick}
        >
          <button name="addAddress" className="text-5xl text-orange-500">
            +
          </button>
          <h6 className="text-base text-gray-500 font-bold">Yeni Adres Ekle</h6>
        </div>
        {addressList.map((address) => (
          <AddressCart key={address.id} address={address} />
        ))}
      </div>
      {visibleForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50 overflow-auto p-4">
          <div
            data-name="space"
            className="absolute inset-0 bg-black opacity-50"
            onClick={handleClick}
          ></div>
          <div className="relative bg-white p-8 rounded-lg shadow-md w-full max-w-2xl mx-auto my-8 ">
            <button
              name="exit"
              className="absolute top-4 right-4 text-gray-600 text-2xl"
              onClick={handleClick}
            >
              &times;
            </button>
            <AddressForm />
          </div>
        </div>
      )}
    </div>
  );
};
