import React from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchFilm } from "@/redux/features/currentFilm/thunks";
import Selectors from "@/redux/selectors";

import MainFilmsItem from "./MainFilmsItem";
import { TFilm } from "@/types";

const MainFilmsList = (): JSX.Element => {
  const films = useAppSelector(Selectors.changeSize);
  const dispatch = useAppDispatch();

  const fetchCurrentFilm = React.useCallback((id: number) => () => dispatch(fetchFilm(id)), []);

  const renderItem = React.useCallback((film: TFilm) => {
    return (
      <MainFilmsItem key={film.filmId} fetchFilm={fetchCurrentFilm(film.filmId)} film={film} src={film.posterUrl} />
    );
  }, []);

  return (
    <>
      {films.map((film) => {
        return renderItem(film);
      })}
    </>
  );
};

export default MainFilmsList;
