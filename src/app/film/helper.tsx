import type { TSize } from "@/types";
import type { Dispatch, SetStateAction } from "react";

export const setRatingColor = (value: number): JSX.Element => {
  const style = { color: "gray" };
  if (value >= 7) style.color = "yellowgreen";
  if (value <= 4.9) style.color = "darkred";
  return <span style={style}>{value}</span>;
};

export const calculateSize = (setSize: Dispatch<SetStateAction<TSize>>, innerWidth: number) => {
  if (innerWidth >= 1510) {
    setSize({ height: 1480 * 1.25, width: 1480 });
  } else {
    setSize({ width: innerWidth - 30, height: innerWidth * 1.25 });
  }
};

export const randomInteger = (min: number, max: number): number => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
