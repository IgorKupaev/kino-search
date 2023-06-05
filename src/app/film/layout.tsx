"use client";

import Header from "@/components/header";

import type { FC } from "react";
import type { TRootProps } from "@/types";

import styles from './Film.module.scss';

const RootLayout: FC<TRootProps> = ({ children }): JSX.Element => {
  return (
    <div className={styles.containerStyle}>
      <Header isTransparent={true} />
      {children}
    </div>
  );
};

export default RootLayout;
