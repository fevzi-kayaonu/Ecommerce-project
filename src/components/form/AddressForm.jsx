import React, { useState } from "react";

export const AddressForm = () => {
  const [formData, setFormData] = useState({
    addressTitle: "",
    fullName: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    addressDetails: "",
  });

  const cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto max-h-[800px] overflow-auto max-md:max-h-[700px] max-sm:max-h-[500px]">
      <h1 className="text-2xl font-bold mb-6">Adres Bilgisi Formu</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="addressTitle"
            className="block text-gray-700 font-medium mb-2"
          >
            Adres Başlığı
          </label>
          <input
            type="text"
            id="addressTitle"
            name="addressTitle"
            value={formData.addressTitle}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Adres Başlığı"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-2"
          >
            Ad & Soyad
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Ad ve Soyad"
          />
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
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Telefon"
          />
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
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Şehir Seçiniz</option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="district"
            className="block text-gray-700 font-medium mb-2"
          >
            İlçe
          </label>
          <input
            type="text"
            id="district"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="İlçe"
          />
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
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Mahalle"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="addressDetails"
            className="block text-gray-700 font-medium mb-2"
          >
            Adres
          </label>
          <textarea
            id="addressDetails"
            name="addressDetails"
            value={formData.addressDetails}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Sokak, bina ve kapı numaraları"
            rows="4"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white  py-2 px-4 rounded-md hover:scale-105 hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-orange-800"
        >
          Gönder
        </button>
      </form>
    </div>
  );
};
