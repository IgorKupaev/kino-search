import React from "react";
import { A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { useAppSelector } from "@/redux/hooks";
import Selectors from "@/redux/selectors";

import styles from './MainSlider.module.scss';
import "swiper/css";
import "swiper/css/navigation";

const Slider = (): JSX.Element => {
  const wallpapersLinks = useAppSelector(Selectors.premiers.wallpapersLinks);
  
  return (
    <Swiper spaceBetween={0} slidesPerView={1} modules={[Navigation, A11y, Autoplay]} navigation autoplay>
      {wallpapersLinks?.map((link) => (
        <SwiperSlide key={link}>
          <div className={styles.listItemContainer}>
            <Image priority fill src={link} alt="film" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
