import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "./../../../public/headerLogo.png";

import styles from "./Header.module.scss";

import type { THeaderNavProps } from "@/types";

const HeaderNav = ({ itemsStyle, authStyle }: THeaderNavProps): JSX.Element => {
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
