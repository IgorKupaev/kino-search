import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./MainFilms.module.scss";

import type { TMainFilmsItemProps } from "@/types";

const MainFilmsItem = ({ fetchFilm, film, src }: TMainFilmsItemProps): JSX.Element => {
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
