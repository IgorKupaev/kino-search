"use client";

import React from "react";

import Selectors from "@/redux/Selectors";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import FilmPreview from "@/components/filmPreview";
import VideoTrailers from "@/components/videoTrailers";

import { calculateSize } from "./helper";

import styles from "./Film.module.scss";

import type { TSize } from "@/types";
import { fetchPosters, fetchTrailers } from "@/redux/features/mockThunks";
import FilmInfo from "@/components/filmInfo";

const Film = (): JSX.Element => {
  const [size, setSize] = React.useState<TSize>({ width: 0, height: 0 });
  const [cover, setCover] = React.useState<string>("");
  const [logo, setLogo] = React.useState<string>("");

  const film = useAppSelector(Selectors.currentFilm);

  const dispatch = useAppDispatch();

  React.useEffect(() => {
    calculateSize(setSize, window.innerWidth);
  }, []);

  React.useEffect(() => {
    if (film?.coverUrl) {
      setCover(film.coverUrl);
    }
    if (film?.logoUrl) {
      setLogo(film.logoUrl);
    }
    if (film?.kinopoiskId) {
      let id = String(film.kinopoiskId);
      dispatch(fetchPosters(id));
      dispatch(fetchTrailers(id));
    }
  }, [film]);

  return (
    <div className={styles.film}>
      <div className={styles.filmContainer}>
        {film && <FilmPreview cover={cover} logo={logo} width={size.width} height={size.height} film={film} />}
        {film && <VideoTrailers />}
        {film && <FilmInfo />}
      </div>
    </div>
  );
};

export default Film;
