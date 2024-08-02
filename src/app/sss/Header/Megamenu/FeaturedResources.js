"use client"
import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { DOMAIN } from "@/Constants/navigationRoutes";

const FeaturedResources = ({ selectedOption }) => {
  return (
    <div className={styles.feature_res_wrapper}>
      <p className={styles.feature_head}>Featured Resources</p>
      <Image
        src="https://sourcebae.s3.amazonaws.com/production/image/png/1718800919597.png"
        width={100}
        height={100}
        className={styles.resource_img}
      />
      <p className={styles.resources_subhead}>
        Exploring SAP Developer Tools for Enhanced Efficiency and Productivity
      </p>
      <p className={styles.resources_content}>
        In modern enterprise resource planning (ERP) solutions, SAP Developer
        Tools are a game-changer, revolutionizing how businesses operate and
        manage their processes.
      </p>
      <p
        onClick={() =>
          window.open(
            `${DOMAIN}/blog/exploring-sap-developer-tools-for-enhanced-efficiency-and-productivity/`,
            "_self"
          )
        }
        className={styles.read_more}
      >
        Read more
      </p>
      <p
        onClick={() =>
          window.open(`${DOMAIN}/blog/author/shreyanshrane/`, "_self")
        }
        className={styles.see_all}
      >
        See All Resources
      </p>
    </div>
  );
};

export default FeaturedResources;
