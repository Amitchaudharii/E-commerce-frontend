import React from "react";
import { Link } from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center py-20 bg-gray-100">
        <span className="text-5xl text-[#000]/80 font-[500] uppercase">
          shop
        </span>
        <ul className="flex items-center justify-center gap-5 bg-white py-3 px-10 mt-5 rounded-full">
          <li>
            <Link
              to="/"
              className="text-base text-[#000]/50 hover:text-[#ff6000] font-[500] capitalize"
            >
              home
            </Link>
          </li>
          <span className="bg-[#000]/50 w-2 h-2 rounded-full"></span>
          <li>
            <Link
              to="/"
              className="text-base text-[#000]/50 hover:text-[#ff6000] font-[500] capitalize"
            >
              Products
            </Link>
          </li>
          <span className="bg-[#000]/50 w-2 h-2 rounded-full"></span>
          <li>
            <Link
              to="/"
              className="text-base text-[#ff6000] font-[500] capitalize"
            >
              {title}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default PageNavigation;
