"use client";
import styles from "@/style/header2.module.scss";
import React, { useState } from "react";

const Footer = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <></>
    // <div className={styles.headerContainer}>
    //   <nav className={`${styles.desktopHeader} ${menuActive ? styles.active : ''}`}>
    //     <div>Discover</div>
    //     <div>Invest</div>
    //     <div>RoadMap</div>
    //     <div>Events</div>
    //     <div>About</div>
    //     <div>Contact</div>
    //   </nav>
    // </div>
  );
};

export default Footer;