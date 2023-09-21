"use client";
import styles from "@/style/header2.module.scss";
import React, { useState } from "react";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.desktopHeader}>
        <div >Discover</div>
        <div >Invest</div>
        <div >RoadMap</div>
        <div >Events</div>
        <div >About</div>
        <div >Contact</div>
      </div>
    </header>
  );
};

export default Header;
