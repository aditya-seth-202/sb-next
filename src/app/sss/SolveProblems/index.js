"use client"

import React from "react";
import styles from "./styles.module.css";
import Title from "../Common/Title";
import card1 from "./Assets/card1.webp";
import card3 from "./Assets/card3.webp";

import card2 from "./Assets/card2.webp";
import card4 from "./Assets/card4.webp";
import Image from "next/image";

import { DOMAIN } from "@/Constants/navigationRoutes";

const SolveProblems = () => {

  const cardsArr = [
    {
      step: "01",
      stepBg: "bg-[#986EEB] ",
      head: "Share requirements.",
      desc: "Get matched to pre-vetted developers using AI.",
      bg: "bg-[#ECE2FA] mt-0 pr-[13px] lg:pr-0",
      src: card1,
      imgExtraStyles: "pr-0 lg:pr-6 xxl:pr-[18px] c2xl:pr-6 pt-2 md:pt-0",
    },
    {
      step: "02",
      stepBg: "bg-[#FD6FAF] ",
      head: "Let Sourcebae work its magic.",
      desc: "Trust Sourcebae for Top Talent. We match you with the best developers to fit your specific requirements",
      bg: "bg-[#FFE3EF] mt-0 md:mt-[63px] lg:mt-[80px]",
      src: card2,
      imgExtraStyles: "",
    },
    {
      step: "03",
      stepBg: "bg-[#FD9770]",
      head: "Schedule your interview.",
      desc: "Arrange Your Interview. We meticulously screen all developers to speed up your hiring journey.",
      bg: "bg-[#FFECE9]  mt-0",
      src: card3,
      imgExtraStyles:
        "pr-0 lg:pr-6 xxl:pr-[18px] c2xl:pr-6 pt-2 md:pt-0 w-[374px] max-w-none md:w-full",
    },
    {
      step: "04",
      stepBg: "bg-[#120A2C] ",
      head: "Autopilot HR and compliance",
      desc: "Automated HR and Compliance. We manage salaries, HR paperwork, and WFH setup seamlessly.",
      bg: "bg-[#FFF1BF]  mt-0 md:mt-[63px] lg:mt-[80px]",
      src: card4,
      imgExtraStyles: "",
    },
  ];
  return (
    <div className={styles.main_container} id="howItWorks">
      <Title
        head={"Easy Hiring Solutions for CEOs, CTOs, and CHROs"}
        subHead={"What We Do"}
        alignment={"left"}
        className={"w-[343px] md:w-[497px] xxl:w-[673px] c2xl:w-[898px]"}
      />
      <div className={styles.card_wrapper}>
        {cardsArr.map((item, index) => {
          return (
            <div className={`${item.bg} ${styles.card}`} key={index}>
              <div className={`${item?.stepBg} ${styles.step_div}`}>
                {item.step}
              </div>
              <p className={styles.card_head}>{item.head}</p>
              <p className={styles.desc}>{item.desc}</p>
              <Image
                src={item.src}
                className={`${item.imgExtraStyles} ${styles.card_img}`}
                alt="Illustrations of sourcebae developers"
              />
            </div>
          );
        })}
      </div>

      <button
        onClick={() =>
          window.open(`${DOMAIN}/access-of-top-developers`, "_self")
        }
        className={styles.btn}
      >
        Hire Developers Now
      </button>
    </div>
  );
};

export default SolveProblems;
