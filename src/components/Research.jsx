"use client";
import styles from "@/style/research.module.scss";
import React, { useState } from "react";

const Research = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.researchContainer}>
        <div className={styles.researchTitle}>Our Reaserches</div>

        <div className={styles.researchCardContainer}>

          <div className={styles.researchCard}>
            <div className={styles.researchCardIcon}>
              Icon Here
            </div>
            <div className={styles.researchCardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. sed do eiusmod tempor incididunt ut labore
              et dolore Ut enim ad minim veniam.
            </div>
          </div>

          <div className={styles.researchCard}>
            <div className={styles.researchCardIcon}>
              Icon Here
            </div>
            <div className={styles.researchCardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. sed do eiusmod tempor incididunt ut labore
              et dolore Ut enim ad minim veniam.
            </div>
          </div>

          <div className={styles.researchCard}>
            <div className={styles.researchCardIcon}>
              Icon Here
            </div>
            <div className={styles.researchCardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. sed do eiusmod tempor incididunt ut labore
              et dolore Ut enim ad minim veniam.
            </div>
          </div>

        </div>

        <button className={styles.researchCardButton}>Read more</button>
      </div>
    </div>
  );
};

export default Research;
