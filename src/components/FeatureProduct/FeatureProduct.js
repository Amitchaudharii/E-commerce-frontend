import React from "react";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { useProductContext } from "../../context/ProductContext";
import { featureProductsSettings } from "../../Data/SliderData";
import FormatPrice from "../../Helpers/FormatPrice";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();
  if (isLoading) {
    return <div>....Loading</div>;
  }
  return (
    <>
      <div className="container mx-auto">
        <div className="py-10">
          <h1 className="text-3xl capitalize font-[500] mb-5">
            featured Products
          </h1>

          {/* Content */}
          <Slider {...featureProductsSettings}>
            {featureProducts &&
              featureProducts.map((value, index) => {
                return (
                  <NavLink
                    key={index}
                    to={`/singleproduct/${value.id}`}
                    className="py-2"
                  >
                    <div className="mx-2 p-1 hover:shadow rounded-sm">
                      {/* img section */}
                      <div className="relative">
                        <img
                          src={value.image}
                          alt="feature images"
                          className=""
                        />
                        <div className="absolute top-5 left-0 flex flex-col gap-3">
                          <div>
                            {value.category ? (
                              <span className="bg-[#ff6000] inline-block text-xs text-white font-semibold px-3 py-[2px] rounded">
                                {value.category}
                              </span>
                            ) : null}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-3">
                        <span className="text-lg text-[#000]/90 font-[500]">
                          {value.name}
                        </span>
                        <div className="flex gap-2 mx-2">
                          <span className="text-[#000]/60 text-base font-[500]">
                            <FormatPrice price={value.price} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                );
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
