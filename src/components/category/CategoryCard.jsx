import React from "react";
import { Link } from "react-router-dom/";

function CategoryCard({ category, handleClose }) {
  return (
    <div>
      <Link
        to={`/shop/${
          category.gender === "k"
            ? `kadin/${category.code.slice(2)}/${category.id}`
            : `erkek/${category.code.slice(2)}/${category.id}`
        }`}
        className="text-black hover:underline hover:text-white"
        onClick={handleClose}
      >
        {category?.title}
      </Link>
    </div>
  );
}

export default CategoryCard;
