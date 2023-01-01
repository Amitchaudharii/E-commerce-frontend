import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../Helpers/FormatPrice";

const Product = (value) => {
  const { id, name, image, price, category } = value;

  return (
    <NavLink to={`/singleproduct/${id}`} className="py-2">
      <div className="p-1 hover:shadow rounded-sm">
        {/* img section */}
        <div className="relative">
          <img src={image} alt="feature images" className="" />
          <div className="absolute top-5 left-0 flex flex-col gap-3">
            <div>
              {category ? (
                <span className="bg-[#ff6000] inline-block text-xs text-white font-semibold px-3 py-[2px] rounded-sm capitalize">
                  {category}
                </span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-lg text-[#000]/90 font-[500]">{name}</span>
          <div className="flex gap-2 mx-2">
            <span className="text-[#000]/60 text-base font-[500]">
              <FormatPrice price={price} />
            </span>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
