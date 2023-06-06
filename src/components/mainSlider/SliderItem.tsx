import React from "react";

import { SwiperSlide } from "swiper/react";
import Image from "next/image";

import type { TSliderItemProps } from "@/types";

const SliderItem = ({ link }: TSliderItemProps): JSX.Element => {
  return (
    <SwiperSlide>
      <div style={{ height: 1236, position: "relative" }}>
        <Image priority fill src={link} alt="film" />
      </div>
    </SwiperSlide>
  );
};

export default SliderItem;
