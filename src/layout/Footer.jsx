export const Footer = () => {
  return (
    <>
      <footer className="">
        <div className="bg-bgGray flex justify-center py-16 ">
          <div className="flex flex-wrap justify-between items-center basis-[85%] text-2xl pr-[10%]">
            <h3 className="font-bold">BrandName</h3>
            <div className="w-[125px] flex gap-8 text-primary">
              <i className="fa-brands fa-facebook hover:opacity-45"></i>
              <i className="fa-brands fa-instagram hover:opacity-45"></i>
              <i className="fa-brands fa-x-twitter hover:opacity-45"></i>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center py-10">
          <div className="basis-[85%] flex justify-between gap-8 max-lg:flex-wrap">
            <div className="flex flex-wrap basis-[66%] gap-3 max-lg:basis-[100%] justify-between max-md:justify-center max-sm:justify-start max-lg:flex-basis[100%]">
              <div className="font-bold flex flex-col  max-md:basis-[45%] max-sm:basis-[80%]  gap-3 text-sm tracking-wider text-secondTextColor">
                <h5 className="text-black text-lg tracking-wide py-3">
                  Company Info
                </h5>
                <a className="hover:underline" href="/about-us">
                  About Us
                </a>
                <a className="hover:underline" href="">
                  Carrier
                </a>
                <a className="hover:underline" href="">
                  We are hiring
                </a>
                <a className="hover:underline" href="/team">
                  Team
                </a>
              </div>
              <div className="font-bold  flex flex-col max-md:basis-[45%] max-sm:basis-[80%]  gap-3 text-sm tracking-wider text-secondTextColor">
                <h5 className="text-black text-lg tracking-wide py-3">Legal</h5>
                <a className="hover:underline" href="/about-us">
                  About Us
                </a>
                <a className="hover:underline" href="">
                  Carrier
                </a>
                <a className="hover:underline" href="">
                  We are hiring
                </a>
                <a className="hover:underline" href="/team">
                  Team
                </a>
              </div>
              <div className="font-bold flex flex-col  max-md:basis-[45%] max-sm:basis-[80%]  gap-3 text-sm tracking-wider text-secondTextColor">
                <h5 className="text-black text-lg tracking-wide py-3">
                  Features
                </h5>
                <a className="hover:underline" href="">
                  Business Marketing
                </a>
                <a className="hover:underline" href="">
                  User Analytic
                </a>
                <a className="hover:underline" href="">
                  Live Chat
                </a>
                <a className="hover:underline" href="">
                  Unlimited Support
                </a>
              </div>
              <div className="font-bold flex flex-col max-md:basis-[45%] max-sm:basis-[80%]  gap-3 text-sm tracking-wider text-secondTextColor">
                <h5 className="text-black text-lg tracking-wide py-3">
                  Resources
                </h5>
                <a className="hover:underline" href="">
                  IOS & Android
                </a>
                <a className="hover:underline" href="">
                  Watch a Demo
                </a>
                <a className="hover:underline" href="">
                  Customers
                </a>
                <a className="hover:underline" href="">
                  API
                </a>
              </div>
            </div>
            <div className="font-bold flex flex-col basis[34%] mx-auto min-w-[320px] gap-3 text-sm tracking-wider text-secondTextColor">
              <h5 className="text-black text-lg py-3">Get In Touch</h5>
              <div className="flex justify-between rounded-md border-secondTextColor border-2 ">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="py-5 rounded-l-md bg-bgInput pl-4"
                />
                <button className="py-5 px-10 bg-primary text-white rounded-r-md hover:opacity-75">
                  Subscribe
                </button>
              </div>
              <p>Lore imp sum dolor Amit</p>
            </div>
          </div>
        </div>
        <div className="bg-bgGray flex justify-center">
          <div className="basis-[85%] py-8 font-semibold">
            <h6 className="max-md:text-center">
              Made With Love By Finland All Right Reserved{" "}
            </h6>
          </div>
        </div>
      </footer>
    </>
  );
};
