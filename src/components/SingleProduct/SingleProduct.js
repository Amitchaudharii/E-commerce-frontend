import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../Context/Product_Context";
import FormatPrice from "../../Helpers/FormatPrice";
import AddToCart from "./AddToCart";
import ColorsPick from "./ColorsPick";
import PageNavigation from "../NavigationSection/PageNavigation";
import ProductImages from "./ProductImages";
import Star from "./Star";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { id } = useParams();

  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  // Data Destructuring
  const {
    id: ids,
    name,
    comapany,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <PageNavigation title={name} />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 my-20">
          <div>
            <ProductImages imgs={image} />
          </div>
          <div>
            <div className="flex gap-3 mb-4">
              <span className="bg-gray-100 py-2 px-3 text-[#000]/80 text-sm rounded">
                Discount
              </span>
              <span className="bg-gray-100 py-2 px-3 text-[#000]/80 text-sm rounded">
                {stock > 0 ? `${stock} In Stock` : "Out Of Stock"}
              </span>
              <span className="bg-[#f7ba01] py-2 px-3 text-[#000]/80 text-sm rounded">
                10%
              </span>
            </div>
            <h1 className="text-4xl font-[500]">{name}</h1>
            <div>
              <Star stars={stars} review={reviews} />
            </div>
            <div className="flex gap-5 my-3">
              <span className="text-[#ff6600] text-2xl font-bold">
                <FormatPrice price={price} />
              </span>

              <span className="text-[#000]/50 text-xl font-bold line-through">
                <FormatPrice price={price + 20000} />
              </span>
            </div>
            <p className="text-base text-[#000]/50 mb-5">{description}</p>
            <div className="flex flex-col gap-2 border-b border-gray-400 mb-5 pb-5">
              <span className="text-base text-[#000]/50 capitalize">
                ordered: <span className="text-[#ff6000] font-bold">10</span>
              </span>
              <span className="text-base text-[#000]/50 capitalize">
                items available:{" "}
                <span className="text-[#ff6000] font-bold">{stock}</span>
              </span>
              {/* <ColorsPick product={singleProduct} /> */}
            </div>
            <AddToCart product={singleProduct} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
