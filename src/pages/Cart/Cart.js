import React from "react";
import { NavLink } from "react-router-dom";
import CartItem from "../../components/Cart/CartItem";
import { useCartContext } from "../../Context/CartContext";
import FormatPrice from "../../Helpers/FormatPrice";

const Cart = () => {
  const { cart, clearCartData } = useCartContext();

  // For Cart Empty
  if (cart.length === 0) {
    return (
      <div className="container mx-auto">
        <div className="mt-32 flex flex-col justify-center gap-10">
          <div className="bg-gray-100 border-t-4 border-[#ff6000] p-5">
            <p>Your cart is currently empty...</p>
          </div>
          <div className="text-center">
            <NavLink
              to="/products"
              className="bg-[#ff6000] font-[500] px-10 py-3 uppercase text-base text-white rounded-sm"
            >
              return to shop
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto py-32">
        <div className="flex gap-5">
          <div className="w-[70%]">
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
              <div className="flex justify-between items-center px-10 py-3">
                <div>
                  <NavLink
                    to="/products"
                    className="bg-[#ff6000] font-[500] px-10 py-3 uppercase text-base text-white rounded-sm"
                  >
                    return to shop
                  </NavLink>
                </div>
                <div>
                  <button
                    onClick={clearCartData}
                    className="bg-rose-500 px-10 py-3 capitalize text-base text-white rounded-sm"
                  >
                    clear cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center w-[30%] h-[300px] bg-gray-100 px-5">
            <div className="flex flex-col">
              <h2 className="text-2xl text-[#252525] font-[500] mb-5">
                Cart totals
              </h2>
              <div className="border border-gray-300 rounded px-3 mb-5">
                <div className="flex justify-between border-b border-gray-300 py-3">
                  <span className="font-[500] text-base">Subtotal</span>
                  <FormatPrice price={200} />
                </div>
                <div className="flex justify-between py-3">
                  <span className="font-[500] text-base">Total</span>
                  <FormatPrice price={200} />
                </div>
              </div>
              <button className="bg-gray-800 hover:bg-[#ff6000] transition-all uppercase text-white py-3 font-[500] text-base rounded-md">
                proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
