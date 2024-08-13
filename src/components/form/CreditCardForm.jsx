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
      <h1 className="text-2xl font-bold mb-6">Credit Card Information Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="card_no"
            className="block text-gray-700 font-medium mb-2"
          >
            Card Number
          </label>
          <input
            type="text"
            id="card_no"
            {...register("card_no", {
              required: "Card number is required",
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Card Number"
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
              Expiration Month
            </label>
            <input
              type="number"
              id="expire_month"
              {...register("expire_month", {
                required: "Expiration month is required",
                min: {
                  value: 1,
                  message: "Please enter a valid month",
                },
                max: {
                  value: 12,
                  message: "Please enter a valid month",
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
              Expiration Year
            </label>
            <input
              type="number"
              id="expire_year"
              {...register("expire_year", {
                required: "Expiration year is required",
                min: {
                  value: new Date().getFullYear(),
                  message: "Please enter a valid year",
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
            Name on Card
          </label>
          <input
            type="text"
            id="name_on_card"
            {...register("name_on_card", {
              required: "Name on card is required",
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Name on Card"
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
              required: "CCV is required",
              pattern: {
                value: /^\d{3}$/,
                message: "CCV must be 3 digits",
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
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:scale-105 hover:opacity-85 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {loading ? (
            <Spinner svgCss="w-5 h-5 m-auto" />
          ) : creditCard ? (
            "Edit"
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};
