"use client";

import React from "react";
import Selectors from "@/redux/Selectors";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearState } from "@/redux/features/currentFilmSlice";
import { fetchCurrentWallpapers, fetchPosters, fetchTrailers } from "@/redux/features/mockThunks";

import FilmInfo from "@/components/filmInfo";
import FilmPreview from "@/components/filmPreview";
import VideoTrailers from "@/components/videoTrailers";

import styles from "./Film.module.scss";

const Film = (): JSX.Element => {
  const film = useAppSelector(Selectors.currentFilm);
  const wallpaper = useAppSelector((state) => state.currentFilm.currentWallpaper);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    if (film?.kinopoiskId) {
      let id = String(film.kinopoiskId);
      dispatch(fetchPosters(id));
      dispatch(fetchTrailers(id));
      dispatch(fetchCurrentWallpapers(id));
    }
  }, [film]);

  React.useEffect(
    () => () => {
      dispatch(clearState());
    },
    []
  );
  return (
    <div className={styles.film}>
      <div className={styles.filmContainer}>
        <FilmPreview wallpaper={wallpaper} film={film} />
        <VideoTrailers />
        <FilmInfo />
      </div>
    </div>
  );
};

export default Film;
