import React from "react";

import { useAppSelector } from "@/redux/hooks";
import Selectors from "@/redux/selectors";

import Trailer from "./Trailer";
import TrailersLoading from "./skeleton";

import styles from "./VideoTrailers.module.scss";

const VideoTrailers = (): JSX.Element => {
  const trailers = useAppSelector(Selectors.currentFilm.trailers);
  const film = useAppSelector(Selectors.currentFilm.currentFilm);
  const posters = useAppSelector(Selectors.currentFilm.posters);
  const wallpapers = useAppSelector(Selectors.currentFilm.currentWallpapers);

  const isAllFetched = React.useMemo(() => {
    return trailers.length > 0 && film && posters.length > 0 && wallpapers.length > 0;
  }, [trailers, film, posters, wallpapers])

  return (
    <div className={styles.trailers}>
      <div className={styles.trailersContainer}>
        {isAllFetched ? (
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
