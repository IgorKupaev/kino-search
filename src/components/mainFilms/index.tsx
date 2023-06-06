import React from "react";

import MainFilmsList from "./MainFilmsList";

import styles from "./MainFilms.module.scss";

import type { TMainFilmsProps } from "@/types";

const MainFilms = ({ films }: TMainFilmsProps): JSX.Element => {
  return (
    <div className={styles.mainFilms}>
      <div className={styles.mainFilmsContainer}>
        <MainFilmsList films={films} />
      </div>
    </div>
  );
};

export default MainFilms;
