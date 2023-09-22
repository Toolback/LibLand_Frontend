"use client";
import styles from "@/style/buycard.module.scss";
import React, { useState } from "react";

const BuyCard = () => {
  return (
    <div className={styles.BuyCardBackground}>
      <div className={styles.BuyCardContainer}>
        <div className={styles.BuyCardTextLeft}> 
          Ongoing Epoch Supply : 
        </div>
        <div className={styles.BuyCardTextright}> 
          1.000.000u 
        </div>
        <div className={styles.BuyCardTextLeft}> 
          Ongoing Epoch Token Price : 
        </div>
        <div className={styles.BuyCardTextright}> 
          0.5 usdc / 1
        </div>
        
        <b class={styles.hr}></b>
        {/* <hr className={styles.BuyCardDivider}/> */}
        <div className={styles.BuyCardTextLeft}> 
          Your Balance : 
        </div>
        <div className={styles.BuyCardTextright}> 
          0
        </div>

        <div className={styles.BuyCardButtonCard}>
        <input className={styles.BuyCardInput} type="number" placeholder="Amount"/>
        <button className={styles.BuyCardButton}>Connect</button>
        </div>
      </div>
    </div>
  );
};

export default BuyCard;
