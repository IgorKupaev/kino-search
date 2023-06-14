import React from "react";

import styles from "./VideoTrailers.module.scss";

import type { TTrailerProps } from "@/types";

const Trailer = ({ title, id }: TTrailerProps): JSX.Element => {
  return (
    <div className={styles.trailer}>
      <h3 className={styles.trailerTitle}>{title}</h3>
      <iframe
        className={styles.trailerVideo}
        width="631"
        height="314"
        src={`https://www.youtube.com/embed/${id}`}
        allowFullScreen
      />
    </div>
  );
};

export default Trailer;
