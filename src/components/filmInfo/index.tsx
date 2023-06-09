import React from "react";

import Selectors from "@/redux/Selectors";
import { useAppSelector } from "@/redux/hooks";

import FilmDescription from "../filmDescription";
import FilmPosters from "../filmPosters";
import FilmInfoLoading from "./skeleton";

import styles from "./FilmInfo.module.scss";

const FilmInfo = (): JSX.Element => {
  const film = useAppSelector(Selectors.currentFilm);
  const posters = useAppSelector(Selectors.posters);
  const wallpapers = useAppSelector(Selectors.wallpapersLinks);
  const currentWallpaper = useAppSelector(Selectors.currentWallpapers);

  if (!(wallpapers && wallpapers.length > 0 && currentWallpaper.length > 0 && film)) {
    return <FilmInfoLoading />;
  }

  return (
    <div className={styles.filmInfo}>
      {film && <FilmDescription film={film} />}
      {film && <FilmPosters posters={posters} />}
    </div>
  );
};

export default FilmInfo;
