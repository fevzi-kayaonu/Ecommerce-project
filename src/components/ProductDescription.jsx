import DescriptionImg from "../assets/Description-Img.png";

export const ProductDescription = () => {
  return (
    <>
      <section className="flex justify-center pb-10 pt-10 max-sm:py-10 max-md:pb-5">
        <div className="basis-[85%] text-center flex flex-col">
          <section className="pb-7">
            <div className="flex justify-center gap-7 text-secondTextColor text-sm pb-7">
              <a href="">Description</a>
              <a href="">Additional Information</a>
              <a href="">
                Reviews (<span className="text-secondary">0</span>)
              </a>
            </div>
            <div className="border-[1px] border-lightGray" />
          </section>
          <section className="flex justify-center text-left gap-10 max-lg:flex-col">
            <div className="basis-[30%] aspect-[1/1.15] rounded-md shadow-[0_17px_30px_-15px_rgba(0,0,0,0.3)] shadow-black">
              <img
                src={DescriptionImg}
                alt="DescriptionImg"
                className="object-cover w-full h-full rounded-md"
              />
            </div>
            <section className="basis-[60%] flex justify-between">
              <article className="basis-[45%] text-md">
                <h3 className="font-bold text-2xl basis-[35] mb-5">
                  the quick fox jumps over{" "}
                </h3>
                <p className="mb-2">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p className="mb-2">
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
                <p>
                  Met minim Mollie non desert Alamo est sit cliquey dolor do met
                  sent. RELIT official consequent door ENIM RELIT Mollie.
                  Excitation venial consequent sent nostrum met.
                </p>
              </article>
              <article className="basis-[45%]">
                <section>
                  <h3 className="font-bold text-2xl mb-5">
                    the quick fox jumps over
                  </h3>
                  <div className="flex gap-2 text-secondTextColor">
                    <i className="fa-solid fa-chevron-right"></i>
                    <h6>the quick fox jumps over the lazy dog</h6>
                  </div>
                  <div className="flex gap-2 text-secondTextColor">
                    <i className="fa-solid fa-chevron-right"></i>
                    <h6>the quick fox jumps over the lazy dog</h6>
                  </div>
                  <div className="flex gap-2 text-secondTextColor">
                    <i className="fa-solid fa-chevron-right"></i>
                    <h6>the quick fox jumps over the lazy dog</h6>
                  </div>
                  <div className="flex gap-2 text-secondTextColor">
                    <i className="fa-solid fa-chevron-right"></i>
                    <h6>the quick fox jumps over the lazy dog</h6>
                  </div>
                  <div className="flex gap-2 text-secondTextColor">
                    <i className="fa-solid fa-chevron-right"></i>
                    <h6>the quick fox jumps over the lazy dog</h6>
                  </div>
                </section>
                <section>
                  <h3 className="font-bold text-2xl my-5">
                    the quick fox jumps over
                  </h3>
                  <div className="flex gap-2 text-secondTextColor">
                    <i className="fa-solid fa-chevron-right"></i>
                    <h6>the quick fox jumps over the lazy dog</h6>
                  </div>
                  <div className="flex gap-2 text-secondTextColor">
                    <i className="fa-solid fa-chevron-right"></i>
                    <h6>the quick fox jumps over the lazy dog</h6>
                  </div>
                  <div className="flex gap-2 text-secondTextColor">
                    <i className="fa-solid fa-chevron-right"></i>
                    <h6>the quick fox jumps over the lazy dog</h6>
                  </div>
                  <div className="flex gap-2 text-secondTextColor">
                    <i className="fa-solid fa-chevron-right"></i>
                    <h6>the quick fox jumps over the lazy dog</h6>
                  </div>
                </section>
              </article>
            </section>
          </section>
        </div>
      </section>
    </>
  );
};
