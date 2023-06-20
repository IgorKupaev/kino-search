import React from "react";

import { useAppSelector } from "@/redux/hooks";
import Selectors from "@/redux/selectors";

import styles from "./FilmDescription.module.scss";

const InfoCast = () => {
  const professions = useAppSelector(Selectors.currentProfessions.professions);
  return (
    <div className={styles.filmInfoCast}>
      <h3 className={styles.jobTitle}>Cast</h3>
      <div className={styles.jobBody}>
        {professions.map((cast, index, arr) => {
          if (index === arr.length - 1) {
            return <span key={index}>{cast.nameRu || cast.nameEn}</span>;
          }
          return <span key={index}>{cast.nameRu || cast.nameEn}, </span>;
        })}
      </div>
    </div>
  );
};

export default InfoCast;
