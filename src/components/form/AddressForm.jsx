import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { editAddress, postAddress } from "../../store/actions/clientAction";
import { districts, cities } from "../../util/countries";

const formData = {
  title: "",
  name: "",
  surname: "",
  phone: "",
  city: "",
  district: "",
  neighborhood: "",
};

export const AddressForm = ({ addressId }) => {
  const address = useSelector((store) =>
    store.client.addressList.find((address) => address.id === Number(addressId))
  );
  console.log("addressId: ", addressId, "/n", "address: ", address, "/n");
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
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto max-h-[800px] overflow-auto max-md:max-h-[700px] max-sm:max-h-[500px]">
      <h1 className="text-2xl font-bold mb-6">Adres Bilgisi Formu</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 font-medium mb-2"
          >
            Adres Başlığı
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Adres başlığı zorunludur." })}
            className={`w-full px-3 py-2 border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Adres Başlığı"
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
            Ad
          </label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Ad zorunludur.",
              minLength: {
                value: 2,
                message: "Ad en az 2 karakter olmalıdır.",
              },
            })}
            className={`w-full px-3 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Ad"
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
            Soyad
          </label>
          <input
            type="text"
            id="surname"
            {...register("surname", {
              required: "Soyad zorunludur.",
              minLength: {
                value: 2,
                message: "Soyad en az 2 karakter olmalıdır.",
              },
            })}
            className={`w-full px-3 py-2 border ${
              errors.surname ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Soyad"
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
            Telefon
          </label>
          <input
            type="text"
            id="phone"
            {...register("phone", {
              required: "Telefon numarası zorunludur.",
              pattern: {
                value: /^[0-9]{10,11}$/,
                message: "Telefon numarası 10-11 rakamdan oluşmalıdır.",
              },
            })}
            className={`w-full px-3 py-2 border ${
              errors.phone ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Telefon"
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
            Şehir (İl)
          </label>
          <select
            id="city"
            {...register("city", { required: "Şehir seçimi zorunludur." })}
            className={`w-full px-3 py-2 border ${
              errors.city ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="">Şehir Seçiniz</option>
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
            İlçe
          </label>
          <select
            id="district"
            {...register("district", { required: "İlçe seçimi zorunludur." })}
            className={`w-full px-3 py-2 border ${
              errors.district ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
          >
            <option value="">İlçe Seçiniz</option>
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
            Mahalle
          </label>
          <input
            type="text"
            id="neighborhood"
            {...register("neighborhood", {
              required: "Mahalle adı zorunludur.",
            })}
            className={`w-full px-3 py-2 border ${
              errors.neighborhood ? "border-red-500" : "border-gray-300"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Mahalle"
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
          className="w-full bg-orange-500 text-white  py-2 px-4 rounded-md hover:scale-105 hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-orange-800"
        >
          {address ? "Düzenle" : "Gönder"}
        </button>
      </form>
    </div>
  );
};
