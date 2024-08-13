import { useSelector } from "react-redux";
import CategoryCard from "./CategoryCard";
import Spinner from "../others/Spinner";

function Categories({ handleClose }) {
  const { categories, loading } = useSelector((store) => store.global);

  return (
    <div className="flex bg-primary px-5 py-3 gap-5 rounded-xl mt-2">
      {!loading ? (
        <>
          <div className="basis-1/2 text-left">
            <h5 className="text-black border-b-[1px] border-black mb-2 font-bold text-lg">
              Woman
            </h5>
            <div className="flex flex-col gap-2">
              {categories
                ?.filter((category) => category.gender === "k")
                ?.sort((a, b) => b.rating - a.rating)
                ?.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    handleClose={handleClose}
                  />
                ))}
            </div>
          </div>
          <div className="basis-1/2 text-left">
            <h5 className="text-black border-b-[1px] border-black mb-2 font-bold text-lg">
              Man
            </h5>
            <div className="flex flex-col gap-2">
              {categories
                ?.filter((category) => category.gender === "e")
                ?.sort((a, b) => b.rating - a.rating)
                ?.map((category) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    handleClose={handleClose}
                  />
                ))}
            </div>
          </div>
        </>
      ) : (
        <Spinner svgCss="w-5 h-5" />
      )}
    </div>
  );
}

export default Categories;
