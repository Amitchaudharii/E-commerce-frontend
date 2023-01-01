import React from "react";
import { BsFillGrid3X3GapFill, BsListUl } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useFilterContext } from "../../Context/FilterContext";

const Sorting = () => {
  const { Grid_View, setGridView, setListView, sorting } = useFilterContext();
  return (
    <>
      <div className="flex justify-between my-10">
        <div>
          <ul className="flex items-center">
            <li>
              <NavLink
                to="/"
                className="text-[#000]/80 capitalize text-sm mr-2"
              >
                home
              </NavLink>
            </li>
            <span className="text-[#000]/80 capitalize text-sm mr-2">/</span>
            <li>
              <span className="text-[#000]/50 capitalize text-sm">
                products
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <div className="">
            <button
              onClick={setListView}
              className={`border text-[#000]/40 text-lg rounded p-2 mr-5 ${
                Grid_View ? "border-[#000]/40" : "border-gray-900"
              }`}
            >
              <BsListUl />
            </button>
            <button
              onClick={setGridView}
              className={`border text-[#000]/40 text-lg rounded p-2 ${
                !Grid_View ? "border-[#000]/40" : "border-gray-900"
              }`}
            >
              <BsFillGrid3X3GapFill />
            </button>
          </div>
          <div>
            <div className="border border-gray-300 rounded p-1">
              <form action="#">
                <label htmlFor="sort"></label>
                <select
                  name="sort"
                  id="sort"
                  className="outline-none"
                  onClick={sorting}
                >
                  <option value="lowest">Price(lowest)</option>
                  <option value="#" disabled></option>
                  <option value="highest">Price(highest)</option>
                  <option value="#" disabled></option>
                  <option value="a-z">Price(a-z)</option>
                  <option value="#" disabled></option>
                  <option value="z-a">Price(z-a)</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sorting;
