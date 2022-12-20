import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const AddToCart = ({ product }) => {
  const { stock } = product;

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <div>
      <div className="flex items-center justify-start gap-3">
        <div className="flex justify-between items-center border border-[#000]/50 rounded w-[120px]">
          <button onClick={setDecrease} className="text-[#000]/50 py-3 px-5">
            -
          </button>
          <span className="text-base text-[#000]/50 px-2">{amount}</span>
          <button onClick={setIncrease} className="text-[#000]/50 py-3 px-5">
            +
          </button>
        </div>
        <NavLink
          to="/"
          className="bg-[#ff6000] text-white text-base font-[500] px-16 py-3 uppercase rounded"
        >
          add to cart
        </NavLink>
      </div>
    </div>
  );
};

export default AddToCart;
