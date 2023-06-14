import React from "react";

import HeaderNav from "./HeaderNav";

import styles from "./Header.module.scss";

import type { THeaderProps } from "@/types";

const Header = ({ isTransparent = false }: THeaderProps): JSX.Element => {
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
