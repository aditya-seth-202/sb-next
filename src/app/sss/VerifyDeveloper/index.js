"use client"
import React, { useState } from "react";
import styles from "./styles.module.css";
import Title from "../Common/Title";
import { s3BaseUrl } from "@/Constants/urls";
import { InfiniteLooper } from "../InfiniteLooping/InfiniteLooping";

const VerifyDeveloper = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [runningState, setRunningState] = useState("running");

  const devData = [
    {
      src: "png/1718869237314.png",
      name: "Anubhav",
      designation: "Team Lead ",
      desc: "Anubhav is an experienced team lead with a proven track record of guiding development teams to success. Combining deep technical knowledge with leadership skills, he ensures projects are delivered on time and to the highest quality standards",
      skills: [
        "Leadership",
        "data engineer",
        "Decision Making",
        "React Js",
        "Planning",
        "Frontend",
        "Cloud",
      ],
      exp: "5+ years",
      availability: "Full-time",
    },
    {
      src: "png/1718803716559.webp",
      name: "Aditya",
      designation: "Fullstack Developer",
      desc: "Aditya is a versatile full stack developer proficient in both frontend and backend technologies. Skilled in JavaScript, React, Node.js, and database management, he excels in creating comprehensive and high-performance web applications from end to end.",
      skills: [
        "Computer Science",
        "data engineer",
        "Decision Making",
        "React Js",
        "Planning",
        "Frontend",
        "Cloud",
      ],
      exp: "5+ years",
      availability: "Full-time",
    },
    {
      src: "png/1718803291888.webp",
      name: "Chetan",
      designation: "Backend Developer",
      desc: "Chetan is a highly skilled backend developer specializing in building robust and scalable server-side applications. With expertise in Node.js, Python, and databases like MongoDB and PostgreSQL, he ensures secure and efficient data management and API design.",
      skills: [
        "Computer Science",
        "data engineer",
        "Decision Making",
        "Node Js",
        "Planning",
        "Backend",
        "Cloud",
      ],
      exp: "7+ years",
      availability: "Full-time",
    },
    {
      src: "png/1718802984371.webp",
      name: "Rupali",
      designation: "Frontend Developer",
      desc: "Rupali is a creative front end developer skilled at turning designs into interactive, dynamic web experiences. Proficient in modern frontend technologies, she focuses on usability and responsive design to enhance user interaction and satisfaction.",
      skills: [
        "Computer Science",
        "data engineer",
        "Decision Making",
        "React Js",
        "Planning",
        "Frontend",
        "Cloud",
      ],
      exp: "3+ years",
      availability: "Full-time",
    },
    {
      src: "png/1718803548567.webp",
      name: "Abhishek",
      designation: "Frontend Developer",
      desc: "Abhishek is a highly proficient front end developer dedicated to creating visually stunning and intuitive user interfaces. Expert in translating design into dynamic, responsive web experiences, he ensures that each application is both beautiful and user-friendly.",
      skills: [
        "Computer Science",
        "data engineer",
        "Decision Making",
        "React Js",
        "Planning",
        "Frontend",
        "Cloud",
      ],
      exp: "2.5+ years",
      availability: "Full-time",
    },
  ];

  const handleMouseEnter = (idx) => {
    setExpandedCard(idx);
    setRunningState("paused");
  };
  const handleMouseLeave = () => {
    setExpandedCard(null);
    setRunningState("running");
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.content_wrapper}>
        <Title
          head={"Verified Developers"}
          subHead={"Top Talent"}
          className={"w-full text-center lg:!text-left"}
          width={"min-w-full"}
        />
        <p className={styles.desc}>
          Each of our developers is rigorously vetted for skills and experience,
          ensuring you get top-tier talent for your projects. Trust our
          verification process to deliver exceptional results every time.
        </p>
      </div>

      <div>
        <InfiniteLooper speed={50} runningState={runningState}>
          <div className={styles.card_wrapper} onMouseLeave={handleMouseLeave}>
            {devData.map((item, idx) => (
              <div
                onMouseEnter={() => handleMouseEnter(idx)}
                className={`
                ${styles.card}`}
                key={idx}
              >
                <div className="flex justify-between">
                  <div className={styles.dev_details_wrapper}>
                    <img
                      src={s3BaseUrl + item.src}
                      className={styles.dev_img}
                      alt="Sourcebae developer"
                    />

                    <div className="flex flex-col justify-between">
                      <div className={styles.designation}>
                        {item.designation}
                      </div>
                      <p className={styles.name}>{item.name}</p>
                    </div>
                  </div>
                  <div className={styles.top_rated_div}>
                    <p className={styles.top_rated_txt}>Top Rated</p>
                  </div>
                </div>
                <div className={styles.desc_wrapper}>
                  {item.desc && (
                    <p
                      className={`${
                        expandedCard === idx ? "flex" : "flex md:hidden"
                      } ${styles.dev_desc}`}
                    >
                      {item.desc}
                    </p>
                  )}
                  <div className={styles.skills_wrapper}>
                    {item.skills.map((i, skillIdx) => (
                      <div className={styles.skill_pill} key={skillIdx}>
                        <p className={styles.dev_desc}>{i}</p>
                      </div>
                    ))}
                  </div>
                  <div className="md:w-[80%] w-full">
                    <div className={styles.hor_line}></div>
                    <div className={styles.bottom_div}>
                      <p className={styles.exp_label}>
                        Experience:{" "}
                        <span className="font-bold opacity-80">{item.exp}</span>
                      </p>
                      <p className={styles.exp_label}>
                        Availability{" "}
                        <span className="font-bold opacity-80">
                          {item.availability}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </InfiniteLooper>
      </div>
    </div>
  );
};

export default VerifyDeveloper;
