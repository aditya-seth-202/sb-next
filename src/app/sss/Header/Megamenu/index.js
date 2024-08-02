"use client"

import React from "react";
import styles from "./styles.module.css";
import ColumnLayout from "./ColumnLayout";
import FeaturedResources from "./FeaturedResources";

export const whatWeDo = [
  {
    head: "Custom Engineering",
    pointers: [
      {
        src: "webp/1718802740936.webp",
        title: "Generative AI",
        content:
          "Discover customized large language models (LLMs) for enterprises, AI-driven code generation, and more.",
      },
      {
        src: "webp/1718802543396.webp",
        title: "AI/ ML",
        content:
          "Accelerate your AI adoption, streamline machine learning operations, and enhance your tech capabilities.",
      },
      {
        src: "webp/1718802621997.webp",
        title: "Other Services",
        content:
          "Explore innovative operational development, seamless cloud migration, and more.",
      },
    ],
  },
  {
    head: "LLM Training and Enhancement",
    pointers: [
      {
        src: "webp/1718802779577.webp",
        title: "Foundations and Models",
        content:
          "LLM reasoning and coding enhancement using proprietary human date.",
      },
    ],
  },
  {
    head: "On- Demand Talent",
    pointers: [
      {
        src: "webp/1718802937476.webp",
        title: "Technical Professionals and Teams",
        content: "Hire vetted talent to scale your engineering teams.",
      },
    ],
  },
];

export const forDevelopers = [
  {
    head: "Opportunities",
    link: "apply-developers",
    pointers: [
      {
        src: "webp/1718803027191.webp",
        title: "Job Opportunities",
        content: "Get matched to high-paying tech jobs with top companies.",
      },
    ],
  },
  {
    head: "Hiring",
    link: "join-developers-community",
    pointers: [
      {
        // src: "webp/1718802621997.webp",
        src: "webp/1718803084160.webp",
        title: "How to get hired",
        content:
          "How sourcebae works and how we match you to job opportunities.",
      },
    ],
  },

  {
    head: "Support",
    link: "help-desk",
    pointers: [
      {
        src: "webp/1718802937476.webp",
        title: "Developer Support",
        content: "Get answers to common questions about job matching and more.",
      },
    ],
  },

  {
    head: "Resources",
    link: "disable",
    pointers: [
      {
        src: "webp/1718802621997.webp",
        title: "Developer Resources",
        content:
          "Tips, Tricks and more to enhance your tech skills and stand out with clients.",
      },
    ],
  },
];

const Megamenu = ({ tabSelected, onScrollFunction }) => {
  if (tabSelected === 1)
    return (
      <div className={styles.main_wrapper} onClick={onScrollFunction}>
        <div className={styles.content_wrapper}>
          {whatWeDo.map((item, idx) => (
            <ColumnLayout
            key={idx}
              head={item.head}
              pointers={item.pointers}
              outerIndex={idx}
            />
          ))}
          <FeaturedResources
            selectedOption={tabSelected !== 1 ? true : false}
          />
        </div>
      </div>
    );
  else
    return (
      <div className={styles.main_wrapper} onClick={onScrollFunction}>
        <div className={styles.content_wrapper}>
          <div className="flex flex-wrap gap-y-[60px] gap-x-[200px] c2xl:gap-x-[309px]">
            {forDevelopers.map((item, idx) => (
              <ColumnLayout
                head={item.head}
                pointers={item.pointers}
                link={item.link}
                key={idx}
              />
            ))}
          </div>

          <FeaturedResources
            selectedOption={tabSelected !== 1 ? true : false}
          />
        </div>
      </div>
    );
};

export default Megamenu;
