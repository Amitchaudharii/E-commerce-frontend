import React from "react";
import CartItem from "../../components/Cart/CartItem";
import { useCartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cart } = useCartContext();
  console.log(cart);
  return (
    <>
      <div className="container mx-auto py-32">
        <div className="w-3/4">
          <div className="w-full border border-gray-300 rounded">
            <div className="flex justify-around border-b border-gray-300 py-3">
              <span className="font-[500] text-base">Product</span>
              <span className="font-[500] text-base">Price</span>
              <span className="font-[500] text-base">Quantity</span>
              <span className="font-[500] text-base">SubTotal</span>
            </div>
            <div>
              {cart &&
                cart.map((value) => {
                  return <CartItem key={value.id} {...value} />;
                })}
            </div>
          </div>
        </div>
        <div className="w-1/4"></div>
      </div>
    </>
  );
};

export default Cart;
