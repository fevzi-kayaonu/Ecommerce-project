import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const ProductCard = ({ item, cssContainer, colors }) => {
  const history = useHistory();
  const { categories } = useSelector((store) => store.global);
  const category = categories.find(
    (category) => category.id === item.category_id
  );

  const handleClick = () => {
    history.push(
      `/shop/${category.gender}/${category.title.toLowerCase()}/${item.category_id}/${item.name}/${item.id}`
    );
  };

  return (
    <>
      <div
        className={`text-center my-[1%] hover:opacity-75 hover:scale-105 ${cssContainer} shadow-xl border-[1px] border-gray-200`}
        onClick={handleClick}
      >
        <picture className="block aspect-[1/1.3] w-full">
          <img
            src={item?.images[0]?.url}
            alt="ProductImg"
            className="w-full h-full object-cover "
          />
        </picture>
        <div className="flex flex-col my-6 font-bold gap-3">
          <h5 className=" text-base tracking-wide">{item?.name}</h5>
          <p className="text-sm tracking-wider line-clamp-2 break-words text-secondTextColor px-3">
            {item?.description}
          </p>
          <div className="flex justify-center text-base tracking-wide gap-2">
            <p className="text-secondTextColor">${item?.price}</p>
            <p className="text-secondary">${(item?.price * 0.8).toFixed(2)}</p>
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
