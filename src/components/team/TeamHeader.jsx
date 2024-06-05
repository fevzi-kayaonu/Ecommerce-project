import img1 from "../../assets/teamHeaderImg-1.jpg";
import img2 from "../../assets/teamHeaderImg-2.jpg";
import img3 from "../../assets/teamHeaderImg-3.jpg";
import img4 from "../../assets/teamHeaderImg-4.jpg";
import img5 from "../../assets/teamHeaderImg-5.jpg";

export const TeamHeader = () => {
  return (
    <section className="text-center pt-10">
      <h5 className="font-bold text-base text-secondTextColor">WHAT WE DO</h5>
      <h1 className="font-bold text-6xl	my-5 mx-20 max-sm:mx-10">
        Innovation tailored for you
      </h1>
      <div className="mb-12 mt-7">
        <a href="/" className="mx-2 hover:underline">
          Home{" "}
        </a>
        {">"}
        <a href="/team" className="text-secondTextColor mx-2 hover:underline">
          Team
        </a>
      </div>
      <div className="flex max-md:flex-wrap gap-2 justify-between">
        <div className="basis-[50%] max-md:basis-[100%] aspect-[7/5.3]">
          <img
            src={img1}
            alt="img.jpg"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="basis-[50%] max-md:basis-[100%] aspect-[7/5.3]">
          <div className="aspect-[7/2.65] flex gap-2 mb-2">
            <div>
              <img
                src={img2}
                alt="img.jpg"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="">
              <img
                src={img3}
                alt="img.jpg"
                className="object-cover min-w-full w-full h-full"
              />
            </div>
          </div>
          <div className="aspect-[7/2.65] flex gap-2">
            <div className="">
              <img
                src={img4}
                alt="img.jpg"
                className="object-cover  min-w-full w-full h-full"
              />
            </div>
            <div className="">
              <img
                src={img5}
                alt="img.jpg"
                className="object-cover min-w-full w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
