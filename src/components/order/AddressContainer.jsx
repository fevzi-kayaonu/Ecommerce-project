import { useEffect, useState } from "react";
import { AddressForm } from "../form/AddressForm";
import { AddressCart } from "./AddressCart";
import { useDispatch, useSelector } from "react-redux";
import { deleteAddress, getAddress } from "../../store/actions/clientAction";
import { setOrderAddress } from "../../store/actions/shoppingCartAction";

export const AddressContainer = () => {
  const [visibleForm, setVisibleForm] = useState(false);
  const { addressList } = useSelector((store) => store.client);
  const [editId, setEditId] = useState(undefined);
  const orderAddress = useSelector((store) => store.shoppingCart.orderAddress);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAddress());
  }, []);

  useEffect(() => {
    if (!orderAddress.id)
      dispatch(setOrderAddress(addressList[0] ? addressList[0] : {}));
  }, [addressList]);

  const handleClick = (e) => {
    const name = e.target.name || e.target.getAttribute("data-name");
    if (name === "addAddress") {
      setVisibleForm(!visibleForm);
    } else if (name === "exit" || name === "space" || name === "submit") {
      setVisibleForm(false);
      setEditId(undefined); // bunu sor setvisibladaki değişim için useffect ayarlanabilir ya da bu şekilde kalabilir asenkronluk çalışmayı etkilemiyor
    } else if (name === "onEdit") {
      const id = e.target.value;
      setEditId(id);
    } else if (name === "onDelete") {
      const id = e.target.value;
      dispatch(deleteAddress(id));
    } else if (name === "selectAddress") {
      const address = e.target.address;
      dispatch(setOrderAddress(address));
    }
  };

  useEffect(() => {
    if (editId) setVisibleForm(true);
  }, [editId]);

  console.log(orderAddress);
  return (
    <div className="border-2 rounded-lg px-4 py-6">
      <div className="flex justify-between mb-8">
        <h6 className="text-lg text-gray-600 font-bold">Shipping Address</h6>
        <h6 className="text-base text-gray-400">
          <i className="fa-solid fa-square-check text-primary text-lg mr-2"></i>
          Send My Invoice to the Same Address
        </h6>
      </div>
      <div className="flex justify-between gap-4 flex-wrap max-lg:flex-col">
        <div
          data-name="addAddress"
          className="flex flex-col justify-center items-center basis-[48%] max-lg:m-auto aspect-[4/1] max-lg:aspect-[3/1] max-md:w-[85%] border-2 rounded-lg p-4"
          onClick={handleClick}
        >
          <button name="addAddress" className="text-5xl text-primary">
            +
          </button>
          <h6
            data-name="addAddress"
            className="text-base text-gray-500 font-bold"
          >
            Add New Address
          </h6>
        </div>
        {addressList.map((address) => (
          <AddressCart
            key={address.id}
            address={address}
            handleClick={handleClick}
            isSelected={address.id === orderAddress.id}
          />
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
            <AddressForm addressId={editId} handleClick={handleClick} />
          </div>
        </div>
      )}
    </div>
  );
};
