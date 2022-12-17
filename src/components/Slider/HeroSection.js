import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Slider Data Import
import { sliders, sliderSettings } from "../../Data/SliderData";

const HeroSection = () => {
  return (
    <>
      <Slider {...sliderSettings}>
        {sliders &&
          sliders.map((value, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center outline-none relative"
              >
                <img
                  src={value.image}
                  alt={value.alt}
                  className="h-[90vh] w-full object-cover object-center bg-cover bg-no-repeat bg-center"
                />
                <div className="absolute left-10 md:left-20 bottom-40">
                  <div>
                    <h1 className="text-6xl md:text-9xl font-bold text-white">
                      {value.heading01}
                    </h1>
                    <h1 className="text-6xl md:text-9xl font-bold text-white">
                      {value.heading02}
                    </h1>
                  </div>
                  <button className="bg-[#ff6000] text-white font-bold cursor-pointer text-[19px] py-[13px] px-[27px] rounded">
                    {value.button}
                  </button>
                </div>
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export default HeroSection;
