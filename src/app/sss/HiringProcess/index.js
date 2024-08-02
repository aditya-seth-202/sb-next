"use client"
import React, { useState } from "react";
import styles from "./styles.module.css";
import Title from "../Common/Title";
import Image from "next/image";
import Icon1 from "./Assets/Icon1.webp";
import Icon2 from "./Assets/Icon2.webp";
import Icon3 from "./Assets/Icon3.webp";
import Icon4 from "./Assets/Icon4.webp";
import Icon5 from "./Assets/Icon5.webp";
import { useRouter } from "next/navigation";
import { DOMAIN } from "@/Constants/navigationRoutes";

const HiringProcess = () => {
  const tabs = ["By Engagement", "By Location", "By Hiring Process"];
  const [tab, setTab] = useState(0);
  const router = useRouter();
  const cardData = {
    0: [
      {
        icon: Icon1,
        head: "Contract",
        desc: "Hire a full-time contract software programmer who seamlessly integrates with your team.",
      },
      {
        icon: Icon2,
        head: "C2H Model",
        desc: "If you're impressed with your developer's performance, you can transition them to your permanent payroll ",
      },
      // {
      //   icon: Icon3,
      //   head: "Permanent",
      //   desc: "If you're impressed with your developer's performance, you can seamlessly transition them to your permanent payroll after a designated period. This ensures smooth integration, continuity, and long-term success for your team, enhancing overall productivity and stability.",
      // },
      {
        icon: Icon4,
        head: "On-Site",
        desc: "Impressed with your developer's performance? Easily move them to your permanent payroll.",
      },
      {
        icon: Icon5,
        head: "Remote",
        desc: "Secure full-time remote software engineers who can work with your team from any place.",
      },
    ],
  };
  return (
    <div className={styles.main_container}>
      <Title
        head={"Expert Hiring for All Your Tech Needs"}
        subHead={"Hiring Process"}
        alignment={"center"}
        width={"100%"}
      />
      <div className="w-full items-center flex flex-col">
        <p className={styles.desc}>
          Outsource your entire recruitment process to our experts. We ensure
          you hire the right software developers perfectly tailored to your
          business needs, saving you time and resources while securing top
          talent.
        </p>
        {/* <div className={styles.tab_wrapper}>
          {tabs.map((item, idx) => (
            <div
              onClick={() => setTab(idx)}
              className={`${
                idx === tab ? "border-b-[#BC53FF]" : "opacity-50"
              } ${styles.tab}`}
            >
              {item}
            </div>
          ))}
        </div> */}

        <div className={styles.card_wrapper}>
          {cardData[tab].map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div>
                <Image src={item.icon} className={styles.icon} alt="Icons Image"/>
                <p className={styles.card_head}>{item.head}</p>
                <p className={styles.card_desc}>{item.desc}</p>
              </div>
              <div
                className={styles.touch_txt_wrapper}
                onClick={() =>
                  window.open(`${DOMAIN}/access-of-top-developers`, "_self")
                }
              >
                <p className={styles.touch_txt}>Get in Touch</p>
       
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HiringProcess;
