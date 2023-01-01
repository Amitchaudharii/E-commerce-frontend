import React, { useState } from "react";
import Slider from "react-slick";
import { products, ProductsliderSettings } from "../../Data/SliderData";

const POW = () => {
  const [activeStatus, setActiveStatus] = useState(1);

  return (
    <>
      <div className="container mx-auto">
        <div>
          <h1 className="text-3xl capitalize font-[500]">
            products of the week
          </h1>
          <div className="w-full h-12 my-3">
            <ul className="flex gap-5">
              <li
                onClick={() => setActiveStatus(1)}
                className={
                  activeStatus === 1
                    ? "text-sm border-[#ff6000] pt-3 rounded-t text-[#ff6000]"
                    : "text-sm text-gray-500 py-3 flex items-center hover:text-[#ff6000] cursor-pointer"
                }
              >
                <div className="flex items-center mb-3">
                  <span className="ml-1 font-semibold">Trend</span>
                </div>
                {activeStatus === 1 && (
                  <div className="w-full h-[2px] bg-[#ff6000] rounded-sm" />
                )}
              </li>
              <li
                onClick={() => setActiveStatus(2)}
                className={
                  activeStatus === 2
                    ? "text-sm border-[#ff6000] pt-3 rounded-t text-[#ff6000]"
                    : "text-sm text-gray-500 py-3 flex items-center hover:text-[#ff6000] cursor-pointer"
                }
              >
                <div className="flex items-center mb-3">
                  <span className="ml-1 font-semibold">Hot Sell</span>
                </div>
                {activeStatus === 2 && (
                  <div className="w-full h-[2px] bg-[#ff6000] rounded-sm" />
                )}
              </li>
              <li
                onClick={() => setActiveStatus(3)}
                className={
                  activeStatus === 3
                    ? "text-sm border-[#ff6000] pt-3 rounded-t text-[#ff6000]"
                    : "text-sm text-gray-500 py-3 flex items-center hover:text-[#ff6000] cursor-pointer"
                }
              >
                <div className="flex items-center mb-3">
                  <span className="ml-1 font-semibold">Featured</span>
                </div>
                {activeStatus === 3 && (
                  <div className="w-full h-[2px] bg-[#ff6000] rounded-sm" />
                )}
              </li>
              <li
                onClick={() => setActiveStatus(4)}
                className={
                  activeStatus === 4
                    ? "text-sm border-[#ff6000] pt-3 rounded-t text-[#ff6000]"
                    : "text-sm text-gray-500 py-3 flex items-center hover:text-[#ff6000] cursor-pointer"
                }
              >
                <div className="flex items-center mb-3">
                  <span className="ml-1 font-semibold">Best Seller</span>
                </div>
                {activeStatus === 4 && (
                  <div className="w-full h-[2px] bg-[#ff6000] rounded-sm" />
                )}
              </li>
            </ul>
          </div>
          {/* Content */}
          <Slider {...ProductsliderSettings}>
            {products &&
              products.map((value, index) => {
                return (
                  <div key={index} className="py-4">
                    <div className="mx-2 p-1 hover:shadow rounded-sm">
                      {/* img section */}
                      <div className="relative">
                        <img src={value.image} alt={value.alt} className="" />
                        <div className="absolute top-5 left-0 flex flex-col gap-3">
                          <div>
                            {value.brand ? (
                              <span className="bg-[#ff6000] inline-block text-xs text-white font-semibold px-3 py-[2px] rounded">
                                {value.brand}
                              </span>
                            ) : null}
                          </div>
                          <div>
                            {value.dispercent ? (
                              <span className="bg-[#f7ba01] inline-block text-xs text-white font-semibold px-3 py-[2px] rounded">
                                {value.dispercent}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span className="text-lg text-[#000]/90 font-[500]">
                          {value.title}
                        </span>
                        <div className="flex gap-2 mx-2">
                          <span className="text-[#000]/60 text-base font-[500]">
                            ${value.orgprice}
                          </span>
                          <del>
                            {value.dispercent ? (
                              <span className="text-[#000]/60 text-base font-[500]">
                                ${value.disprice}
                              </span>
                            ) : null}
                          </del>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default POW;
