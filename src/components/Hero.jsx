"use client";
import styles from "@/style/hero.module.scss";
import React, { useState } from "react";

const Hero = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>Back to</div>
        <div className={styles.heroText2}>Roots</div>

        <button className={styles.heroButton}>Take Part</button>
      </div>
    </div>
  );
};

export default Hero;
