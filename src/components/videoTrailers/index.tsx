import React from "react";

import { useAppSelector } from "@/redux/hooks";
import Selectors from "@/redux/Selectors";

import Trailer from "./Trailer";
import TrailersLoading from "./skeleton";

import styles from "./VideoTrailers.module.scss";

const VideoTrailers = (): JSX.Element => {
  const trailers = useAppSelector(Selectors.trailers);
  const film = useAppSelector(Selectors.currentFilm);
  const posters = useAppSelector(Selectors.posters);
  const wallpapers = useAppSelector(Selectors.currentWallpapers);

  return (
    <div className={styles.trailers}>
      <div className={styles.trailersContainer}>
        {trailers.length > 0 && film && posters.length > 0 && wallpapers.length > 0 ? (
          <>
            <Trailer id={trailers[0]} title="Trailer" />
            <Trailer id={trailers[1]} title="Second trailer" />
          </>
        ) : (
          <TrailersLoading />
        )}
      </div>
    </div>
  );
};

export default VideoTrailers;
