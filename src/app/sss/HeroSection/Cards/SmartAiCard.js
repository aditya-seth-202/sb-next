import React from "react";
import styles from "./style.module.css";
import cardImg from "../Assets/card2.webp";

import { s3BaseUrl } from "@/Constants/urls";
import Image from "next/image";

const SmartAiCard = () => {
  return (
    <div className={`${styles.card} ${styles.smart_ai_card}`}>
      <p className={`text-[#fff] ${styles.card_head}`}>
        Smart AI Screening and Hiring
      </p>
      <div className={styles.perMatchTag}>98% Match</div>
      <div>
        <Image
          src={s3BaseUrl + "png/1718879480597.webp"}
          className="w-full h-full mt-3 xxl:mt-[25px]"
          width={157}
          height={91.95}
          priority={true}
          alt="Smart AI Screening and Hiring Illustration - Sourcebae"
        />
      </div>
    </div>
  );
};

export default SmartAiCard;
