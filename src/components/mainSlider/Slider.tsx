import React from "react";
import { A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import Selectors from "@/redux/Selectors";
import { useAppSelector } from "@/redux/hooks";

import 'swiper/css';
import 'swiper/css/navigation';
import { CircularProgress } from "@mui/material";

const Slider = (): JSX.Element => {
  const wallpapersLinks = useAppSelector(Selectors.wallpapersLinks);

  if (!wallpapersLinks || wallpapersLinks.length === 0) {
    return <h1 style={{ color: '#fff' }}><CircularProgress /></h1>
  }

  return (
    <Swiper spaceBetween={0} slidesPerView={1} modules={[Navigation, A11y, Autoplay]} navigation autoplay>
      {wallpapersLinks?.map((link) => (
        <SwiperSlide key={link}>
          <div style={{ height: 1236, position: "relative" }}>
            <Image priority fill src={link} alt="film" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
