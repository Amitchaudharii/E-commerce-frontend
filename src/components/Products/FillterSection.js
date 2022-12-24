import React from "react";
import { useFilterContext } from "../../Context/Filter_Context";

const FillterSection = () => {
  const {
    filters: { text, category, color },
    all_products,
    updateFilterValue,
  } = useFilterContext();

  const getUniqueData = (data, element) => {
    let newValue = data.map((value) => {
      return value[element];
    });

    if (element === "colors") {
      newValue = newValue.flat();
    }

    return (newValue = ["all", ...new Set(newValue)]);
  };

  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

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
          <div className="flex flex-col items-start gap-5">
            {categoryData.map((value, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={value}
                  className={value === category ? "active" : ""}
                  onClick={updateFilterValue}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text-xl text-[#252525] capitalize font-[500] mb-5">
            Companys
          </h2>
          <form action="#">
            <select
              name="company"
              id="company"
              className="filter-company--select"
              onClick={updateFilterValue}
            >
              {companyData.map((value, index) => {
                return (
                  <option key={index} value={value} name="company">
                    {value}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
        <div>
          <h2 className="text-xl text-[#252525] capitalize font-[500] mb-5">
            colors
          </h2>
          <div>
            {colorsData.map((value, index) => {
              if (value === "all") {
                return (
                  <button
                    key={index}
                    type="button"
                    value={value}
                    name="color"
                    className="color-all--style"
                    onClick={updateFilterValue}
                  >
                    alla
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  type="button"
                  name="color"
                  style={{ background: value }}
                  className={``}
                  value={value}
                  onClick={updateFilterValue}
                >
                  {value}
                </button>
              );
            })}
          </div>
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
