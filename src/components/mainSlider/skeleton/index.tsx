import React from "react";
import { Skeleton, Stack } from "@mui/material";

import styles from "../MainSlider.module.scss";

const skeletonSx = { bgcolor: "rgba(100, 100, 100, 0.5)", margin: "0 auto" };

const MainSliderLoading = (): JSX.Element => {
  return (
    <div className={styles.mainSlider}>
      <Stack>
        <Skeleton sx={skeletonSx} variant="rounded" width={"98%"} height={736} />
      </Stack>
    </div>
  );
};

export default MainSliderLoading;
