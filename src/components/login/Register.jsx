import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { showToast } from "../util/ShowToast";

const formData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role_id: 3,
  store: {
    name: "",
    phone: "",
    tax_no: "",
    bank_account: "",
  },
};

export const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    defaultValues: formData,
    mode: "onChange",
  });

  const [roles, setRoles] = useState([]);

  const history = useHistory();
  const password = watch("password");
  const role_id = watch("role_id"); // Use watch to observe role_id

  useEffect(() => {
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/roles")
      .then((response) => {
        setRoles(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error("Error fetching roles:", error));
  }, []);

  const onSubmit = (data) => {
    const { confirmPassword, ...formDataToSend } = data;
    const filteredData =
      role_id === 2
        ? { ...formDataToSend, store: data.store }
        : { ...formDataToSend };

    axios
      .post("https://workintech-fe-ecommerce.onrender.com/signup", filteredData)
      .then((response) => {
        showToast({
          message: response.data.message,
          type: "warn",
          position: "top-center",
          autoClose: false,
          closeOnClick: false,
          transition: "Zoom",
        });
        history.goBack();
      })
      .catch((error) => {
        console.error("girdim:", error.message);
        console.error("Error:", error);
        showToast({
          message: "Doesnt registaration",
          type: "error",
          position: "top-right",
          autoClose: 5000,
          closeOnClick: false,
          transition: "Bounce",
        });
      });
  };

  return (
    <section className="flex justify-center py-10">
      <div className="flex flex-col items-center shadow-lg w-[600px] py-10 max-sm:py-5 max-lg:py-7 max-lg:w-[400px] max-sm:w-[300px]">
        <div>
          <Link className="hover:underline" to="/login">
            Login
          </Link>
          /
          <Link className="hover:underline" to="/register">
            Register
          </Link>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center"
        >
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className={`py-5 rounded-l-md bg-bgInput pl-4 ${errors.name ? "border-red-500" : "border-gray-300"}`}
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters long",
                },
              })}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className={`py-5 rounded-l-md bg-bgInput pl-4 ${errors.email ? "border-red-500" : "border-gray-300"}`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Your Password"
              className={`py-5 rounded-l-md bg-bgInput pl-4 ${errors.password ? "border-red-500" : "border-gray-300"}`}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
                pattern: {
                  value:
                    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/,
                  message:
                    "Password must include at least one number, one uppercase letter, one lowercase letter, and one special character",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              className={`py-5 rounded-l-md bg-bgInput pl-4 ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}
          </div>

          <div className="self-start">
            <label
              htmlFor="role_id"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <Controller
              name="role_id"
              control={control}
              render={({ field }) => (
                <select
                  id="role"
                  className={`py-5 rounded-l-md bg-bgInput pl-4 ${errors.role_id ? "border-red-500" : "border-gray-300"}`}
                  {...field}
                  onChange={(e) => {
                    const value = Number(e.target.value); // Convert to Number
                    field.onChange(value);
                    console.log(value);
                  }}
                >
                  {roles?.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.role_id && (
              <p className="text-red-500">{errors.role_id.message}</p>
            )}
          </div>

          {role_id === 2 && (
            <>
              <div>
                <label
                  htmlFor="storeName"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Store Name
                </label>
                <input
                  type="text"
                  id="storeName"
                  placeholder="Store Name"
                  className={`py-5 rounded-l-md bg-bgInput pl-4 ${errors.store?.name ? "border-red-500" : "border-gray-300"}`}
                  {...register("store.name", {
                    required: "Store Name is required",
                    minLength: {
                      value: 3,
                      message: "Store Name must be at least 3 characters long",
                    },
                  })}
                />
                {errors.store?.name && (
                  <p className="text-red-500">{errors.store.name.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="storePhone"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Store Phone
                </label>
                <input
                  type="text"
                  id="storePhone"
                  placeholder="Store Phone"
                  className={`py-5 rounded-l-md bg-bgInput pl-4 ${errors.store?.phone ? "border-red-500" : "border-gray-300"}`}
                  {...register("store.phone", {
                    required: "Store Phone is required",
                    pattern: {
                      value: /^(\+90|0)?5\d{9}$/,
                      message:
                        "Invalid phone number. Must be a valid Türkiye phone number.",
                    },
                  })}
                />
                {errors.store?.phone && (
                  <p className="text-red-500">{errors.store.phone.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="storeTaxId"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Store Tax ID
                </label>
                <input
                  type="text"
                  id="storeTaxId"
                  placeholder="Store Tax ID"
                  className={`py-5 rounded-l-md bg-bgInput pl-4 ${errors.store?.tax_no ? "border-red-500" : "border-gray-300"}`}
                  {...register("store.tax_no", {
                    required: "Store Tax ID is required",
                    pattern: {
                      value: /^T\d{4}V\d{6}$/,
                      message:
                        "Invalid Tax ID. Must match the pattern 'TXXXXVXXXXXX'.",
                    },
                  })}
                />
                {errors.store?.tax_no && (
                  <p className="text-red-500">{errors.store.tax_no.message}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="storeBankAccount"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Store Bank Account
                </label>
                <input
                  type="text"
                  id="storeBankAccount"
                  placeholder="Store Bank Account"
                  className={`py-5 rounded-l-md bg-bgInput pl-4 ${errors.store?.bank_account ? "border-red-500" : "border-gray-300"}`}
                  {...register("store.bank_account", {
                    required: "Store Bank Account is required",
                    pattern: {
                      value:
                        /^([A-Z]{2}[ '+'\\'+'-]?[0-9]{2})(?=(?:[ '+'\\'+'-]?[A-Z0-9]){9,30}$)((?:[ '+'\\'+'-]?[A-Z0-9]{3,5}){2,7})([ '+'\\'+'-]?[A-Z0-9]{1,3})?$/,
                      message: "Invalid IBAN. Must be a valid IBAN address.",
                    },
                  })}
                />
                {errors.store?.bank_account && (
                  <p className="text-red-500">
                    {errors.store.bank_account.message}
                  </p>
                )}
              </div>
            </>
          )}

          <button
            type="submit"
            className={`flex items-center justify-center mt-4 py-2 px-4 rounded-md text-white ${isSubmitting ? "bg-gray-500" : "bg-blue-500"} ${errors.length ? "cursor-not-allowed" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting && (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            {isSubmitting ? "Processing..." : "Register"}
          </button>
        </form>
      </div>
    </section>
  );
};
