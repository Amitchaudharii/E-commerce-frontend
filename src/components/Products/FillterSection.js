import React from "react";

const FillterSection = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div>
          <h2 className="text-xl text-[#252525] capitalize font-[500] mb-5">
            product categories
          </h2>
        </div>
        <div>
          <h2 className="text-xl text-[#252525] capitalize font-[500] mb-5">
            product Status
          </h2>
        </div>
        <div>
          <h2 className="text-xl text-[#252525] capitalize font-[500] mb-5">
            colors
          </h2>
        </div>
        <div>
          <h2 className="text-xl text-[#252525] capitalize font-[500] mb-5">
            filter by price
          </h2>
        </div>
      </div>
    </>
  );
};

export default FillterSection;
