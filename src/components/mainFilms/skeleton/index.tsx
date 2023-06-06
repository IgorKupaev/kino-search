import React from "react";

import MainFilmsStackList from "./MainFilmsStackList";

import styles from "../MainFilms.module.scss";

const MainFilmsLoading = (): JSX.Element => {
  return (
    <div className={styles.mainFilms}>
      <div className={styles.mainFilmsContainer}>
        <MainFilmsStackList />
      </div>
    </div>
  );
};

export default MainFilmsLoading;
