"use client"
import React from "react";
import styles from "./styles.module.css";
import Title from "../Common/Title";
import { useRouter } from "next/navigation";
import { s3BaseUrl } from "@/Constants/urls";
import { DOMAIN } from "@/Constants/navigationRoutes";

const VettingProcess = () => {
  const router = useRouter();

  const col1Data = [
    {
      src: "png/1718798775242.webp",
      title: "Profile Check",
      desc: "Our team conducts a primary shortlisting of candidates to identify those who best align with job requirements. We ensure a streamlined process, presenting top-tier candidates who fit your company’s culture and goals. Build your dream team with us.",
    },

    {
      src: "png/1718801600943.webp",
      title: "Technical Skills",
      desc: "Our vetting process rigorously evaluates candidates' technical skills and domain proficiency, ensuring we present only the most qualified individuals.",
    },

    {
      src: "png/1718801552878.webp",
      title: "Seniority",
      desc: "We consider candidates' experience, expertise, leadership qualities, and industry knowledge allowing us to identify individuals who can contribute effectively in senior roles and are right fit for the role.",
    },
  ];
  const col2Data = [
    {
      src: "png/1718800925967.png",
      title: "Video Introduction",
      desc: " We provide candidates the opportunity to introduce themselves through a video, allowing them to go beyond traditional text-based profiles. This leads to more informed hiring decisions and a better understanding of the candidate's fit for your company..",
    },
    {
      src: "png/1718801469163.webp",
      title: "Soft Skills",
      desc: "Our vetting rigorously evaluates technical skills and domain proficiency, ensuring we present the most qualified candidates.",
    },
    {
      src: "png/1718801781810.webp",
      title: "Verify Experience",
      desc: "Our background assessments and skill evaluations validate your expertise, enhancing your credibility and providing assurance to potential collaborators.",
    },
  ];
  return (
    <div className={styles.main_container} id="vettingProcess">
      <div className={styles.wrapper}>
        <Title
          head={"Our Deep Vetting Process"}
          subHead={"Our Process"}
          alignment={"center"}
          otherStyles={"!text-ffffff"}
        />
        <div className={styles.card_wrapper}>
          <div className={styles.col}>
            {col1Data.map((item, index) => (
              <div key={index} className={`${styles.card}`}>
                <img src={s3BaseUrl + item.src} className={styles.card_img} alt="Hire Top Talent Illustrations"/>
                <p className={styles.card_title}>{item?.title}</p>
                <p className={styles.card_desc}>{item?.desc}</p>
              </div>
            ))}
            <div className={`!h-fit !hidden md:!flex ${styles.card}`}>
              <p className={styles.card_title}>Hire Top Talent!</p>
              <button
                onClick={() =>
                  router.push("https://sourcebae.com/access-of-top-developers")
                }
                className={styles.hire_btn}
              >
                Hire Now
              </button>
            </div>
          </div>

          <div
            className={`${styles.col} mt-[40px] md:mt-[79px] lg:mt-[92px] xxl:mt-[112px] c2xl:mt-[150px]`}
          >
            {col2Data.map((item, index) => (
              <div key={index} className={styles.card}>
                <img src={s3BaseUrl + item.src} className={styles.card_img}  alt="Hire Top Talent Illustrations"/>
                <p className={styles.card_title}>{item?.title}</p>
                <p className={styles.card_desc}>{item?.desc}</p>
              </div>
            ))}
            <div className={`!h-fit md:!hidden ${styles.card}`}>
              <p className={styles.card_title}>Hire Top Talent!</p>
              <button
                onClick={() =>
                  window.open(`${DOMAIN}/access-of-top-developers`, "_self")
                }
                className={styles.hire_btn}
              >
                Hire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VettingProcess;
