import React from "react";
import styles from "./styles.module.css";
import Title from "../Common/Title";
import Image from "next/image";
import grpImg from "./Assets/grpImg.webp";
import people from "./Assets/people.webp";

const WhySourcebae = () => {
  return (
    <div className={styles.main_container}>
      <Title
        head={"Why companies choose Sourcebae"}
        subHead={"About Us"}
        alignment={"center"}
        className={"w-full"}
        width={"w-[290px] md:w-[478px] lg:w-full"}
      />

      <div className={styles.content_wrapper}>
        <Image src={grpImg} className={styles.grp_img} alt="Sourcebae Group Illustrations"/>
        <p className={styles.content}>
          <span>SourceBae </span>will help you find the{" "}
          <span>best tech experts</span>; Our AI tools ensure candidate&apos;s skills
          and experience to <span>build a professional team for you</span>. We
          have advanced technology and a network to make your{" "}
          <span>hiring process streamlined.</span>
        </p>
      </div>

      <div className={styles.box_wrapper}>
        <div className={`lg:!hidden ${styles.box_padding} ${styles.black_box}`}>
          <p className={`${styles.card_head} !text-ffffff`}>Technology</p>

          <p className={`!text-ffffff !opacity-100 ${styles.desc}`}>
            We have advanced technology and a network to make your hiring
            process streamlined.
          </p>
        </div>

        <div className={`!flex-row-reverse lg:!flex-row ${styles.row}`}>
          <div className={`${styles.box_padding} ${styles.green_box}`}>
            <p className={styles.card_head}>Customer Service</p>
            <div>
              <p className={styles.stats}>250+</p>
              <p className={styles.desc}>Clients served </p>
            </div>
          </div>
          <div className={`${styles.box_padding} ${styles.white_box}`}>
            <p className={styles.card_head}>Network</p>
            <div>
              <p className={styles.stats}>3000+</p>
              <p className={styles.desc}>Partners in our ecosystem</p>
            </div>
          </div>
          <div
            className={`!hidden lg:!flex  ${styles.box_padding} ${styles.black_box}`}
          >
            <p className={`${styles.card_head} !text-ffffff`}>Technology</p>

            <p className={`!text-ffffff !opacity-100 ${styles.desc}`}>
              Streamline your hiring process with our advanced technology and
              extensive network.
            </p>
          </div>
        </div>

        <div className={`!flex-col md:!flex-row ${styles.row}`}>
          <div
            className={`${styles.rec_box_padding} ${styles.pink_box} !flex-row gap-[29px] xxl:gap-10 c2xl:gap-[55px]  items-center !justify-start`}
          >
            <div className="inline-block whitespace-nowrap">
              <p className={styles.stats}>10+ Years</p>
              <p className={styles.card_head}>Experience</p>
            </div>
            <p className={`w-[50%] ${styles.desc}`}>
              Experience in the Industry
            </p>
          </div>
          <div className={`${styles.rec_box_padding} ${styles.white_rec_box} `}>
            <div className="flex justify-between">
              <p className={styles.stats}>220+</p>
              <Image
                src={people}
                className="w-[137px] h-[41px] c2xl:w-[183px] c2xl:h-[55px]"
                alt="Sourcebae Group Illustrations"
              />
            </div>
            <p className={`w-[60%] md:w-full ${styles.desc}`}>
              Sourcebae Team Worldwide
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhySourcebae;
