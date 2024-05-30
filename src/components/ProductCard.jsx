import ProductImg from "../assets/ProductImg.jpg";

export const ProductCard = () => {
  return (
    <>
      <div className="basis-[18%] max-xl:basis-[23.1%] max-lg:basis-[31.66%] max-md:basis-[48.74%] max-sm:basis-[100%] text-center my-[1%] hover:opacity-75">
        <picture className="block aspect-[1/1.3] w-full">
          <img
            src={ProductImg}
            alt="ProductImg"
            className="w-full h-full object-cover "
          />
        </picture>
        <div className="flex flex-col my-6 font-bold gap-3">
          <h5 className=" text-base tracking-wide">Graphic Design</h5>
          <a className="text-sm tracking-wider text-secondTextColor">
            English Department
          </a>
          <div className="flex justify-center text-base tracking-wide gap-2">
            <p className="text-secondTextColor">$16.48</p>
            <p className="text-secondary">$6.48</p>
          </div>
        </div>
      </div>
    </>
  );
};
