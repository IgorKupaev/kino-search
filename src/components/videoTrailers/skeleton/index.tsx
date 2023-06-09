import React from "react";

import { Skeleton, Stack } from "@mui/material";

const skeletonSx = { bgcolor: "rgba(100, 100, 100, 0.5)", marginTop: "10px" };
const skeletonFlexEnd = { display: "flex", alignItems: "flex-end" };

const TrailersLoading = (): JSX.Element => {
  return (
    <>
      <Stack>
        <Skeleton sx={skeletonSx} variant="rounded" width={700} height={34} />
        <Skeleton sx={skeletonSx} variant="rounded" width={700} height={320} />
      </Stack>
      <Stack sx={skeletonFlexEnd}>
        <Skeleton sx={skeletonSx} variant="rounded" width={530} height={34} />
        <Skeleton sx={skeletonSx} variant="rounded" width={530} height={320} />
      </Stack>
    </>
  );
};

export default TrailersLoading;
