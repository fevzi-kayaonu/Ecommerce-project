import React from "react";

export const AddressCart = ({ address, handleClick, isSelected }) => {
  console.log(isSelected);
  return (
    <div
      className={`basis-[48%] max-lg:w-[80%] max-md:w-[98%] max-lg:m-auto bg-white shadow-lg rounded-lg overflow-hidden border-2 
                      ${isSelected ? " border-orange-500" : "border-gray-300"} cursor-pointer`}
      onClick={() =>
        handleClick({
          target: { name: "selectAddress", address: { ...address } },
        })
      }
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <i className="fa-solid fa-user text-2xl max-xl:text-lg max-lg:text-2xl text-orange-500"></i>
            <h2 className="text-gray-800 text-base max-xl:text-sm max-lg:text-base font-semibold ml-2 mr-2">
              {address.name + " " + address.surname}
            </h2>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-mobile-screen text-gray-600 text-2xl max-xl:text-lg max-lg:text-2xl"></i>
            <span className="text-gray-800 text-base max-xl:text-sm max-lg:text-base font-semibold ml-2">
              {address.phone}
            </span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">{address.title}</p>
          <p className="text-gray-600">
            {address.neighborhood +
              ", " +
              address.city +
              "/" +
              address.district}
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <button
            name="onEdit"
            value={address.id}
            className="text-blue-500 hover:text-blue-700 font-semibold mr-4 hover:scale-110 hover:underline"
            onClick={handleClick}
          >
            Düzenle
          </button>
          <button
            name="onDelete"
            value={address.id}
            className="text-red-500 hover:text-red-700 font-semibold hover:underline"
            onClick={handleClick}
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  );
};
