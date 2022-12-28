import React from "react";
import Product from "../FeatureProduct/Product";

const GridView = ({ products }) => {
  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {products &&
          products.map((value, index) => {
            return <Product key={index} {...value} />;
          })}
      </div>
    </>
  );
};

export default GridView;
