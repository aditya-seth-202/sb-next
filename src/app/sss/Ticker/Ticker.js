"use client"
import React from "react";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const Ticker = ({ direction, children }) => {
  return (
    <motion.div
      className={`${styles.ticker_row} ${
        direction === "leftToRight"
          ? styles.left_to_right
          : styles.right_to_left
      }`}
      animate={{ x: direction === "leftToRight" ? "100%" : "-100%" }}
      transition={{
        ease: "linear",
        duration: 100,
        repeat: Infinity,
      }}
    >
      <div style={{ display: "flex" }}>{children}</div>
    </motion.div>
  );
};

export default Ticker;
