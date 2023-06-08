import React from "react";

import Trailer from "./Trailer";

import styles from "./VideoTrailers.module.scss";
import { useAppSelector } from "@/redux/hooks";
import Selectors from "@/redux/Selectors";

const VideoTrailers = (): JSX.Element => {
  const trailers = useAppSelector(Selectors.trailers);
  
  return (
    <div className={styles.trailers}>
      <div className={styles.trailersContainer}>
        {trailers.length > 0 ? (
          <>
            <Trailer id={trailers[0]} title="watch trailer" />
            <Trailer id={trailers[1]} title="watch second trailer" />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default VideoTrailers;
