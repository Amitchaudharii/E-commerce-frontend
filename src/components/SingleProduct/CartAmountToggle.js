import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="flex justify-between items-center border border-[#000]/50 rounded w-[120px]">
      <button
        onClick={() => setDecrease()}
        className="text-[#000]/50 py-3 px-5"
      >
        {/* <FaMinus /> */}-
      </button>
      <span className="text-base text-[#000]/50 px-2">{amount}</span>
      <button
        onClick={() => setIncrease()}
        className="text-[#000]/50 py-3 px-5"
      >
        {/* <FaPlus /> */}+
      </button>
    </div>
  );
};

export default CartAmountToggle;
