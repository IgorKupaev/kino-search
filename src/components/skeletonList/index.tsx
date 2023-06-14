import { Theme } from "@emotion/react";
import { Skeleton, SxProps } from "@mui/material";
import React from "react";


const SkeletonList = ({ sx, variant, width, height, count }: TSkeletonListProps): JSX.Element => {
  const countArray = React.useMemo(() => {
    return new Array(count).fill(null);
  }, [count]);

  return (
    <>
      {countArray.map(() => (
        <Skeleton sx={sx} variant={variant} width={width} height={height} />
      ))}
    </>
  );
};

export default SkeletonList;
