import React from "react";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import FormatPrice from "../../Helpers/FormatPrice";
import CartAmountToggle from "../SingleProduct/CartAmountToggle";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { setDecrease, setIncrement } = useCartContext();

  return (
    <>
      <div className="flex justify-around py-5 border-b border-gray-300">
        <div className="flex gap-2">
          <div>
            <img src={image} alt={id} className="w-10" />
          </div>
          <div>
            <NavLink to={`/singleproduct/${id}`}>
              <span className="text-base hover:text-[#ff6000]">{name}</span>
            </NavLink>
          </div>
        </div>
        <div>
          <div>
            <FormatPrice price={price} />
          </div>
        </div>
        <div>
          <div>
            <CartAmountToggle
              amount={amount}
              setDecrease={setDecrease}
              setIncrease={setIncrement}
            />
          </div>
        </div>
        <div>
          <div>
            <FormatPrice price={price * amount} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
