import React, { use } from "react";
import { NavLink } from "react-router";
import ShortCard from "./ShortCard";
import Marquee from "react-fast-marquee";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const AllCategories = () => {
  const categories = use(categoryPromise);

  return (
    <>
      <div className="font-bold text-xl py-10 bg-[#]">
        Search <span className="text-[#ef233c]">Toys</span> by Categories{" "}
        <span className="text-[#2a9d8f]">({categories.length})</span>
      </div>

      <Marquee gradient={false} speed={50}>
        <div className="flex gap-8">
          {categories.map((category) => (
            <NavLink
              to={`/categories/${category.id}`}
              key={category.id}
              className="focus:outline-none"
            >
              <ShortCard category={category} />
            </NavLink>
          ))}
        </div>
      </Marquee>
    </>
  );
};

export default AllCategories;
