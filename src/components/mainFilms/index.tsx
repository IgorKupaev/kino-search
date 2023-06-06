import React from "react";

import type { FC } from "react";
import type { TMainFilmsProps } from "@/types";

import MainFilmsList from "./MainFilmsList";

import styles from "./MainFilms.module.scss";

const MainFilms: FC<TMainFilmsProps> = ({ films }): JSX.Element => {
  return (
    <div className={styles.mainFilms}>
      <div className={styles.mainFilmsContainer}>
        <MainFilmsList films={films} />
      </div>
    </div>
  );
};

export default MainFilms;
