"use client";

import { store } from "../redux/store";
import { Provider } from "react-redux";

import type { FC } from "react";
import type { TRootProps } from "@/types";

import styles from "./page.module.scss";

import "./globals.scss";

const RootLayout: FC<TRootProps> = ({ children }): JSX.Element => {
  return (
    <html lang="en">
      <head>
        <title>KINO SEARCH</title>
      </head>
      <body>
        <main className={styles.main}>
          <Provider store={store}>{children}</Provider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
