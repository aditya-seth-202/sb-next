"use client"
import React from "react";
import styles from "./styles.module.css";

const SingleQuestion = ({ ques, ans, isOpen, toggleQuestion }) => {
  return (
    <>
      <div className={styles.quesWrapper} onClick={toggleQuestion}>
        <h3 className={styles.ques}>{ques}</h3>

        <div>
       
        </div>
      </div>

      <div className={`${styles.ans} ${isOpen && styles.ans_open}`}>{ans}</div>
      {/* 
      <div
        dangerouslySetInnerHTML={{ __html: ans }}
        className={`${styles.ans} ${isOpen && styles.ans_open}`}
      /> */}
    </>
  );
};

export default SingleQuestion;
