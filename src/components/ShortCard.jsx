import React from "react";

const ShortCard = ({ category }) => {
  const { name, img_url } = category;

  return (
    <div className="w-11/12 mx-auto">
      <div className="card bg-[#f9f8f6] w-28 h-36 shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-[#f5e6e8] overflow-hidden border-0 transition-all duration-300">
        <figure className="px-2 pt-2">
          <img src={img_url} className="rounded-xl w-full mt-2 h-24 object-cover" />
        </figure>
        <div className="card-body items-center text-center p-2">
          <h2 className="card-title text-xs leading-tight font-bold">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default ShortCard;
