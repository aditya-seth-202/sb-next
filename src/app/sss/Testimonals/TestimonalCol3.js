import React from "react";
import styles from "./styles.module.css";

const TestimonalCol3 = () => {
  return (
    <div className={`${styles.col3} ${styles.col}`}>
      <div
        className={`${styles.card6} ${styles.commonCardStyles} ${styles.linear_grad}`}
      >
        <p className={styles.card_para}>
          Helpful, <span>Commited and Quick hiring</span>! I had the pleasure of
          working with SourceBae on a critical project for our company, and they
          exceeded our expectations in every way.{" "}
          <span>
            The team is incredibly talented, skilled, and knowledgeable in their
            field, and their attention to detail is unmatched
          </span>
          . We look forward to working with them again in the future
        </p>

        <div>
          <p className={styles.auth_name}>Vinit Jain</p>
          <p className={styles.auth_position}>Co-Founder At Cityfurnish</p>
        </div>
      </div>

      <div className={`${styles.card7} ${styles.commonCardStyles}`}></div>

      <div
        className={`${styles.card8} ${styles.commonCardStyles} ${styles.linear_grad}`}
      >
        <p className={styles.card8_head}>96%</p>
        <p className={styles.card1_desc}>Success Rate</p>
      </div>
    </div>
  );
};

export default TestimonalCol3;
