import React from "react";

import Selectors from "@/redux/Selectors";
import { useAppSelector } from "@/redux/hooks";

import FilmDescription from "../filmDescription";
import FilmPosters from "../filmPosters";

import styles from "./FilmInfo.module.scss";

const FilmInfo = (): JSX.Element => {
  const film = useAppSelector(Selectors.currentFilm);
  const posters = useAppSelector(Selectors.posters);

  return (
    <div className={styles.filmInfo}>
      {film && <FilmDescription film={film} />}
      {film && <FilmPosters posters={posters}/>}
    </div>
  );
};

export default FilmInfo;
