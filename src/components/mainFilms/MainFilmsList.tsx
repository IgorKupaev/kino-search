import React from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchFilm } from "@/redux/features/currentFilm/thunks";
import Selectors from "@/redux/selectors";

import MainFilmsItem from "./MainFilmsItem";

const MainFilmsList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const films = useAppSelector(Selectors.changeSize);
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
