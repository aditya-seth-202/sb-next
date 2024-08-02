"use client"
import React from "react";
import styles from "./styles.module.css";
import Title from "../Common/Title";
import Image from "next/image";
import sectionImg from "./Assets/Image.webp";
import statsImg from "./Assets/statsImg.webp";
import { DOMAIN } from "@/Constants/navigationRoutes";

const CareerPath = () => {
  return (
    <div className={styles.main_container}>
      <Title
        head={"Discover a Variety of Career Paths"}
        subHead={"Career"}
        alignment={"center"}
      />
      <div className={styles.content_wrapper}>
        <div className={styles.left_div}>
          <div className={styles.text_wrapper}>
            <p className={styles.left_div_title}>15+ Job Types at Sourcebae</p>
            <p className={styles.content}>
              Explore over 15 diverse job types at Sourcebae. Whether you&apos;re
              into software development or project management, find roles
              tailored to your skills and career goals.
            </p>
            <button
              onClick={() =>
                window.open(`${DOMAIN}/join-developers-community`, "_self")
              }
              className={styles.btn}
            >
              Join Us Today
            </button>
          </div>
          <div className={styles.stats_wrapper}>
            <div className={styles.stats_wrapper_left}>
              <p className={styles.stats}>4000+</p>
              <p className={styles.stats_txt}>
                Developers have already joined Sourcebae
              </p>
            </div>
            <Image src={statsImg} className={styles.grp_img} alt="Sourcebae Developer illustration"/>
          </div>
        </div>
        <Image src={sectionImg} className={styles.img} alt="Sourcebae Developer illustration"/>
      </div>
    </div>
  );
};

export default CareerPath;
