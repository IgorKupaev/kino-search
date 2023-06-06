import React from "react";
import { A11y, Autoplay, Navigation } from "swiper";
import { Swiper } from "swiper/react";

import SliderItem from "./SliderItem";

import { useAppSelector } from "@/redux/hooks";
import Selectors from "@/redux/Selectors";

import "swiper/css";
import "swiper/css/navigation";

const Slider = (): JSX.Element => {
  const wallpapersLinks = useAppSelector(Selectors.wallpapersLinks);

  return (
    <Swiper spaceBetween={0} slidesPerView={1} modules={[Navigation, A11y, Autoplay]} navigation autoplay>
      {wallpapersLinks?.map((link) => (
        <SliderItem key={link} link={link} />
      ))}
    </Swiper>
  );
};

export default Slider;
