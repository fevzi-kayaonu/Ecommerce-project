export const Footer = () => {
  return (
    <>
      <footer className="mt-10">
        <div className="bg-bgGray flex justify-center py-16 ">
          <div className="flex flex-wrap justify-between basis-[85%] text-2xl pr-[10%]">
            <h3 className="font-bold">BrandName</h3>
            <div className="w-[125px] flex gap-8 text-primary">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-x-twitter"></i>
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
                <a href="">About Us</a>
                <a href="">Carrier</a>
                <a href="">We are hiring</a>
                <a href="">Blog</a>
              </div>
              <div className="font-bold  flex flex-col max-md:basis-[45%] max-sm:basis-[80%]  gap-3 text-sm tracking-wider text-secondTextColor">
                <h5 className="text-black text-lg tracking-wide py-3">Legal</h5>
                <a href="">About Us</a>
                <a href="">Carrier</a>
                <a href="">We are hiring</a>
                <a href="">Blog</a>
              </div>
              <div className="font-bold flex flex-col  max-md:basis-[45%] max-sm:basis-[80%]  gap-3 text-sm tracking-wider text-secondTextColor">
                <h5 className="text-black text-lg tracking-wide py-3">
                  Features
                </h5>
                <a href="">Business Marketing</a>
                <a href="">User Analytic</a>
                <a href="">Live Chat</a>
                <a href="">Unlimited Support</a>
              </div>
              <div className="font-bold flex flex-col max-md:basis-[45%] max-sm:basis-[80%]  gap-3 text-sm tracking-wider text-secondTextColor">
                <h5 className="text-black text-lg tracking-wide py-3">
                  Resources
                </h5>
                <a href="">IOS & Android</a>
                <a href="">Watch a Demo</a>
                <a href="">Customers</a>
                <a href="">API</a>
              </div>
            </div>
            <div className="font-bold flex flex-col basis[34%] mx-auto min-w-[335px] gap-3 text-sm tracking-wider text-secondTextColor">
              <h5 className="text-black text-lg py-3">Get In Touch</h5>
              <div className="rounded-md bg-secondTextColor border-2">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="py-5 rounded-l-md bg-bgInput pl-4"
                />
                <button className="py-5 px-10 bg-primary text-white rounded-r-md">
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
