import React from "react";
import styles from "./style.module.css";

const FasterCard = () => {
  return (
    <div className={`${styles.card} ${styles.faster_card}`}>
      <p className={styles.faster_card_head}>7x</p>
      <p className={styles.faster_card_desc}>Faster than traditional hiring</p>
    </div>
  );
};

export default FasterCard;
