import React from "react";
import styles from "./styles.module.css";
import Title from "../Common/Title";
import Image from "next/image";
// import Frame1 from "./Assets/Frame1.webp";
// import Frame2 from "./Assets/Frame2.webp";
// import Frame3 from "./Assets/Frame3.webp";
import Icon1 from "./Assets/Icon1.webp";
import Icon2 from "./Assets/Icon2.webp";
import Icon3 from "./Assets/Icon3.webp";
import { s3BaseUrl } from "@/Constants/urls";

const AiSkillDevelopment = () => {
  return (
    <div className={styles.main_container}>
      <Title
        head={"AI Skill Assessments for Developers"}
        subHead={"Revolutionize Hiring"}
        alignment={"center"}
        width={"lg:w-[478px] xxl:w-[673px] c2xl:w-[898px]"}
      />
      <div className={styles.card_wrapper}>
        <div className={styles.first_row}>
          <div className={`${styles.card_style} ${styles.frame1}`}>
            <Image src={Icon1} className={styles.icon}    alt="Illustrations of Sourcebae's Verified Developers"/>
            <div className={styles.card1_content_wrapper}>
              <p className={styles.card_head}>Verified Developers</p>
              <p className={styles.desc}>
                Based on client requirements, our AI-powered platform selects
                the top 10 developers from our talent pool.
              </p>
              <div className={styles.verify_developers_steps}>
                {[
                  "Thoroughly Screened",
                  "Proven Track Record",
                  "Quality Assurance",
                ].map((item, idx) => (
                  <div className={styles.pill} key={idx}>
                    <div className={styles.purple_dot}></div>
                    <p className={styles.pill_item}>{item}</p>
                  </div>
                ))}
                <div>
                  <Image
                    className={styles.frame1_img}
                    src={s3BaseUrl + "png/1718877985789.webp"}
                    fill={false} width={110} height={40}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.card_style} ${styles.frame2}`}>
            <Image src={Icon2} className={styles.icon} alt="Illustrations of Sourcebae's Verified Developers"/>
            <div className={styles.card2_content_wrapper}>
              <p className={styles.card_head}>AI Skill Assessments</p>
              <p className={styles.desc}>
                With AI-powered tests, we accurately gauge a candidate&apos;s
                technical and soft skills.
              </p>
            </div>
            <div>
              <Image
                 fill={false} width={110} height={40}
                src={s3BaseUrl + "png/1718878113090.webp"}
                className={styles.frame2_img}
                alt="AI Skill Assessments Illustrations"
              />
            </div>
          </div>
        </div>

        <div className={`${styles.card_style} ${styles.frame3}`}>
          <div className={styles.card3_content_wrapper}>
            <Image src={Icon3} className={styles.icon}     fill={false} width={110} height={40}   alt="On-Boarding & Documentation Illustrations"/>
            <p className={styles.card_head}>On-Boarding & Documentation</p>
            <p className={`md:w-[213px] lg:w-full ${styles.desc}`}>
              After vetting, we onboard talent with customers within 48 hours
              and handle all legal documents, including contracts and NDAs.
            </p>
          </div>
          <div className="mt-[2px]">
            <Image
              src={s3BaseUrl + "png/1718802508123.webp"}
              className={styles.frame3_img}
              fill={false} width={110} height={40}   alt="On-Boarding & Documentation Illustrations"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiSkillDevelopment;
