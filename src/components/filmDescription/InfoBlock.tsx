import React from "react";

import styles from "./FilmDescription.module.scss";

import type { FC } from "react";

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
