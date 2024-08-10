import React, { useState } from "react";

export const CreditCardForm = () => {
  const [formData, setFormData] = useState({
    cardNo: "",
    expireMonth: "",
    expireYear: "",
    nameOnCard: "",
    ccv: "",
  });

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
      <h1 className="text-2xl font-bold mb-6">Kredi Kartı Bilgisi Formu</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="cardNo"
            className="block text-gray-700 font-medium mb-2"
          >
            Kart Numarası
          </label>
          <input
            type="text"
            id="cardNo"
            name="cardNo"
            value={formData.cardNo}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Kart Numarası"
          />
        </div>

        <div className="mb-4 flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="expireMonth"
              className="block text-gray-700 font-medium mb-2"
            >
              Son Kullanım Ayı
            </label>
            <input
              type="number"
              id="expireMonth"
              name="expireMonth"
              value={formData.expireMonth}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MM"
              min="1"
              max="12"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="expireYear"
              className="block text-gray-700 font-medium mb-2"
            >
              Son Kullanım Yılı
            </label>
            <input
              type="number"
              id="expireYear"
              name="expireYear"
              value={formData.expireYear}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="YYYY"
              min="2024"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="nameOnCard"
            className="block text-gray-700 font-medium mb-2"
          >
            Kart Üzerindeki İsim
          </label>
          <input
            type="text"
            id="nameOnCard"
            name="nameOnCard"
            value={formData.nameOnCard}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Kart Üzerindeki İsim"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="ccv" className="block text-gray-700 font-medium mb-2">
            CCV
          </label>
          <input
            type="text"
            id="ccv"
            name="ccv"
            value={formData.ccv}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="CCV"
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
