import React, { useState, useEffect, useContext } from "react";
import Products from "../fake-data/all-products";
import { CategoryContext } from "../context";

const Product = () => {
  const { data } = useContext(CategoryContext);
  const originalString = data;
  const category = originalString.substring(6);//remove the "fake:" part of the category sreing
  const filteredProducts = Products.filter(
    (product) => product.category === category
  );
  return (
    <div className="my-5 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-3">
        {filteredProducts.map((product, index) => (
          <div
            className="flex flex-col items-center hover:border-2 rounded cursor-pointer"
            key={index}
          >
            <img
              src={product.image}
              alt={product.title}
              className="max-w-[250px] h-[300px] object-contain"
            />
            <p className="truncate w-60 mt-3">{product.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
