import React from "react";
import { FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import FormatPrice from "../../Helpers/FormatPrice";
import CartAmountToggle from "../SingleProduct/CartAmountToggle";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeItem, setDecrease, setIncrement } = useCartContext();

  return (
    <>
      <div className="grid grid-cols-4 py-5 border-b border-gray-300">
        <div className="flex justify-start items-center gap-5 ml-10">
          <div>
            <button>
              <FaTrash
                className="hover:text-[#ff6000]"
                onClick={() => removeItem(id)}
              />
            </button>
          </div>
          <div>
            <NavLink to={`/singleproduct/${id}`}>
              <img src={image} alt={id} className="w-16" />
            </NavLink>
          </div>
          <div>
            <NavLink to={`/singleproduct/${id}`}>
              <span className="text-base hover:text-[#ff6000]">{name}</span>
            </NavLink>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <FormatPrice price={price} />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <CartAmountToggle
              amount={amount}
              setDecrease={() => setDecrease(id)}
              setIncrease={() => setIncrement(id)}
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <FormatPrice price={price * amount} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
