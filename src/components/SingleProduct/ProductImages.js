import React, { useState } from "react";

const ProductImages = ({ imgs = [{ url: "" }] }) => {
  const [mainImg, setMainImg] = useState(imgs[0]);
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-5 p-10">
        <div>
          <img
            src={mainImg.url}
            alt={mainImg.filename}
            className="w-4/5 mx-auto"
          />
        </div>
        <div className="flex items-center justify-center gap-5">
          {imgs &&
            imgs.map((value, index) => {
              return (
                <figure>
                  <img
                    src={value.url}
                    alt={value.filename}
                    key={index}
                    onClick={() => setMainImg(value)}
                  />
                </figure>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ProductImages;
