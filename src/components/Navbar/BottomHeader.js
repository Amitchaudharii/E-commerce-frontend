import React from "react";
import { NavLink } from "react-router-dom";

const BottomHeader = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-[#0465d2] px-[80px]">
        <div className="bg-[#035dc3]">
          <select
            name="categorie"
            className="text-[0.9rem] font-semibold border-none text-white p-[30px] bg-transparent cursor-pointer outline-none"
          >
            <option value="all" className="text-black">
              ALL CATEGORIES
            </option>
            <option value="food" className="text-black">
              Food
            </option>
            <option value="fashion" className="text-black">
              Fishion
            </option>
            <option value="electric" className="text-black">
              Electric
            </option>
          </select>
        </div>
        <div className="">
          <nav>
            <ul className="flex">
              <li className="mx-1">
                <NavLink
                  to="/"
                  className="text-[0.9rem] font-semibold text-white uppercase py-[10px] px-[8px] rounded"
                >
                  home
                </NavLink>
              </li>
              <li className="mx-1">
                <NavLink
                  to="/"
                  className="text-[0.9rem] font-semibold text-white uppercase py-[10px] px-[8px] rounded"
                >
                  categories
                </NavLink>
              </li>
              <li className="mx-1">
                <NavLink
                  to="/"
                  className="text-[0.9rem] font-semibold text-white uppercase py-[10px] px-[8px] rounded"
                >
                  shop
                </NavLink>
              </li>
              <li className="mx-1">
                <NavLink
                  to="/"
                  className="text-[0.9rem] font-semibold text-white uppercase py-[10px] px-[8px] rounded"
                >
                  pages
                </NavLink>
              </li>
              <li className="mx-1">
                <NavLink
                  to="/"
                  className="text-[0.9rem] font-semibold text-white uppercase py-[10px] px-[8px] rounded"
                >
                  special
                </NavLink>
              </li>
              <li className="mx-1">
                <NavLink
                  to="/"
                  className="text-[0.9rem] font-semibold text-white uppercase py-[10px] px-[8px] rounded"
                >
                  store list
                </NavLink>
              </li>
              <li className="mx-1">
                <NavLink
                  to="/"
                  className="text-[0.9rem] font-semibold text-white uppercase py-[10px] px-[8px] rounded"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default BottomHeader;
