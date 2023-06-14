import React from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchFilm } from "@/redux/features/currentFilm/thunks";
import Selectors from "@/redux/selectors";

import MainFilmsItem from "./MainFilmsItem";

const MainFilmsList = (): JSX.Element => {
  const films = useAppSelector(Selectors.changeSize);
  const dispatch = useAppDispatch();
  return (
    <>
      {films.map((film) => {
        const src = film.posterUrl;
        const fetchCurrentFilm = (): void => {
          dispatch(fetchFilm(film.filmId));
        };
        return <MainFilmsItem key={film.filmId} fetchFilm={fetchCurrentFilm} film={film} src={src} />;
      })}
    </>
  );
};

export default MainFilmsList;
