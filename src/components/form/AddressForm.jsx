import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editAddress, postAddress } from "../../store/actions/clientAction";
import { districts, cities } from "../../util/countries";
import Spinner from "../others/Spinner";

const formData = {
  title: "",
  name: "",
  surname: "",
  phone: "",
  city: "",
  district: "",
  neighborhood: "",
};

export const AddressForm = ({ addressId, handleClick }) => {
  const address = useSelector((store) =>
    store.client.addressList.find((address) => address.id === Number(addressId))
  );

  const loading = useSelector((store) => store.client.loading.local);

  console.log("loading : ", loading);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: address ? address : formData,
    mode: "onChange",
  });

  const dispatch = useDispatch();
  const selectedCity = watch("city");

  const onSubmit = (data) => {
    address ? dispatch(editAddress(data)) : dispatch(postAddress(data));
    handleClick({ target: { name: "submit" } });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto max-h-[800px] overflow-auto max-md:max-h-[700px] max-sm:max-h-[500px]">
      <h1 className="text-2xl font-bold mb-6">Address Information Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Address Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Address title is required." })}
            className={`w-full px-3 py-2 border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Address Title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Name is required.",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters.",
              },
            })}
            className={`w-full px-3 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="surname"
            className="block text-gray-700 font-medium mb-2"
          >
            Surname
          </label>
          <input
            type="text"
            id="surname"
            {...register("surname", {
              required: "Surname is required.",
              minLength: {
                value: 2,
                message: "Surname must be at least 2 characters.",
              },
            })}
            className={`w-full px-3 py-2 border ${
              errors.surname ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Surname"
          />
          {errors.surname && (
            <p className="text-red-500 text-sm mt-1">
              {errors.surname.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-medium mb-2"
          >
            Phone
          </label>
          <input
            type="text"
            id="phone"
            {...register("phone", {
              required: "Phone number is required.",
              pattern: {
                value: /^[0-9]{10,11}$/,
                message: "Phone number must be 10-11 digits.",
              },
            })}
            className={`w-full px-3 py-2 border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Phone"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-gray-700 font-medium mb-2"
          >
            City
          </label>
          <select
            id="city"
            {...register("city", { required: "City selection is required." })}
            className={`w-full px-3 py-2 border ${
              errors.city ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="">Select City</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="district"
            className="block text-gray-700 font-medium mb-2"
          >
            District
          </label>
          <select
            id="district"
            {...register("district", {
              required: "District selection is required.",
            })}
            className={`w-full px-3 py-2 border ${
              errors.district ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="">Select District</option>
            {selectedCity &&
              districts[selectedCity]?.map((district, index) => (
                <option key={index} value={district}>
                  {district}
                </option>
              ))}
          </select>
          {errors.district && (
            <p className="text-red-500 text-sm mt-1">
              {errors.district.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="neighborhood"
            className="block text-gray-700 font-medium mb-2"
          >
            Neighborhood
          </label>
          <input
            type="text"
            id="neighborhood"
            {...register("neighborhood", {
              required: "Neighborhood is required.",
            })}
            className={`w-full px-3 py-2 border ${
              errors.neighborhood ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Neighborhood"
          />
          {errors.neighborhood && (
            <p className="text-red-500 text-sm mt-1">
              {errors.neighborhood.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:scale-105 hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {loading ? (
            <Spinner svgCss="w-5 h-5 m-auto" />
          ) : address ? (
            "Edit"
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};
