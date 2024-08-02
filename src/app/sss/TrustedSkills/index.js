"use client"

import React from "react";
import styles from "./styles.module.css";
import Title from "../Common/Title";
import Image from "next/image";
import Ecommerce from "./Assets/Ecommerce.webp";
import Cybersecurity from "./Assets/Cybersecurity.webp";
import Education from "./Assets/Education.webp";
import Gaming from "./Assets/Gaming.webp";
import HealthCare from "./Assets/HealthCare.webp";
import Logistics from "./Assets/Logistics.webp";
import RealEstate from "./Assets/RealEstate.webp";
import SocialMedia from "./Assets/SocialMedia.webp";
import Sports from "./Assets/Sports.webp";
import Entertainment from "./Assets/Entertainment.webp";
import { InfiniteLooper } from "../InfiniteLooping/InfiniteLooping";

import { DOMAIN } from "@/Constants/navigationRoutes";

const TrustedSkills = () => {
  const rowOneData = [
    {
      icon: Ecommerce,
      label: "Ecommerce",
    },
    {
      icon: Entertainment,
      label: "Entertainment",
    },
    {
      icon: RealEstate,
      label: "Real Estate",
    },
    {
      icon: Logistics,
      label: "Logistics",
    },
    {
      icon: Gaming,
      label: "Gaming",
    },
  ];
  const rowTwoData = [
    {
      icon: Sports,
      label: "Sports",
    },
    {
      icon: SocialMedia,
      label: "Social Media",
    },
    {
      icon: Cybersecurity,
      label: "Cybersecurity",
    },
    {
      icon: HealthCare,
      label: "Health Care",
    },
    {
      icon: Education,
      label: "Education",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.main_container}>
        <Title
          head={"Trusted across industries by professionals"}
          subHead={"Skills"}
          alignment={"center"}
          width={"w-[300px] md:w-[460px] xxl:w-[647px] c2xl:w-[862px]"}
          otherStyles={"!text-[#FFFFFF]"}
        />
        <div className={styles.card_wrapper}>
          <div>
            <InfiniteLooper direction={"left"} speed={20}>
              <div className="flex items-center ">
                {rowOneData.map((item, index) => (
                  <div key={index} className={styles.card}>
                    <Image
                      className={styles.skill_img}
                      src={item?.icon}
                      alt={item.label}
                    />
                    <p className={styles.label}>{item.label}</p>
                  </div>
                ))}
              </div>
            </InfiniteLooper>
          </div>

          <div>
            <InfiniteLooper direction={"right"} speed={20}>
              <div className="flex items-center">
                {rowTwoData.map((item, index) => (
                  <div key={index} className={styles.card}>
                    <Image
                      className={styles.skill_img}
                      src={item?.icon}
                      alt={item.label}
                    />
                    <p className={styles.label}>{item.label}</p>
                  </div>
                ))}
              </div>
            </InfiniteLooper>
          </div>
        </div>

        <div className="flex justify-center">
          <div
            onClick={() =>
              window.open(`${DOMAIN}/hire/hire-developers`, "_self")
            }
            className={styles.explore_more_btn}
          >
            <p className={styles.explore_txts}>Explore More</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedSkills;
