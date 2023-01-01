import React from "react";
import { useProductContext } from "../../Context/ProductContext";
import Product from "../Products/Product";

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
          <div className="grid grid-cols-3 gap-5">
            {featureProducts &&
              featureProducts.map((value, index) => {
                return <Product key={index} {...value} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
