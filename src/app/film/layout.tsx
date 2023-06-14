"use client";

import Header from "@/components/header";

import styles from "./Film.module.scss";

import type { TRootProps } from "@/types";

const RootLayout = ({ children }: TRootProps): JSX.Element => {
  return (
    <div className={styles.containerStyle}>
      <Header isTransparent={true} />
      {children}
    </div>
  );
};

export default RootLayout;
