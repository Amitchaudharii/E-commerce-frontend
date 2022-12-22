import React from "react";
import Product from "../FeatureProduct/Product";

const GridView = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-3">
        {products &&
          products.map((value, index) => {
            return <Product key={index} {...value} />;
          })}
      </div>
    </>
  );
};

export default GridView;
