import React from "react";
import { BsArrowRight } from "react-icons/bs";

const AdSection = () => {
  return (
    <>
      <div className="grid grid-cols-1 mb-10">
        <div className="relative w-full h-[300px] rounded-[2px] overflow-hidden">
          <div className="">
            <img
              src="./Images/banner-1.jpg"
              alt=""
              className="bg-cover bg-center bg-no-repeat w-full"
            />
            <div className="w-1/2 h-full absolute top-0 left-0 flex flex-col justify-around pl-5">
              <div>
                <span className="text-sm text-[#252525]/60 uppercase font-[500]">
                  BUILD WITH ELEMENTOR
                </span>
                <h1 className="text-3xl text-[#252525]  font-[500] py-5">
                  Modern Technology Products
                </h1>
                <p className="text-sm text-[#252525]/60  font-[500]">
                  We’ve gathered all of the features that you might need in
                  order to make your store online in this theme.
                </p>
              </div>
              <div>
                <button className="text-base font-[500] text-white bg-gray-800 px-8 py-3 rounded uppercase flex items-center gap-4">
                  Shop Now{" "}
                  <span className="text-xl">
                    <BsArrowRight />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdSection;
