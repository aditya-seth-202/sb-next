import React from "react";
import styles from "./styles.module.css";

const TestimonalCol1 = () => {
  return (
    <div className={`${styles.col1} ${styles.col}`}>
      <div
        className={`${styles.card1} ${styles.commonCardStyles} ${styles.linear_grad}`}
      >
        <p className={styles.card1_head}>
          32 <span className={styles.card1_head_span}>YC</span>
        </p>
        <p className={styles.card1_desc}>Trusted by Funded Companies</p>
      </div>

      <div className={`${styles.card2} ${styles.commonCardStyles}`}></div>

      <div className={`${styles.card3} ${styles.commonCardStyles}`}>
        <p className={styles.card3_head}>12</p>
        <p className={`!text-primary-black ${styles.card1_desc}`}>
          Trusted by
          <br /> Unicorns
        </p>
      </div>
    </div>
  );
};

export default TestimonalCol1;
