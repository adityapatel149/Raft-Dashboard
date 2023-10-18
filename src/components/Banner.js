import React from "react";
import BannerItem from "./BannerItem";

const Banner = () => {
  return (
    <div className="banner bg-[#6E62E5] w-full flex flex-col xl:flex-row gap-10 xl:justify-between items-start self-stretch pl-10 pr-6 py-[2.125rem] rounded-[1.25rem]">
      <BannerItem
        title="Monthly Revenue"
        price="3.500"
        pill="+2.4%"
        prev="1.7k"
      />
      <BannerItem
        title="Monthly Sales"
        price="6.750"
        pill="+1.4%"
        prev="3.1k"
      />
      <BannerItem
        title="Total Profit"
        price="10.900"
        pill="+4.3%"
        prev="8.9k"
      />
    </div>
  );
};

export default Banner;
