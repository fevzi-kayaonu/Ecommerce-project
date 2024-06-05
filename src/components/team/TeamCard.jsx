import image1 from "../../assets/teamImage.jpg";

const data = [
  image1,
  image1,
  image1,
  image1,
  image1,
  image1,
  image1,
  image1,
  image1,
];

export const TeamCard = () => {
  return (
    <>
      <section className="flex justify-center pb-20  max-md:pb-15">
        <div className="basis-[80%] text-center">
          <h2 className="font-bold text-3xl tracking-wide py-20">
            Meet Our Team
          </h2>
          <div className="flex flex-wrap mx-auto justify-center gap-5">
            {data.map((item) => (
              <div
                className="text-center my-[1%] basis-[30%]  max-md:basis-[45%] max-sm:basis-[100%] hover:opacity-75"
                key={item}
              >
                <picture className="block aspect-[1.3/1] w-full">
                  <img
                    src={item}
                    alt="ProductImg"
                    className="w-full h-full object-cover "
                  />
                </picture>
                <div className="flex flex-col my-6 font-bold gap-3">
                  <h5 className=" text-base tracking-wide">Username</h5>
                  <h6 className="text-sm text-secondTextColor">Profession</h6>
                  <div className="flex justify-center text-base tracking-wide gap-2"></div>
                  <div className="w-[125px] flex gap-8 text-primary mx-auto">
                    <i className="fa-brands fa-facebook hover:opacity-45"></i>
                    <i className="fa-brands fa-instagram hover:opacity-45"></i>
                    <i className="fa-brands fa-x-twitter hover:opacity-45"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
