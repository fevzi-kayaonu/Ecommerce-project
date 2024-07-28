import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Burada form verilerini işleyebilir veya bir API çağrısı yapabilirsiniz.
    console.log("Firstname:", firstname);
    console.log("Lastname:", lastname);
    console.log("Email:", email);
    console.log("Password:", password);

    // Örneğin, bir API'ye gönderim yapmak için:
    axios
      .post("https://workintech-fe-ecommerce.onrender.com/", {
        firstname,
        lastname,
        email,
        password,
      })
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section className="flex justify-center py-10">
      <div>
        <Link className="hover:underline" to="/login">
          {" "}
          Login
        </Link>
        /
        <Link className="hover:underline" to="/register">
          Register
        </Link>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div>
            <label
              htmlFor="firstname"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Firstname
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Your Firstname"
              className="py-5 rounded-l-md bg-bgInput pl-4"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="lastname"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Lastname
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Your Lastname"
              className="py-5 rounded-l-md bg-bgInput pl-4"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
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
              className="py-5 rounded-l-md bg-bgInput pl-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
              className="py-5 rounded-l-md bg-bgInput pl-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="font-bold text-primary text-sm tracking-wider border-2	border-primary px-14 py-4 mt-6 hover:opacity-60"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};
