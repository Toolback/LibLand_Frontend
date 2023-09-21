"use client";
import styles from "@/style/header2.module.scss";
import React, { useState } from "react";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className={styles.headerContainer}>
      <button className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`${styles.desktopHeader} ${menuActive ? styles.active : ''}`}>
        <div>Discover</div>
        <div>Invest</div>
        <div>RoadMap</div>
        <div>Events</div>
        <div>About</div>
        <div>Contact</div>
      </nav>
    </header>
  );
};

export default Header;