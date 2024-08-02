"use client"

import React from "react";
import styles from "./styles.module.css";

import { DOMAIN } from "@/Constants/navigationRoutes";

const ShortcutCta = () => {

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.main_conatiner}>
        <p className={styles.head}>Your Gateway to Exceptional Remote Talent</p>
        <div className={styles.btn_wraper}>
          <button
            onClick={() =>
              window.open(`${DOMAIN}/access-of-top-developers`, "_self")
            }
            className={`${styles.pink_btn} ${styles.btn}`}
          >
            Hire Talent
          </button>
          <button
            onClick={() =>
              window.open(`${DOMAIN}/join-developers-community`, "_self")
            }
            className={`${styles.transp_btn} ${styles.btn}`}
          >
            Find Jobs
          </button>
        </div>
        <p className={styles.last_line}>No cost until you Hire</p>
      </div>
    </div>
  );
};

export default ShortcutCta;
