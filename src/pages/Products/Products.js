import React from "react";
import FillterSection from "../../components/Products/FillterSection";
import PageNavigation from "../../components/NavigationSection/PageNavigation";
import ProductsSection from "../../components/Products/ProductsSection";
// import AdSection from "../../components/Products/AdSection";
import Sorting from "../../components/Products/Sorting";

const Products = () => {
  return (
    <>
      <PageNavigation title={""} />
      <div className="container mx-auto">
        <div className="flex gap-5 mt-10">
          {/* side fillter */}
          <div className="w-1/4">
            <FillterSection />
          </div>
          {/* main section */}
          <div className="w-3/4">
            {/* <AdSection /> */}
            <Sorting />
            <ProductsSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
