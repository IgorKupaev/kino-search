import React from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchPremiers, fetchWallpapers } from "@/redux/features/actionCreators";

import styles from "./MainSlider.module.scss";

const MainSlider = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const wallpapersIds = useAppSelector(state => state.premiers.wallpapersIds);

  const fetchAll = async () => {
    await dispatch(fetchPremiers());
    
    wallpapersIds && wallpapersIds.length && dispatch(fetchWallpapers(wallpapersIds));
  };

  React.useEffect(() => {
    fetchAll();
  }, [wallpapersIds?.length]);
  return (
    <div className={styles.mainSlider}>
      <div className={styles.mainSliderContainer}></div>
    </div>
  );
};

export default MainSlider;
