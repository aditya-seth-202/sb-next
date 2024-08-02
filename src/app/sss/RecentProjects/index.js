"use client"
import React, { useState } from "react";
import styles from "./styles.module.css";
import Title from "../Common/Title";
import Image from "next/image";
import img1 from "./Assets/card1.webp";
// import img2 from "./Assets/card2.webp";
// import img3 from "./Assets/card3.webp";


const RecentProjects = () => {
  const [expandedCard, setExpandedCard] = useState(0);
  const cardData = [
    {
      src: img1,
      content: "Elevating the Finance Dashboard Design",
    },
    {
      src: img1,
      content: "Elevating the Finance Dashboard Design",
    },
    {
      src: img1,
      content: "Elevating the Finance Dashboard Design",
    },
  ];
  return (
    <div className={styles.parent}>
      <div className={styles.main_container}>
        <Title
          head={"Our Recent Projects"}
          subHead={"Case Studies"}
          alignment={"left"}
        />
        <div className={styles.card_wrapper}>
          {cardData.map((item, idx) => (
            <div
              onMouseEnter={() => setExpandedCard(idx)}
              key={idx}
              className={`
               ${expandedCard === idx && styles.expanded_card}
               ${styles.card}`}
            >
              <div className={styles.left_img}>
                <Image src={item.src} className="w-full h-full" />
              </div>
              <div className={styles.right_div}>
                <p className={styles.content}>{item.content}</p>
              </div>
              <div
                className={`${expandedCard !== idx && "!hidden"} ${
                  styles.view_wrapper
                }`}
              >
                <p className={styles.view_txt}>View Case Study</p>
                <div className={styles.arr_div}>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.btn}>View More Case Studies</button>
      </div>
    </div>
  );
};

export default RecentProjects;
