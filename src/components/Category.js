import React, { useState, useContext } from "react";
import categoryTitles from "../fake-data/all-categories";
import { CategoryContext } from "../context";

function Category() {
  const { setData } = useContext(CategoryContext);
  const [selectedCategory, setSelectedCategory] = useState(categoryTitles[0]);

  const handleClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setData(categoryName);
  };

  return (
    <div className="my-5 mx-auto">
      <div className="flex flex-wrap justify-center gap-4 md:gap-8  mx-4 text-gray-900 font-medium">
        {categoryTitles.map((title, index) => (
          <div
            key={index}
            className={`bg-gray-100 p-2 rounded cursor-pointer ${
              selectedCategory === title
                ? "bg-gray-600 text-[1.1rem] text-white font-medium"
                : "hover:bg-gray-400"
            }`}
            onClick={() => handleClick(title)}
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
