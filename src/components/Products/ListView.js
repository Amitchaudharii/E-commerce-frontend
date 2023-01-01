import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../../Helpers/FormatPrice";
import Star from "../../Helpers/Star";

const ListView = ({ products }) => {
  return (
    <>
      <div className="grid gap-10">
        {products &&
          products.map((value, index) => {
            return (
              <div
                key={index}
                className="flex grid-col items-center justify-center gap-5 w-full h-[400px] border border-gray-300 rounded p-5"
              >
                <div className="w-1/3">
                  <figure>
                    <NavLink to={`/singleproduct/${value.id}`}>
                      <img
                        src={value.image}
                        alt="products"
                        className="w-full"
                      />
                    </NavLink>
                  </figure>
                </div>
                <div className="flex flex-col items-start justify-center w-2/3 h-full border-l border-gray-300 pl-5">
                  <h1>
                    <NavLink
                      to={`/singleproduct/${value.id}`}
                      className="text-2xl font-[500] text-[#252525] hover:text-[#ff6000] transition-all"
                    >
                      {value.name}
                    </NavLink>
                  </h1>
                  <div className="flex gap-5 mt-3">
                    <span className="text-[#ff6600] text-base">
                      <FormatPrice price={value.price} />
                    </span>

                    <span className="text-[#000]/50 text-base line-through">
                      <FormatPrice price={value.price + 20000} />
                    </span>
                  </div>
                  <div>
                    <Star stars={value.stars} review={value.reviews} />
                  </div>
                  <p className="text-base text-[#000]/50 mb-5">
                    {value.description}
                  </p>
                  <div className="flex flex-col gap-2 mb-5">
                    <span className="text-sm text-[#000]/50 capitalize">
                      category:{" "}
                      <span className="text-sm text-[#ff6000]">
                        {value.category}
                      </span>
                    </span>
                  </div>
                  <NavLink
                    to={`/singleproduct/${value.id}`}
                    className="text-base text-[#0465d2] hover:text-[white] hover:bg-[#0465d2] border border-[#0465d2] hover:border-[white] py-2 px-20 uppercase transition-all"
                  >
                    read more
                  </NavLink>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ListView;
