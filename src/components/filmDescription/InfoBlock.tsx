import React from "react";

import type { FC } from "react";

import styles from "./FilmDescription.module.scss";

interface IInfoBlockProps {
  title: string
  body: string
}

const InfoBlock: FC<IInfoBlockProps> = ({ title, body }): JSX.Element => {
  return (
    <>
      <h3 className={styles.jobTitle}>{title}</h3>
      <div className={styles.jobBody}>{body}</div>
    </>
  );
};

export default InfoBlock;
