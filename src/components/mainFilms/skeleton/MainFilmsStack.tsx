import React from "react";
import { Skeleton, Stack } from "@mui/material";

import type { TMainFilmsStackProps } from "@/types";

const skeletonSx = { bgcolor: "rgba(100, 100, 100, 0.5)", margin: "0 auto", fontSize: "1rem" };

const MainFilmsStack = ({ i }: TMainFilmsStackProps): JSX.Element => {
  return (
    <Stack key={i} spacing={1}>
      <Skeleton sx={skeletonSx} variant="rounded" width={102} height={163} />
      <Skeleton sx={skeletonSx} variant="text" />
    </Stack>
  );
};

export default MainFilmsStack;
