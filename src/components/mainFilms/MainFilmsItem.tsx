import React from "react";

import Image from "next/image";
import Link from "next/link";

import type { FC } from "react";
import type { IMainFilmsItemProps } from "@/types";

import styles from "./MainFilms.module.scss";

const MainFilmsItem: FC<IMainFilmsItemProps> = ({ fetchFilm, film, src }): JSX.Element => {
  return (
    <div className={styles.mainFilmsFilm} key={film.filmId}>
      <Link onClick={fetchFilm} href="/film">
        <Image
          className={styles.mainFilmsFilmPoster}
          width={102}
          height={154}
          src={src}
          alt={film.nameEn || film.nameRu}
        />
      </Link>
      <div>{film.nameEn || "One of the best films"}</div>
    </div>
  );
};

export default MainFilmsItem;
