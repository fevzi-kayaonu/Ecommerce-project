export const Header = () => {
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
              <a className="hover:underline" href="/">
                Home
              </a>
              <a className="hover:underline" href="/shop">
                Shop{" "}
                <span>
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              </a>
              <a className="hover:underline" href="/about-us">
                About
              </a>
              <a className="hover:underline" href="/team">
                Team
              </a>
              <a className="hover:underline" href="/contact">
                Contact
              </a>
              <a className="hover:underline" href="/">
                Pages
              </a>
            </nav>
          </div>
          <div className="flex gap-5 text-[#23A6F0] max-md:text-black items-center max-md:text-2xl">
            <div className="max-md:hidden">
              <i className="fa-regular fa-user"> </i>
              <span> </span>
              <button className="hover:underline"> Login</button>/
              <button className="hover:underline">Register</button>
            </div>
            <i className="fa-solid fa-magnifying-glass hover:opacity-75"></i>
            <i className="fa-solid fa-cart-shopping hover:opacity-75"></i>
            <i className="fa-regular fa-heart max-md:hidden hover:opacity-75"></i>
            <i className="fa-solid fa-bars md:hidden hover:opacity-75"></i>
          </div>
        </article>
        <div>
          <nav className="flex flex-col items-center text-[#737373] gap-5 md:hidden py-10 text-3xl">
            <a className="hover:underline" href="/">
              Home
            </a>
            <a className="hover:underline" href="/Shop">
              Shop{" "}
              <span>
                <i className="fa-solid fa-angle-down"></i>
              </span>
            </a>
            <a className="hover:underline" href="/about-us">
              About
            </a>
            <a className="hover:underline" href="/blog">
              Blog
            </a>
            <a className="hover:underline" href="/contact">
              Contact
            </a>
            <a className="hover:underline" href="/">
              Pages
            </a>
          </nav>
        </div>
      </section>
    </>
  );
};
