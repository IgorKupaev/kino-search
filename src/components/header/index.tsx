import React from "react";

import HeaderNav from "./HeaderNav";

import type { FC } from "react";
import type { IHeaderProps } from "@/types";

import styles from "./Header.module.scss";

const Header: FC<IHeaderProps> = ({ isTransparent = false }): JSX.Element => {
  const itemsStyle = React.useMemo(() => {
    return isTransparent ? styles.none : styles.headerNavItem;
  }, [isTransparent]);

  const authStyle = React.useMemo(() => {
    return isTransparent ? styles.none : styles.headerAuthItem;
  }, [isTransparent]);

  const headerStyle = React.useMemo(() => {
    return isTransparent ? styles.header : styles.headerColored;
  }, [isTransparent]);

  return (
    <header className={headerStyle}>
      <div className={styles.headerContainer}>
        <HeaderNav authStyle={authStyle} itemsStyle={itemsStyle} />
      </div>
    </header>
  );
};

export default Header;
