import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../../context/ProductContext";
import FormatPrice from "../Helpers/FormatPrice";
import PageNavigation from "./PageNavigation";
import ProductImages from "./ProductImages";

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const [numOfProduct, setNumOfProduct] = useState(1);
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
              <span>{stars}</span>
              <span>{reviews}</span>
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
            <div className="flex flex-col gap-2 border-b border-gray-400 mb-5">
              <span className="text-base text-[#000]/50 capitalize">
                ordered: <span className="text-[#ff6000] font-bold">10</span>
              </span>
              <span className="text-base text-[#000]/50 capitalize">
                items available:{" "}
                <span className="text-[#ff6000] font-bold">{stock}</span>
              </span>
            </div>
            <div className="flex items-center justify-start gap-3">
              <div className="flex justify-between items-center border border-[#000]/50 rounded w-[120px]">
                <button
                  onClick={() => {
                    setNumOfProduct(
                      numOfProduct > 1 ? numOfProduct - 1 : numOfProduct
                    );
                  }}
                  className="text-[#000]/50 py-3 px-5"
                >
                  -
                </button>
                <span className="text-base text-[#000]/50 px-2">
                  {numOfProduct}
                </span>
                <button
                  onClick={() => {
                    setNumOfProduct(numOfProduct + 1);
                  }}
                  className="text-[#000]/50 py-3 px-5"
                >
                  +
                </button>
              </div>
              <button className="bg-[#ff6000] text-white text-base font-[500] px-16 py-3 uppercase rounded">
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
