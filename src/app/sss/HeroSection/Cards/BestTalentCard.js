import React from "react";
import styles from "./style.module.css";
import { s3BaseUrl } from "@/Constants/urls";

const BestTalentCard = () => {
  return (
    <div className={`${styles.card} ${styles.best_talent_card}`}>
      <p className={`text-[#32054D] ${styles.card_head}`}>
        Curated Best Talent
      </p>
      <div className="mt-6">
        <img
          src={s3BaseUrl + "png/1718879441911.webp"}
          className="w-full h-full"   
          alt="Curated Talent Illustration - Sourcebae"
        />
      </div>
    </div>
  );
};

export default BestTalentCard;
