import React from "react";

import { useAppSelector } from "@/redux/hooks";
import Selectors from "@/redux/selectors";

import InfoCast from "./InfoCast";
import InfoBlockList from "./InfoBlockList";

import styles from "./FilmDescription.module.scss";

const FilmInfo = () => {
  const film = useAppSelector(Selectors.currentFilm.currentFilm);

  return (
    <>
      <h2 className={styles.filmSloganTitle}>{film?.slogan}</h2>
      <h3 className={styles.filmInfoTitle}>overview</h3>
      <div className={styles.filmInfoDescription}>
        <div>{film?.description}</div>
      </div>
      <InfoBlockList />
      <InfoCast />
    </>
  );
};

export default FilmInfo;
