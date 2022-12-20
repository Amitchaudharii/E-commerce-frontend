import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const ColorsPick = ({ product }) => {
  const { colors } = product;

  const [color, setColor] = useState(colors[0]);
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
    </>
  );
};

export default ColorsPick;
