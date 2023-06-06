import React from "react";

import Trailer from "./Trailer";

import styles from "./VideoTrailers.module.scss";

const VideoTrailers = (): JSX.Element => {
  return (
    <div className={styles.trailers}>
      <div className={styles.trailersContainer}>
        <Trailer id="HPHTQL6Wb3s" title="watch trailer" />
        <Trailer id="AO86cNYJ4dI" title="watch second trailer" />
      </div>
    </div>
  );
};

export default VideoTrailers;
