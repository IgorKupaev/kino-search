import React from "react";

import { fetchFilm } from "@/redux/features/thunks";
import { useAppDispatch } from "@/redux/hooks";

import MainFilmsItem from "./MainFilmsItem";

import type { TMaimFilmsListProps } from "@/types";

const MainFilmsList = ({ films }: TMaimFilmsListProps): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <>
      {films.map((film) => {
        const src = film.posterUrl;
        const fetchCurrentFilm = (): void => {
          dispatch(fetchFilm(`${film.filmId}`));
        };
        return <MainFilmsItem key={film.filmId} fetchFilm={fetchCurrentFilm} film={film} src={src} />;
      })}
    </>
  );
};

export default MainFilmsList;
