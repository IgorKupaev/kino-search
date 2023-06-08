"use client";

import React from "react";

import Selectors from "@/redux/Selectors";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import FilmPreview from "@/components/filmPreview";
import VideoTrailers from "@/components/videoTrailers";

import { calculateSize } from "./helper";

import styles from "./Film.module.scss";

import type { TSize } from "@/types";
import { fetchCurrentWallpapers, fetchPosters, fetchTrailers } from "@/redux/features/mockThunks";
import FilmInfo from "@/components/filmInfo";

const Film = (): JSX.Element => {
  const film = useAppSelector(Selectors.currentFilm);
  const wallpapers = useAppSelector(Selectors.currentWallpapers);

  const wallpaper = React.useMemo(() => {
    if (wallpapers.length > 0) {
      return wallpapers[0].imageUrl;
    }
    return null;
  }, [wallpapers])

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (film?.kinopoiskId) {
      let id = String(film.kinopoiskId);
      dispatch(fetchPosters(id));
      dispatch(fetchTrailers(id));
      dispatch(fetchCurrentWallpapers(id));
    }
  }, [film]);

  React.useEffect(() => console.log(wallpapers),[wallpapers]);

  return (
    <div className={styles.film}>
      <div className={styles.filmContainer}>
        {wallpaper && film && <FilmPreview wallpaper={wallpaper} film={film} />}
        {film && <VideoTrailers />}
        {film && <FilmInfo />}
      </div>
    </div>
  );
};

export default Film;
