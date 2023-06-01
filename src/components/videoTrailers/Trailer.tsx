import React from "react";

import type { ITrailerProps } from "@/types";
import type { FC } from "react";

import styles from './VideoTrailers.module.scss';

const Trailer: FC<ITrailerProps> = ({ title, id }): JSX.Element => {
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
