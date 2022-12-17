import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { smartitemsData } from "../../Data/SmartItemsData";

const SmartItems = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 mx-3 md:mx-0">
          {smartitemsData.map((value, index) => {
            return (
              <div
                key={index}
                className="w-full h-full border border-gray-300 rounded-[2px]"
              >
                <div className="relative">
                  <img
                    src={`./Images/${value.image}`}
                    alt=""
                    className="bg-cover bg-center bg-no-repeat w-full"
                  />
                  <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-around pl-5">
                    <div>
                      <span className="text-base text-[#252525] uppercase font-[500]">
                        {value.dispercent} Discount
                      </span>
                      <h1 className="text-3xl text-[#252525]  font-[500]">
                        {value.title}
                      </h1>
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
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SmartItems;
