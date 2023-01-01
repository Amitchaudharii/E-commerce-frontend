import React from "react";
import { NavLink } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { IoIosGitCompare } from "react-icons/io";
import { BsHeart } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { useCartContext } from "../../Context/CartContext";

const TopHeader = () => {
  const { total_item } = useCartContext();
  return (
    <>
      <div className="flex items-center justify-between py-[20px] px-[80px]">
        <div className="flex items-center gap-2">
          <NavLink to="/">
            <img
              src="./Images/logo.png"
              alt=""
              className="bg-blue-600 w-[50px] p-1 rounded"
            />
          </NavLink>
          <span className="font-bold text-[#f7ba01] uppercase text-xl">
            Store
          </span>
        </div>
        <div className="flex items-center gap-10">
          <form
            role="search"
            action="http://localhost:3000/"
            className="flex items-center border border-[#000]/3 rounded-sm"
          >
            <input
              type="search"
              placeholder="Search for your item type..."
              className="w-[400px] p-[10px] border-none outline-none"
            />
            <select
              name="produdt-cat"
              id="select"
              className="text-[#000]/6 w-[150px] p-[10px] border-l border-[#000]/3 outline-none "
            >
              <option value="all">All category</option>
              <option value="food">Food</option>
              <option value="fashion">Fashion</option>
              <option value="electric">Electric</option>
            </select>
            <button
              type="submit"
              className="text-white text-base py-[15px] px-[20px] cursor-pointer transition-all bg-[#f7ba01] hover:bg-[#e7af08] rounded"
            >
              <BsSearch />
            </button>
          </form>

          <div className="">
            <ul className="flex">
              <li>
                <NavLink
                  to="/"
                  className="text-[1.2rem] text-black flex items-center mx-1 p-2 hover:bg-[#f3f1f1] rounded"
                >
                  <BsPerson />
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to="/"
                  className="text-[1.2rem] text-black flex items-center mx-1 p-2 hover:bg-[#f3f1f1] rounded"
                >
                  <IoIosGitCompare className="compare-icons" />
                  <span className="flex justify-center items-center text-[0.7rem] absolute top-0 right-0 w-[18px] h-[18px] bg-[#f7ba01] rounded-full">
                    0
                  </span>
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to="/"
                  className="text-[1.2rem] text-black flex items-center mx-1 p-2 hover:bg-[#f3f1f1] rounded"
                >
                  <BsHeart className="whishlist-icons" />
                  <span className="flex justify-center items-center text-[0.7rem] absolute top-0 right-0 w-[18px] h-[18px] bg-[#f7ba01] rounded-full">
                    0
                  </span>
                </NavLink>
              </li>
              <li className="relative">
                <NavLink
                  to="/cart"
                  className="text-[1.2rem] text-black flex items-center mx-1 p-2 hover:bg-[#f3f1f1] rounded"
                >
                  <BsBag className="cart-icons" />
                  <span className="flex justify-center items-center text-[0.7rem] absolute top-0 right-0 w-[18px] h-[18px] bg-[#f7ba01] rounded-full">
                    {total_item}
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
