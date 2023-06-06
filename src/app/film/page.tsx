"use client";

import React from "react";
import { useRouter } from "next/navigation";

import Selectors from "@/redux/Selectors";
import { useAppSelector } from "@/redux/hooks";

import FilmPreview from "@/components/filmPreview";
import VideoTrailers from "@/components/videoTrailers";
import FilmDescription from "@/components/filmDescription";

import { calculateSize } from "./helper";

import styles from "./Film.module.scss";

import type { TSize } from "@/types";

const Film = (): JSX.Element => {
  const [size, setSize] = React.useState<TSize>({ width: 0, height: 0 });
  const [cover, setCover] = React.useState<string>("");
  const [logo, setLogo] = React.useState<string>("");

  const film = useAppSelector(Selectors.currentFilm);
  const router = useRouter();

  React.useEffect(() => {
    calculateSize(setSize, window.innerWidth);
  }, []);

  React.useEffect(() => {
    if (film?.coverUrl) {
      setCover(film.coverUrl);
    }
    if (film?.logoUrl) {
      setLogo(film.logoUrl);
    }
  }, [film, router]);

  return (
    <div className={styles.film}>
      <div className={styles.filmContainer}>
        {film && <FilmPreview cover={cover} logo={logo} width={size.width} height={size.height} film={film} />}
      </div>
      {film && <VideoTrailers />}
      {film && <FilmDescription film={film} />}
    </div>
  );
};

export default Film;
