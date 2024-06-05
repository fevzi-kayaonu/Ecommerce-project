export const TeamContent = () => {
  return (
    <section className="flex justify-center items-center pb-10">
      <div className="text-center">
        <h2 className="font-bold text-4xl">Start your 14 days free trial</h2>
        <p className="font-bold text-sm text-secondTextColor mx-[20%] my-5">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="text-white font-bold text-sm py-3 px-14 bg-primary rounded-md mb-2">
          Try it free now
        </button>
        <div className="flex gap-5 text-xl justify-center py-5">
          <i className="fa-brands fa-facebook hover:opacity-45 text-primary"></i>
          <i className="fa-brands fa-instagram hover:opacity-45"></i>
          <i className="fa-brands fa-x-twitter hover:opacity-45"></i>
          <i className="fa-brands fa-linkedin hover:opacity-45  text-primary"></i>
        </div>
      </div>
    </section>
  );
};
