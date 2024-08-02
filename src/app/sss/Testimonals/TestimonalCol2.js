import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import star from "./Assets/star_vector.webp";
import card5 from "./Assets/card5.webp";

const TestimonalCol2 = () => {
  return (
    <div className={`${styles.col2} ${styles.col}`}>
      <div className={`${styles.card4} ${styles.commonCardStyles}`}>
        <Image src={star}
          className={styles.star}
          alt="Sourcebae developer"
        />
        <p className={styles.card4_desc}>
          It Was a <span className="text-[#120a2c4d]">Great Experience</span>
        </p>
      </div>

      <div className={`!p-0 ${styles.commonCardStyles}`}>
        <Image src={card5} className={styles.card4_img}
          alt="Talent Agency Illustration" />
      </div>

      <div
        className={`${styles.card5} ${styles.commonCardStyles} ${styles.linear_grad}`}
      >
        {/* <Image src={card5} className={styles.card5_img} /> */}

        <p className={styles.card_para}>
          As a talent agency that specializes in tech recruitment, we&apos;ve seen a
          lot of remote hiring platforms come and go. But{" "}
          <span>Sourcebae is different</span>. They truly understand the needs
          of the industry and{" "}
          <span>
            provide us with top-quality developers who deliver great work every
            time. They make the hiring process easy and efficient
          </span>
          , and we trust them to deliver on their promises
        </p>

        <div>
          <p className={styles.auth_name}>Abhinav Bhardwaj</p>
          <p className={styles.auth_position}>
            Talent Director At Talent on lease
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonalCol2;
