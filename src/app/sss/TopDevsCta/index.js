import React from "react";
import styles from "./style.module.css";
import Ticker from "../Ticker/Ticker";
import brand1 from "./Assets/brand1.webp";
import brand2 from "./Assets/brand2.webp";
import brand3 from "./Assets/brand3.webp";
import brand4 from "./Assets/brand4.webp";
import Image from "next/image";
import { InfiniteLooper } from "../InfiniteLooping/InfiniteLooping";
import { s3BaseUrl } from "@/Constants/urls";

const TopDevCta = () => {
  const brandImages1 = [
    {
      src: "png/1718975148702.png",
    },
    {
      src: "png/1718975235058.png",
    },
    {
      src: "png/1718975254947.png",
    },
    {
      src: "png/1718975350467.png",
    },
    {
      src: "png/1718975622838.png",
    },
  ];
  const brandImages2 = [
    {
      src: "png/1718975382939.png",
    },
    {
      src: "png/1718975408649.png",
    },
    {
      src: "png/1718975436059.png",
    },
    {
      src: "png/1718975465337.png",
    },
    {
      src: "png/1718975662109.png",
    },
  ];
  const brandImages3 = [
    {
      src: "png/1718975490733.png",
    },
    {
      src: "png/1718975567655.png",
    },
    {
      src: "png/1718975521123.png",
    },
    {
      src: "png/1718975594957.png",
    },
  ];

  const speed = 25;
  return (
    <div className={styles.main_conatiner}>
      <div className={styles.left_card}>
        <p className={styles.left_txt}>
          Expert Devs, Trusted by{" "}
          <span className="font-semibold">Top Companies.</span>
        </p>
      </div>

      <div className={styles.right_card}>
        <InfiniteLooper direction={"left"} speed={speed}>
          <div className="flex items-center ">
            {brandImages1.map((item, index) => (
              <div key={index} className={styles.tags}>
                <img loading="lazy" className={styles.icon} src={s3BaseUrl + item?.src}  alt="Various company illustrations"/>
              </div>
            ))}
          </div>
        </InfiniteLooper>

        <InfiniteLooper direction={"right"} speed={speed}>
          <div className="flex items-center my-0">
            {brandImages2.map((item, index) => (
              <div
                key={index}
                className={`${styles.centerTags} ${styles.tags}`}
              >
                <img loading="lazy" className={styles.icon} src={s3BaseUrl + item?.src} alt="Various company illustrations"/>
              </div>
            ))}
          </div>
        </InfiniteLooper>
        <InfiniteLooper direction={"left"} speed={speed}>
          <div className="flex items-center ">
            {brandImages3.map((item, index) => (
              <div key={index} className={styles.tags}>
                <img loading="lazy" className={styles.icon} src={s3BaseUrl + item?.src}  alt="Various company illustrations"/>
              </div>
            ))}
          </div>
        </InfiniteLooper>
      </div>
    </div>
  );
};

export default TopDevCta;
