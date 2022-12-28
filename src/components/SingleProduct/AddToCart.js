import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import CartAmountToggle from "./CartAmountToggle";

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product;

  const { addToCart } = useCartContext();

  const [color, setColor] = useState(colors && colors[0]);
  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };
  return (
    <>
      <div className="flex items-center justify-start">
        <p className="flex items-center justify-start gap-2 text-base text-[#000]/50 capitalize">
          Color:
          {colors &&
            colors.map((value, index) => {
              return (
                <button
                  key={index}
                  style={{ backgroundColor: value }}
                  className={
                    color === value
                      ? "flex items-center justify-center w-[1.5rem] h-[1.5rem] bg-black rounded-full order-none outline-none cursor-pointer hover:opacity-100 opacity-100"
                      : "flex items-center justify-center w-[1.5rem] h-[1.5rem] bg-black rounded-full order-none outline-none opacity-50 cursor-pointer hover:opacity-100 "
                  }
                  onClick={() => setColor(value)}
                >
                  {color === value ? (
                    <FaCheck className="text-base text-white" />
                  ) : null}
                </button>
              );
            })}
        </p>
      </div>
      <div className="flex items-center justify-start gap-3">
        <CartAmountToggle
          amount={amount}
          setDecrease={setDecrease}
          setIncrease={setIncrease}
        />

        <NavLink
          to="/cart"
          className="bg-[#ff6000] text-white text-base font-[500] px-16 py-3 uppercase rounded"
          onClick={() => addToCart(id, color, amount, product)}
        >
          add to cart
        </NavLink>
      </div>
    </>
  );
};

export default AddToCart;
