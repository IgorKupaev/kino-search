import React from "react";

import type { FC } from "react";

import styles from "./MainSlider.module.scss";

const MainSlider: FC = (): JSX.Element => {
  return (
    <div className={styles.mainSlider}>
      <div className={styles.mainSliderContainer}></div>
    </div>
  );
};

export default MainSlider;
