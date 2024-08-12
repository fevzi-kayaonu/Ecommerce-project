import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  editCreditCard,
  postCreditCards,
} from "../../store/actions/clientAction";
import { useForm } from "react-hook-form";
import Spinner from "../others/Spinner";

const formData = {
  card_no: "",
  expire_month: "",
  expire_year: "",
  name_on_card: "",
  ccv: "",
};

export const CreditCardForm = ({ creditCardId, handleClick }) => {
  const dispatch = useDispatch();
  const creditCard = useSelector((store) =>
    store.client.creditCards.find(
      (creditCard) => creditCard.id === Number(creditCardId)
    )
  );
  const loading = useSelector((store) => store.client.loading.local);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: creditCard ? creditCard : formData,
    mode: "onChange",
  });

  const onSubmit = (data) => {
    const { ccv, ...sendData } = data;
    console.log("data :", data);
    console.log("sendData :", sendData);
    creditCard
      ? dispatch(editCreditCard(sendData))
      : dispatch(postCreditCards(sendData));

    handleClick({ target: { name: "submit" } });
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg mx-auto max-h-[800px] overflow-auto max-md:max-h-[700px] max-sm:max-h-[500px]">
      <h1 className="text-2xl font-bold mb-6">Kredi Kartı Bilgisi Formu</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="card_no"
            className="block text-gray-700 font-medium mb-2"
          >
            Kart Numarası
          </label>
          <input
            type="text"
            id="card_no"
            {...register("card_no", {
              required: "Kart numarası zorunludur",
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Kart Numarası"
          />
          {errors.card_no && (
            <p className="text-red-500">{errors.card_no.message}</p>
          )}
        </div>

        <div className="mb-4 flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="expire_month"
              className="block text-gray-700 font-medium mb-2"
            >
              Son Kullanım Ayı
            </label>
            <input
              type="number"
              id="expire_month"
              {...register("expire_month", {
                required: "Son kullanım ayı zorunludur",
                min: {
                  value: 1,
                  message: "Geçerli bir ay giriniz",
                },
                max: {
                  value: 12,
                  message: "Geçerli bir ay giriniz",
                },
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MM"
            />
            {errors.expire_month && (
              <p className="text-red-500">{errors.expire_month.message}</p>
            )}
          </div>
          <div className="flex-1">
            <label
              htmlFor="expire_year"
              className="block text-gray-700 font-medium mb-2"
            >
              Son Kullanım Yılı
            </label>
            <input
              type="number"
              id="expire_year"
              {...register("expire_year", {
                required: "Son kullanım yılı zorunludur",
                min: {
                  value: new Date().getFullYear(),
                  message: "Geçerli bir yıl giriniz",
                },
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="YYYY"
            />
            {errors.expire_year && (
              <p className="text-red-500">{errors.expire_year.message}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="name_on_card"
            className="block text-gray-700 font-medium mb-2"
          >
            Kart Üzerindeki İsim
          </label>
          <input
            type="text"
            id="name_on_card"
            {...register("name_on_card", {
              required: "Kart üzerindeki isim zorunludur",
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Kart Üzerindeki İsim"
          />
          {errors.name_on_card && (
            <p className="text-red-500">{errors.name_on_card.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="ccv" className="block text-gray-700 font-medium mb-2">
            CCV
          </label>
          <input
            type="text"
            id="ccv"
            {...register("ccv", {
              required: "CCV zorunludur",
              pattern: {
                value: /^\d{3}$/,
                message: "CCV 3 haneli olmalıdır",
              },
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="CCV"
          />
          {errors.ccv && <p className="text-red-500">{errors.ccv.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-orange-500 text-white  py-2 px-4 rounded-md hover:scale-105 hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-orange-800"
        >
          {loading ? (
            <Spinner svgCss="w-5 h-5 m-auto" />
          ) : creditCard ? (
            "Düzenle"
          ) : (
            "Gönder"
          )}
        </button>
      </form>
    </div>
  );
};
