import React from "react";
import { Link } from "react-router-dom/";

function CategoryCard({ category }) {
  return (
    <div>
      <Link
        to={`/shop/${
          category.gender === "k"
            ? `kadin/${category.code.slice(2)}`
            : `erkek/${category.code.slice(2)}`
        }`}
      >
        {category?.title}
      </Link>
    </div>
  );
}

export default CategoryCard;
