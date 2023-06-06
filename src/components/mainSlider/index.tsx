import React from "react";

import styles from "./MainSlider.module.scss";
import Slider from "./Slider";

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
