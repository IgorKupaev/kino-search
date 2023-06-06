import React from "react";
import { Skeleton, Stack } from "@mui/material";

import styles from "./MainFilms.module.scss";

const skeletonSx = { bgcolor: "rgba(100, 100, 100, 0.5)", margin: "0 auto", fontSize: "1rem" };

const skeletons = new Array(12).fill(null);

const MainFilmsLoading = (): JSX.Element => {
  return (
    <div className={styles.mainFilms}>
      <div className={styles.mainFilmsContainer}>
        {skeletons.map((_, i) => (
          <Stack key={i} spacing={1}>
            <Skeleton sx={skeletonSx} variant="rounded" width={102} height={163} />
            <Skeleton sx={skeletonSx} variant="text" />
          </Stack>
        ))}
      </div>
    </div>
  );
};

export default MainFilmsLoading;
