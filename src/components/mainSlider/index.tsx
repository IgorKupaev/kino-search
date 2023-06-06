"use client";

import React  from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchPremiers, fetchWallpapers } from "@/redux/features/mockThunks";
import Selectors from "@/redux/Selectors";

import styles from "./MainSlider.module.scss";
import Slider from "./Slider";
import { CircularProgress } from "@mui/material";

const MainSlider = (): JSX.Element => {
  return (
    <div className={styles.mainSlider}>
      <div className={styles.mainSliderContainer}>
        <Slider />
      </div>
    </div>
  );
};

export default MainSlider;
