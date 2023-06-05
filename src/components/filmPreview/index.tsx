import React from "react";

import Image from "next/image";

import type { FC } from "react";
import type { TFilmPreviewProps } from "@/types";

import styles from './FilmPreview.module.scss';

const FilmPreview: FC<TFilmPreviewProps> = ({ cover, logo, width, height, film }): JSX.Element => {
  console.log('CURRENT LOGO', logo)
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
            width={600}
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
