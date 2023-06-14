"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Selectors from "@/redux/selectors";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearState } from "@/redux/features/currentFilm/currentFilmSlice";
import { fetchCurrentWallpapers, fetchPosters, fetchTrailers } from "@/redux/features/currentFilm/thunks";

import FilmInfo from "@/components/filmInfo";
import FilmPreview from "@/components/filmPreview";
import VideoTrailers from "@/components/videoTrailers";
import MainSliderLoading from "@/components/mainSlider/skeleton";
import MainFilmsLoading from "@/components/mainFilms/skeleton";

import styles from "./Film.module.scss";

const Film = (): JSX.Element => {
  const film = useAppSelector(Selectors.currentFilm.currentFilm);
  const isActive = useAppSelector(Selectors.currentFilm.isActiveFilm);
  const wallpaper = useAppSelector(Selectors.currentFilm.wallpaper);

  const dispatch = useAppDispatch();
  const router = useRouter();

  React.useEffect(() => {
    if (film?.filmId) {
      let id = film.filmId;
      dispatch(fetchPosters(id));
      dispatch(fetchTrailers(id));
      dispatch(fetchCurrentWallpapers(id));
    }
  }, [film]);

  React.useEffect(() => {
    if (!isActive) {
      router.back();
    }
    return () => {
      dispatch(clearState());
    };
  }, []);

  if (!isActive) {
    return (
      <div className={styles.film}>
        <div className={styles.filmContainer}>
          <MainSliderLoading />
          <MainFilmsLoading />
        </div>
      </div>
    );
  }

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
