import React from "react";

import type { FC } from "react";
import type { IMainFilmsProps } from "@/types";

import { useAppDispatch } from "@/redux/hooks";
import { fetchTopFilms } from "@/redux/features/thunks";

import MainFilmsList from "./MainFilmsList";

import styles from "./MainFilms.module.scss";

const loaderElement = <h2 style={{ color: "#fff" }}>Loading...</h2>;

const MainFilms: FC<IMainFilmsProps> = ({ films }): JSX.Element => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchTopFilms());
  }, [dispatch]);

  return (
    <div className={styles.mainFilms}>
      <div className={styles.mainFilmsContainer}>
        {films.length === 0 ? loaderElement : <MainFilmsList films={films} />}
      </div>
    </div>
  );
};

export default MainFilms;
