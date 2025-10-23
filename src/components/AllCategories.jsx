import React from "react";
import { NavLink } from "react-router-dom";
import ShortCard from "./ShortCard";
import Marquee from "react-fast-marquee";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const AllCategories = () => {
  const categories = React.use(categoryPromise);

  return (
    <>
      <div className="font-bold text-xl py-10 text-center">
        Search <span className="text-[#ef233c]">Toys</span> by Categories{" "}
        <span className="text-[#2a9d8f]">({categories.length})</span>
      </div>

      <Marquee gradient={false} speed={50}>
        <div className="flex gap-6 px-4">
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive &&
              !categories.find(
                (cat) => `/categories/${cat.id}` === window.location.pathname
              )
                ? "active focus:outline-none"
                : "focus:outline-none"
            }
          >
            <ShortCard
              category={{
                name: "Show All",
                img_url: "https://i.ibb.co/1Gr6n3dW/edu.webp",
              }}
            />
          </NavLink>

          {categories.map((category) => (
            <NavLink
              to={`/categories/${category.id}`}
              key={category.id}
              className={({ isActive }) =>
                isActive ? "active focus:outline-none" : "focus:outline-none"
              }
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
