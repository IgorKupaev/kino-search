import React from "react";
import Image from "next/image";

import styles from "./FilmPreview.module.scss";

import type { TFilmPreviewProps } from "@/types";

const FilmPreview = ({ cover, logo, width, height, film }: TFilmPreviewProps): JSX.Element => {
  return (
    <div className={styles.filmPreview}>
      <div className={styles.filmCover}>
        {cover && (
          <Image
            className={styles.filmCoverImage}
            src={cover}
            width={width}
            height={height}
            loader={() => cover}
            alt={film && film.nameEn ? `${film.nameEn}` : "film cover"}
          />
        )}
      </div>
      <div className={styles.filmLogo}>
        {logo && (
          <Image
            className={styles.filmLogoImage}
            src={logo}
            width={600} // REMOVE CALCULATE SIZE FUNCTION TODO
            height={285}
            loader={() => logo}
            alt={film && film.nameRu ? `${film.nameRu}` : "film logo"}
          />
        )}
      </div>
    </div>
  );
};

export default FilmPreview;
