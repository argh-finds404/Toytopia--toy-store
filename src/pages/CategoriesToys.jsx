import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

const CategoriesToys = () => {
  const { id } = useParams();
  const data = useLoaderData();
  // console.log(id,data);
  const [categoryToys, setCategoryToys] = useState([]);

  useEffect(() => {
    const filteredToys = data.filter((toy) => toy.categoryId == id);
    console.log(filteredToys);
    setCategoryToys(filteredToys);
  }, [data, id]);
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm text-gray-500 font-semibold">Trending Now</p>
        <h2 className="text-4xl font-bold text-gray-700">
          <span className="text-[#fca311]">Best Selling </span>
          Products...
        </h2>
      </div>
      {/* categories Toys-{id} */}
      total {categoryToys.length} toys found
    </div>
  );
};

export default CategoriesToys;
