"use client"
import React from "react";
import styles from "./styles.module.css";
import Title from "../Common/Title";
import Image from "next/image";
import JourneyImg from "./Assets/JourneyImg.webp";
import mobileImg from "./Assets/mobileImg.webp";
import { DOMAIN } from "@/Constants/navigationRoutes";

const CodingJourney = () => {
  const steps = [
    "Create profile and share you skills and experience.",
    "Get multiple job offers and stand out to recruiters",
    "Start your dream job and grow your career.",
  ];
  return (
    <div className={styles.main_container}>
      <Title
        head={"Start your coding journey with Sourcebae"}
        subHead={"<FOR DEVELOPERS/>"}
        alignment={"center"}
        width={"w-[310px] md:w-full"}
      />

      <p className={styles.desc}>
        Boost your career with opportunities to work on exciting projects for
        global clients, all while enjoying the freedom of remote work. Remote.
        Proven. Ready.
      </p>

      <div className={styles.step_wrapper}>
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-[13px] xxl:gap-[19px] c2xl:gap-[26px]"
          >
            <div className={styles.step_circle}>0{idx + 1}</div>
            <p className={styles.step}>{item}</p>

            {idx !== steps.length - 1 && (
              <div className={styles.break_line}></div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.img_div}>
        <Image src={JourneyImg} className={` hidden md:block  ${styles.img}`} alt="Sourcebae Talent Illustration"/>
        <Image src={mobileImg} className={`md:hidden ${styles.img}`} alt="Sourcebae Talent Illustration"/>
        <div className="flex justify-center">
          <div
            className={styles.join_btn}
            onClick={() =>
              window.open(`${DOMAIN}/join-developers-community`, "_self")
            }
          >
            <p className={styles.btn_txts}>Join Us Today</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingJourney;
