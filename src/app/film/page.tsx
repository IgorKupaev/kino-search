"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Selectors from "@/redux/Selectors";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearState } from "@/redux/features/currentFilmSlice";
import { fetchCurrentWallpapers, fetchPosters, fetchTrailers } from "@/redux/features/mockThunks";

import FilmInfo from "@/components/filmInfo";
import FilmPreview from "@/components/filmPreview";
import VideoTrailers from "@/components/videoTrailers";

import styles from "./Film.module.scss";
import MainSliderLoading from "@/components/mainSlider/skeleton";
import MainFilmsLoading from "@/components/mainFilms/skeleton";

const Film = (): JSX.Element => {
  const film = useAppSelector(Selectors.currentFilm);
  const isActive = useAppSelector(Selectors.isActiveFilm);
  const wallpaper = useAppSelector((state) => state.currentFilm.currentWallpaper);

  const dispatch = useAppDispatch();
  const router = useRouter();

  React.useEffect(() => {
    if (film?.kinopoiskId) {
      let id = String(film.kinopoiskId);
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
