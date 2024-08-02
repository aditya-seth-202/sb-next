import React from "react";
import styles from "./styles.module.css";
import TestomonalCol1 from "./TestimonalCol1";
import TestomonalCol2 from "./TestimonalCol2";
import TestomonalCol3 from "./TestimonalCol3";

const TestimonalsCards = () => {
  return (
    <div className={styles.card_wrapper}>
      <TestomonalCol1 />
      <TestomonalCol2 />
      <TestomonalCol3 />

      {/* <div className={`${styles.col1} ${styles.col}`}>
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

      <div className={`${styles.col2} ${styles.col}`}>
        <div className={`${styles.card4} ${styles.commonCardStyles}`}>
          <Image src={star} className={styles.star} />
          <p className={styles.card4_desc}>
            It Was a <span className="text-[#120a2c4d]">Great Experience</span>
          </p>
        </div>

        <div
          className={`${styles.card5} ${styles.commonCardStyles} ${styles.linear_grad}`}
        >
          <Image src={card5} className={styles.card5_img} />
          <p className={styles.card_para}>
            As a talent agency that specializes in tech recruitment, we've seen
            a lot of remote hiring platforms come and go. But{" "}
            <span>Sourcebae is different</span>. They truly understand the needs
            of the industry and{" "}
            <span>
              provide us with top-quality developers who deliver great work
              every time. They make the hiring process easy and efficient
            </span>
            , and we trust them to deliver on their promises
          </p>

          <div>
            <p className={styles.auth_name}>Shubham Sodani</p>
            <p className={styles.auth_position}>
              Co-Founder At Engineer Master
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.col3} ${styles.col}`}>
        <div
          className={`${styles.card6} ${styles.commonCardStyles} ${styles.linear_grad}`}
        >
          <p className={styles.card_para}>
            Helpful, <span>Commited and Quick hiring</span>! I had the pleasure
            of working with SourceBae on a critical project for our company, and
            they exceeded our expectations in every way.{" "}
            <span>
              The team is incredibly talented, skilled, and knowledgeable in
              their field, and their attention to detail is unmatched
            </span>
            . We look forward to working with them again in the future
          </p>

          <div>
            <p className={styles.auth_name}>Shubham Sodani</p>
            <p className={styles.auth_position}>
              Co-Founder At Engineer Master
            </p>
          </div>
        </div>

        <div className={`${styles.card7} ${styles.commonCardStyles}`}></div>

        <div
          className={`${styles.card8} ${styles.commonCardStyles} ${styles.linear_grad}`}
        >
          <p className={styles.card8_head}>96%</p>
          <p className={styles.card1_desc}>Success Rate</p>
        </div>
      </div> */}
    </div>
  );
};

export default TestimonalsCards;
