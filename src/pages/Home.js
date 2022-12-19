import React from "react";
import HeroSection from "../components/Slider/HeroSection";
import SpecialDis from "../components/DiscountComponents/SpecialDis";
import SmartItems from "../components/DiscountComponents/SmartItems";
import POW from "../components/ProductOfTheWeek/POW";
import FeatureProducts from "../components/FeatureProduct/FeatureProduct";

const Home = () => {
  return (
    <>
      <HeroSection />
      <SpecialDis />
      <POW />
      <SmartItems />
      <FeatureProducts />
    </>
  );
};

export default Home;
