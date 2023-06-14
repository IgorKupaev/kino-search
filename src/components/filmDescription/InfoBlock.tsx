import React from "react";

import styles from "./FilmDescription.module.scss";

import type { IInfoBlockProps } from "@/types";

const InfoBlock = ({ title, body }: IInfoBlockProps): JSX.Element => {
  return (
    <div className={styles.infoBlock}>
      <h3 className={styles.jobTitle}>{title}</h3>
      <div className={styles.jobBody}>{body}</div>
    </div>
  );
};

export default InfoBlock;
