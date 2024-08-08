import React from "react";

export const AddressCart = ({ address }) => {
  return (
    <div className="basis-[45%] mr-auto max-lg:m-auto  bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <i className="fa-solid fa-user  text-2xl max-xl:text-lg max-lg:text-2xl text-orange-500"></i>
            <h2 className="text-gray-800 text-base max-xl:text-sm max-lg:text-base font-semibold ml-2 mr-2">
              {address.name + " " + address.surname}
            </h2>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-mobile-screen text-gray-600 text-2xl max-xl:text-lg max-lg:text-2xl"></i>
            <span className="text-gray-800 text-base max-xl:text-sm  max-lg:text-base font-semibold ml-2">
              {address.phone}
            </span>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-600">{address.title}</p>
          <p className="text-gray-600">
            {(address.neighborhood, address.city + "/" + address.district)}
          </p>
        </div>
      </div>
    </div>
  );
};
