import React from "react";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProfessions } from "@/redux/features/currentProfessions/thunks";
import Selectors from "@/redux/selectors";

import styles from "./FilmDescription.module.scss";

import FilmInfo from "./FilmInfo";

const FilmDescription = (): JSX.Element => {
  const id = +useAppSelector(Selectors.currentFilm.id);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchProfessions(id));
  }, [dispatch, id]);

  return (
    <div className={styles.filmBody}>
      <div className={styles.filmBodyContainer}>
        <div className={styles.filmInfo}>
          <FilmInfo />
        </div>
      </div>
    </div>
  );
};

export default FilmDescription;
