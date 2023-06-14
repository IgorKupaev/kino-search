import React from "react";
import { Skeleton, Stack } from "@mui/material";

import SkeletonList from "@/components/skeletonList";

import styles from "./Skeleton.module.scss";

const skeletonSx = { bgcolor: "rgba(100, 100, 100, 0.5)", margin: "0 auto" };
const skeletonListItemSx = { ...skeletonSx, margin: "10px auto" };
const skeletonFlexEnd = { display: "flex", alignItems: "flex-end" };

const FilmInfoLoading = (): JSX.Element => {
  return (
    <div className={styles.skeletonContainer}>
      <Stack>
        <Skeleton variant="rounded" width={700} height={130} sx={skeletonListItemSx} />
        <Skeleton sx={skeletonSx} variant="rounded" width={700} height={200} />
        <SkeletonList sx={skeletonListItemSx} variant="rounded" width={700} height={60} count={4}/>
        <Skeleton variant="rounded" width={700} height={220} sx={skeletonSx} />
      </Stack>
      <Stack sx={skeletonFlexEnd}>
        <Skeleton variant="rounded" width={530} height={40} sx={skeletonListItemSx} />
        <div className={styles.skeletonPosters}>
          <SkeletonList sx={skeletonListItemSx} variant="rectangular" width={167} height={250} count={6}/>
        </div>
      </Stack>
    </div>
  );
};

export default FilmInfoLoading;
