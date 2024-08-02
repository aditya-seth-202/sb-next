"use client"
import React from "react";
import Title from "../Common/Title";
import styles from "./styles.module.css";
import { DOMAIN } from "@/Constants/navigationRoutes";
const Blogs = () => {
  const cardData = [
    {
      desc: "SAP Tutorial Navigator | Tutorials for SAP Developers",
      link: "blog/sap-tutorial-navigator-tutorials-for-sap-developers/",
    },
    {
      link: "blog/trending-coding-languages/",
      desc: "Trending Coding Languages",
    },
    {
      link: "blog/5-best-hrms-software-streamlining-your-human-resource-management/",
      desc: "5 Best HRMS Software: Streamlining Your Human Resource Management",
    },
    {
      link: "blog/which-programming-languages-will-be-dominating-2023/",
      desc: "Which Programming Languages Will be Dominating 2023?",
    },
  ];
  return (
    <div className={styles.main_container}>
      <Title
        head={"Our Featured Writings"}
        subHead={"Blogs"}
        alignment={"center"}
        width={"w-[327px] md:w-full"}
      />
      <div className={styles.card_wrapper}>
        {cardData.map((item, idx) => (
          <div
            key={idx}
            className={` ${
              idx === 0 || idx === 3
                ? "w-full md:w-[399px] lg:w-[453px] xl:w-[612px] xxl:w-[711px] c2xl:w-[800px] xxxl:w-[991px]"
                : "xxl:w-[499px] w-full md:w-[224px] lg:w-[346px] c2xl:w-[520px] xxxl:w-[699px]"
            } ${styles.card} ${styles[`card${idx}`]} `}
          >
            <div className={styles.content}>
              <p className={styles.card_desc}>{item.desc}</p>
              <div
                onClick={() => window.open(`${DOMAIN}/${item.link}`, "_self")}
                className="cursor-pointer flex gap-3 items-center mt-[11px] xxl:mt-[19px] c2xl:mt-[25px]"
              >
                <p className={styles.read_more}>Read More</p>
                <div className={styles.arr_div}>
                  {/* <GoArrowRight className={styles.arr} color={"#fff"} /> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
