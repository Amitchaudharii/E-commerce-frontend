import React from "react";
import { specialdisdata } from "../../Data/SpecialDisData";

const SpecialDis = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-20 mx-3 md:mx-0">
          {specialdisdata.map((value, index) => {
            return (
              <div key={index} className="w-full h-full">
                <div className="relative">
                  <img
                    src={`./Images/${value.image}`}
                    alt=""
                    className="bg-cover bg-center bg-no-repeat w-full"
                  />
                  <div className="w-full h-full absolute top-0 left-0 flex flex-col justify-around pl-5">
                    <div>
                      <span className="text-base text-[#252525] uppercase font-[500]">
                        {value.categories}
                      </span>
                      <h1 className="text-2xl text-[#252525]  font-[500]">
                        {value.title}
                      </h1>
                    </div>
                    <div>
                      <span className="text-base text-gray-500 font-[500]">
                        {value.pricedistitle}
                      </span>
                      <div className="flex items-center gap-5">
                        <span className="text-2xl text-[#ff6000] font-[500]">
                          {value.orgprice}
                        </span>
                        <span className="text-xl text-gray-500 font-[500] line-through">
                          {value.disprice}
                        </span>
                      </div>
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

export default SpecialDis;
