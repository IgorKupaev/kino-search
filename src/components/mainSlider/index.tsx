"use client"

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchPremiers, fetchWallpapers } from "@/redux/features/thunks";

import styles from "./MainSlider.module.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const MainSlider = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const wallpapersIds = useAppSelector((state) => state.premiers.wallpapersIds);
  const fetchAll = async () => {
    await dispatch(fetchPremiers());
    wallpapersIds && wallpapersIds.length && dispatch(fetchWallpapers(wallpapersIds));
  };
  React.useEffect(() => {
    fetchAll();
  }, [wallpapersIds?.length]);
  const wallpapersLinks = useAppSelector((state) => state.premiers.wallpapersLinks);

  if (wallpapersIds === undefined) return <div>loading...</div>;

  return (
    <div className={styles.mainSlider}>
      <div className={styles.mainSliderContainer}>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Navigation, A11y, Autoplay]}
          navigation
          autoplay
        >
          {wallpapersLinks?.map((link) => (
            <SwiperSlide key={link}>
              <div style={{ height: 1236, position: 'relative' }}>
                <Image priority fill src={link} alt="film" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MainSlider;
