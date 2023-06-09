import React from "react";
import Image from "next/image";

import styles from "./FilmPosters.module.scss";

import type { TFilmPosters } from "@/types";

const FilmPosters = ({ posters }: TFilmPosters): JSX.Element => {
  return (
    <div className={styles.filmPosters}>
      <h2 className={styles.title}>posters</h2>
      <div className={styles.posters}>
        {posters.map((item) => (
          <div className={styles.postersItem} key={item.imageUrl}>
            <Image width={167} height={250} src={item.previewUrl} alt="poster" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilmPosters;
