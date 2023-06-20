import { TSkeletonListProps } from "@/types";
import { Skeleton } from "@mui/material";
import React from "react";


const SkeletonList = ({ sx, variant, width, height, count }: TSkeletonListProps): JSX.Element => {
  const countArray = React.useMemo(() => {
    return new Array(count).fill(null);
  }, [count]);

  return (
    <>
      {countArray.map((_, i) => (
        <Skeleton key={i} sx={sx} variant={variant} width={width} height={height} />
      ))}
    </>
  );
};

export default SkeletonList;
