"use client";
import styles from "@/style/discover.module.scss";
import React, { useState } from "react";

const Invest = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.discoverContainer}>
        <div className={styles.discoverTitle}>Take Part in the adventure !</div>

        <div className={styles.discoverText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. sed do eiusmod tempor incididunt ut labore et dolore Ut
          enim ad minim veniam.
        </div>

        <button className={styles.discoverButton}>Buy</button>
      </div>
    </div>
  );
};

export default Invest;
