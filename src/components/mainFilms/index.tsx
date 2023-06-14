import React from "react";

import MainFilmsList from "./MainFilmsList";

import styles from "./MainFilms.module.scss";

const MainFilms = (): JSX.Element => {
  return (
    <div className={styles.mainFilms}>
      <div className={styles.mainFilmsContainer}>
        <MainFilmsList />
      </div>
    </div>
  );
};

export default MainFilms;
