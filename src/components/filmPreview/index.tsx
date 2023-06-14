import React from "react";
import Image from "next/image";

import { useAppSelector } from "@/redux/hooks";
import Selectors from "@/redux/selectors";

import FilmPreviewLoading from "./skeleton";

import styles from "./FilmPreview.module.scss";

import type { TFilmPreviewProps } from "@/types";

const FilmPreview = ({ wallpaper, film }: TFilmPreviewProps): JSX.Element => {
  const wallpapers = useAppSelector(Selectors.premiers.wallpapersLinks);

  const isAllFetched = React.useMemo(() => {
    return wallpapers && wallpapers.length > 0 && wallpaper && film;
  }, [wallpaper, wallpapers, film]);

  if (!isAllFetched) {
    return <FilmPreviewLoading />;
  }

  return (
    <div className={styles.filmPreview}>
      <div className={styles.filmCover}>
        <div className={styles.ImageContainer}>
          <Image
            className={styles.filmCoverImage}
            src={wallpaper}
            priority
            fill
            alt={film && film.nameEn ? film.nameEn : "film wallpaper"}
          />

          <div className={styles.filmName}>
            <h3>{film!.nameRu || film!.nameEn || film!.nameOriginal}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilmPreview;
