import React from "react";
import styles from "./styles.module.css";

const Title = ({ className, alignment, subHead, head, otherStyles, width }) => {
  return (
    <div className={`${className} flex flex-col items-${alignment}`}>
      <p className={`${styles.subhead} text-${alignment} ${otherStyles}`}>
        {subHead}
      </p>
      <p className={`${styles.head} text-${alignment} ${otherStyles} ${width}`}>
        {head}
      </p>
    </div>
  );
};

export default Title;
