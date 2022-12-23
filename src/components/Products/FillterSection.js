import React from "react";
import { useFilterContext } from "../../Context/FilterContext";

const FillterSection = () => {
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContext();
  return (
    <>
      <div className="flex flex-col gap-10">
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              placeholder="Search products"
              value={text}
              className="border border-gray-400 px-3 py-2 placeholder-[#000]/50 text[#000]/50 bg-white rounded text-base focus:outline-none focus:ring w-3/4 ease-linear transition-all duration-150"
              onChange={updateFilterValue}
            />
          </form>
        </div>
        <div>
          <h2 className="text-xl text-[#252525] capitalize font-[500] mb-5">
            product categories
          </h2>
        </div>
        <div>
          <h2 className="text-xl text-[#252525] capitalize font-[500] mb-5">
            product Status
          </h2>
        </div>
        <div>
          <h2 className="text-xl text-[#252525] capitalize font-[500] mb-5">
            colors
          </h2>
        </div>
        <div>
          <h2 className="text-xl text-[#252525] capitalize font-[500] mb-5">
            filter by price
          </h2>
        </div>
      </div>
    </>
  );
};

export default FillterSection;
