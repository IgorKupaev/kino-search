import React from "react";

import Selectors from "@/redux/selectors";
import { useAppSelector } from "@/redux/hooks";

import FilmDescription from "../filmDescription";
import FilmPosters from "../filmPosters";
import FilmInfoLoading from "./skeleton";

import styles from "./FilmInfo.module.scss";

const FilmInfo = (): JSX.Element => {
  const film = useAppSelector(Selectors.currentFilm.currentFilm);
  const posters = useAppSelector(Selectors.currentFilm.posters);
  const wallpapers = useAppSelector(Selectors.premiers.wallpapersLinks);
  const currentWallpaper = useAppSelector(Selectors.currentFilm.currentWallpapers);

  const isAllFetched = React.useMemo(() => {
    return wallpapers && wallpapers.length > 0 && currentWallpaper.length > 0 && film
  }, [wallpapers, currentWallpaper, film])

  if (!isAllFetched) {
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
