import { useHistory, Link } from "react-router-dom";

export const ProductCard = ({ item, cssContainer, colors }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/detail");
  };

  return (
    <>
      <div
        className={`text-center my-[1%] hover:opacity-75 ${cssContainer}`}
        onClick={handleClick}
      >
        <picture className="block aspect-[1/1.3] w-full">
          <img
            src={item}
            alt="ProductImg"
            className="w-full h-full object-cover "
          />
        </picture>
        <div className="flex flex-col my-6 font-bold gap-3">
          <h5 className=" text-base tracking-wide">Graphic Design</h5>
          <Link className="text-sm tracking-wider text-secondTextColor">
            English Department
          </Link>
          <div className="flex justify-center text-base tracking-wide gap-2">
            <p className="text-secondTextColor">$16.48</p>
            <p className="text-secondary">$6.48</p>
          </div>
          {colors ? (
            <div className="flex justify-center gap-1">
              <div className="bg-primary w-[16px] h-[16px] rounded-full"></div>
              <div className="bg-secondary w-[16px] h-[16px] rounded-full"></div>
              <div className="bg-alert w-[16px] h-[16px] rounded-full"></div>
              <div className="bg-black w-[16px] h-[16px] rounded-full"></div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};
