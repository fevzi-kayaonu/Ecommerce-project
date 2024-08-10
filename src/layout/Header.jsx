import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { client } from "../store/reducers/clientReducer";
import { setUser } from "../store/actions/clientAction";
import CryptoJS from "crypto-js";
import { useState } from "react";
import ShoppingCartDropDown from "../components/shop/ShoppingCartDropDown";
import Categories from "../components/category/Categories";

export const Header = () => {
  const user = useSelector((state) => state.client.userInfo);
  const [toogleClickCategory, setToogleClickCategory] = useState(false);
  const [toogleClickShop, setToogleClickShop] = useState(false);
  const [toogleTouch, setToogleTouch] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const hash = CryptoJS.MD5(user.email);
  const gravatarUrl = `https://www.gravatar.com/avatar/${hash}?s=20`;

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(setUser(client.userInfo));
    history.push("/");
  };

  const handleClickCategory = () => {
    setToogleClickCategory(!toogleClickCategory);
  };
  const handleClickShop = () => {
    setToogleClickShop(!toogleClickShop);
  };
  const handleTouch = () => {
    setToogleTouch(!toogleTouch);
  };

  return (
    <>
      <section className="text-sm max-md:pt-6 max-md:px-4">
        <address className="bg-headerBlue text-white flex justify-between px-5 py-2 max-md:hidden">
          <div className="flex gap-5 items-center">
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-phone "></i>
              <p>(225) 555-0118</p>
            </div>
            <div className="flex gap-2 items-center">
              <i className="fa-regular fa-envelope"></i>
              <p>michelle.rivera@example.com</p>
            </div>
          </div>
          <div>
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className="flex items-center gap-2">
            <p>Follow Us :</p>
            <i className="fa-brands fa-instagram hover:opacity-75"></i>
            <i className="fa-brands fa-youtube hover:opacity-75"></i>
            <i className="fa-brands fa-facebook hover:opacity-75"></i>
            <i className="fa-brands fa-x-twitter hover:opacity-75"></i>
          </div>
        </address>
        <article className="flex justify-between px-5 py-3 items-center">
          <div className="flex gap-6  items-center ">
            <h1 className="text-2xl">BrandName</h1>
            <nav className="flex text-[#737373] gap-2 max-md:hidden">
              <Link className="hover:underline" to="/">
                Home
              </Link>
              <div className="flex gap-1 items-center ">
                <Link className="hover:underline" to="/shop">
                  Shop{" "}
                </Link>
                <button className="relative">
                  <i
                    className="fa-solid fa-angle-down "
                    onClick={handleClickCategory}
                  ></i>
                  {toogleClickCategory && (
                    <div className="absolute z-10 origin-bottom-left">
                      <Categories />
                    </div>
                  )}
                </button>
              </div>
              <Link className="hover:underline" to="/about-us">
                About
              </Link>
              <Link className="hover:underline" to="/team">
                Team
              </Link>
              <Link className="hover:underline" to="/contact">
                Contact
              </Link>
              <Link className="hover:underline" to="/">
                Pages
              </Link>
            </nav>
          </div>
          <div className="flex gap-5 text-[#23A6F0] max-md:text-black items-center max-md:text-2xl">
            <div className="max-md:hidden">
              {user.token ? (
                <div className="flex gap-2">
                  <img src={gravatarUrl} alt="" />
                  <p>{user.name}</p>
                </div>
              ) : (
                <>
                  <Link className="hover:underline" to="/login">
                    Login
                  </Link>
                  /
                  <Link className="hover:underline" to="/register">
                    Register
                  </Link>
                </>
              )}
            </div>
            <i className="fa-solid fa-magnifying-glass hover:opacity-75"></i>
            <div className="relative">
              <i
                className="fa-solid fa-cart-shopping hover:opacity-75"
                onClick={handleClickShop}
              ></i>
              {toogleClickShop && (
                <div className="absolute z-10 -left-[350px] max-sm:-left-[250px]">
                  <ShoppingCartDropDown handleClickShop={handleClickShop} />
                </div>
              )}
            </div>
            <i className="fa-regular fa-heart max-md:hidden hover:opacity-75"></i>
            <i className="fa-solid fa-bars md:hidden hover:opacity-75"></i>
            {user.token && <button onClick={handleLogout}>Logout</button>}
          </div>
        </article>
        <div>
          <nav className="flex flex-col items-center text-[#737373] gap-5 md:hidden py-10 text-3xl">
            <Link className="hover:underline" to="/">
              Home
            </Link>
            <div className="flex gap-1 items-center ">
              <Link className="hover:underline" to="/shop">
                Shop{" "}
              </Link>
              <button className="relative">
                <i
                  className="fa-solid fa-angle-down "
                  onClick={handleTouch}
                ></i>
                {toogleTouch && (
                  <div className="absolute z-10 origin-bottom-left">
                    <Categories />
                  </div>
                )}
              </button>
            </div>
            <Link className="hover:underline" to="/about-us">
              About
            </Link>
            <Link className="hover:underline" to="/blog">
              Blog
            </Link>
            <Link className="hover:underline" to="/contact">
              Contact
            </Link>
            <Link className="hover:underline" to="/">
              Pages
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Header;
