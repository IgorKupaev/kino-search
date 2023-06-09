import React from "react";
import { Skeleton, Stack } from "@mui/material";

const skeletonSx = { bgcolor: "rgba(100, 100, 100, 0.5)", margin: "0 auto" };

const FilmPreviewLoading = (): JSX.Element => {
  return (
    <Stack>
      <Skeleton sx={skeletonSx} variant="rounded" width={"100%"} height={736} />
    </Stack>
  );
};

export default FilmPreviewLoading;
