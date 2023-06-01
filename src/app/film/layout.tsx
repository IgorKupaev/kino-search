"use client";

import Header from "@/components/header";

import type { FC } from "react";
import type { IRootProps } from "@/types";

import styles from './Film.module.scss';

const RootLayout: FC<IRootProps> = ({ children }): JSX.Element => {
  return (
    <div className={styles.containerStyle}>
      <Header isTransparent={true} />
      {children}
    </div>
  );
};

export default RootLayout;
