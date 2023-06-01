import React from "react";

import Link from "next/link";

import type { FC } from "react";
import type { IHeaderNavProps } from "@/types";

import logo from "./../../../public/headerLogo.png";

import styles from "./Header.module.scss";
import Image from "next/image";

const HeaderNav: FC<IHeaderNavProps> = ({ itemsStyle, authStyle }): JSX.Element => {
  return (
    <>
      <nav className={styles.headerNav}>
        <div className={itemsStyle}>
          <Link href="/">About</Link>
        </div>
        <div className={itemsStyle}>
          <Link href="/">Movies</Link>
        </div>
        <div className={styles.headerNavLogo}>
          <Link href="/">
            <Image src={logo} alt="kino search" />
          </Link>
        </div>
        <div className={itemsStyle}>
          <Link href="/">Series</Link>
        </div>
        <div className={itemsStyle}>
          <Link href="/">Upcoming</Link>
        </div>
      </nav>
      <div className={styles.headerAuth}>
        <div className={authStyle}>
          <a href="#">Sign in</a>
        </div>
        <div className={authStyle}>
          <a href="#">Sign up</a>
        </div>
      </div>
    </>
  );
};

export default HeaderNav;
