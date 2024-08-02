"use client";
import React, { useState } from "react";
import style from "./style.module.css";
import logoBlack from "@/Assets/logoBlack.svg";
import Image from "next/image";
import facebook from "./Assets/facebookicon.webp";
import linkedin from "./Assets/linkedinicon.webp";
import twittericon from "./Assets/twittericon.webp";
import youtubeicon from "./Assets/youtubeicon.webp";

const Footer = () => {
  const [moreResourcesOpen, setMoreResourcesOpen] = useState(false);
  const scrollToSection = (id) => {
    console.log("object");
    const ele = document?.getElementById(id);
    ele.scrollIntoView({ behavior: "smooth" });
  };
  const moreResources = [
    {
      txt: "100 Remote Companies",
      link: "https://sourcebae.com/company/100-remote-companies",
    },
    { txt: "Top Companies", link: "https://sourcebae.com/top-companies" },
    { txt: "Help Desk", link: "https://sourcebae.com/help-desk" },
  ];

  const columnOne = [
    {
      txt: "LLM Training & Enhancement",
      link: "https://sourcebae.com/hire/llm-training-and-enhancement-developers",
    },
    {
      txt: "Generative AI",
      link: "https://sourcebae.com/hire/generative-ai-developers",
    },
    { txt: "AI/ML", link: "https://sourcebae.com/hire/ai%2Fml-developers" },
    {
      txt: "Custom Engineering",
      link: "https://sourcebae.com/hire/custom-engineering-developers",
    },
    { txt: "All Services", link: "https://sourcebae.com/hire/hire-developers" },
    {
      txt: "Technical Professionals & Teams",
      link: "https://sourcebae.com/access-of-top-developers",
    },
  ];
  const columnSec = [
    {
      txt: "Browse Remote Jobs",
      link: "https://sourcebae.com/active-requirements",
    },
    {
      txt: "Get Hired",
      link: "https://sourcebae.com/join-developers-community",
    },
    { txt: "Developer Reviews" },
    { txt: "Developer Resources" },
    { txt: "Tech Interview Questions" },
    // { txt: "MongoDB Developer" },
    // { txt: "NextJS Developers" },
  ];
  const columnThird = [
    { txt: "Blogs", link: "https://sourcebae.com/blog/" },
    { txt: "Technologies", link: "https://sourcebae.com/hire/hire-developers" },
    {
      txt: "More Resources",
    },
  ];
  const columnFourth = [
    { txt: "About Us", link: "https://sourcebae.com/about-us" },
    { txt: "Vetting Process", scroll: "vettingProcess" },
    { txt: "How it works", scroll: "howItWorks" },
    { txt: "Careers", showToast: true },
  ];

  const notify = () => toast("Please share resume at hr@shethink.in");

  return (
    <>
      <div className={style.MainContainer}>
        <div className={style.TopContainer}>
          <div className={style.FirstColumn}>
            <div className={style.ImageContainer}>
              <Image
                alt="logo"
                src={logoBlack}
                className="mb-4 cursor-pointer h-full w-full"
                onClick={() => {}}
              />
            </div>

            <div className="gap-6 md:gap-[40px] flex flex-col-reverse md:flex-row-reverse lg:flex-col">
              <div>
                <p className={style.Heading}>Address</p>
                <p
                  className={`mt-[17px] xxl:w-[236px] c2xl:w-[235px] w-[216px] md:w-[180px] ${style.Option}`}
                >
                  Plot No. 108 Dhanare Complex, Part II Vijay Nagar, Indore
                  Madhya Pradesh 452010
                </p>
              </div>

              <div>
                <p className={style.Heading}>Contact</p>
                <p className={` mt-[17px] c2xl:mt-[23px] ${style.Option}`}>
                  connect@sourcebae.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap justify-between sm:justify-start gap-6 md:gap-[46px] lg:gap-[38px] xl:gap-[60px] c2xl:gap-[80px]">
            <div className={style.col}>
              <p className={`w-[153px] ${style.Heading}`}>
                Engineering Services
              </p>
              <div className={style.list}>
                {columnOne?.map((item, idx) => {
                  return (
                    <a key={idx} href={item.link} className={style.Option}>
                      {item.txt}
                    </a>
                  );
                })}
              </div>
            </div>
            <div className={style.col}>
              <p className={style.Heading}>For Developers</p>
              <div className={style.list}>
                {columnSec?.map((item, idx) => {
                  return (
                    <React.Fragment key={idx}>
                      {item?.link ? (
                        <a
                          key={idx}
                          href={item.link}
                          className={`${
                            !item.link && "opacity-50 !cursor-not-allowed"
                          } ${style.Option}`}
                        >
                          {item.txt}
                        </a>
                      ) : (
                        <div
                          key={idx}
                          className={`${
                            !item.link && "opacity-50 !cursor-not-allowed"
                          } ${style.Option}`}
                        >
                          {item.txt}
                        </div>
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div className={style.col}>
              <p className={style.Heading}>Resources</p>
              <div className={style.list}>
                {columnThird?.map((item, idx) => {
                  return (
                    <div
                      key={idx}
                      className="flex gap-[2px] items-center"
                      onClick={() => {
                        if (item.txt === "More Resources") {
                          setMoreResourcesOpen(!moreResourcesOpen);
                        }
                      }}
                    >
                      {item?.link ? (
                        <a
                          href={item.link && item.link}
                          className={style.Option}
                        >
                          {item.txt}
                        </a>
                      ) : (
                        <div className={style.Option}>{item.txt}</div>
                      )}
                    </div>
                  );
                })}
                {moreResourcesOpen &&
                  moreResources.map((i, idx) => {
                    return (
                      <a key={idx} href={i.link} className={style.Option}>
                        {i.txt}
                      </a>
                    );
                  })}
              </div>
            </div>
            <div className={style.col}>
              <p className={style.Heading}>Company</p>
              <div className={style.list}>
                {columnFourth?.map((item, idx) => {
                  if (item.scroll) {
                    return (
                      <div
                        key={idx}
                        onClick={() => scrollToSection(item.scroll)}
                        className={style.Option}
                      >
                        {item.txt}
                      </div>
                    );
                  } else if (item.showToast) {
                    return (
                      <div key={idx} onClick={notify} className={style.Option}>
                        {item.txt}
                      </div>
                    );
                  } else if (!item.link) {
                    return <div key={idx}>{item.txt}</div>;
                  } else
                    return (
                      <a href={item.link} className={style.Option} key={idx}>
                        {item.txt}
                      </a>
                    );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.BottomContainer}>
        <p className={style.footerText}>
          ©Sourcebae 2024 | All Rights Reserved
        </p>

        <div className={style.mob_break_line}></div>
        <div className={style.Icons}>
          <a
            href="https://www.facebook.com/people/Sourcebae/100083377540810/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={style.ImageFile}
              src={facebook}
              alt="Facebook Icon"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/sourcebae/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={style.ImageFile}
              src={linkedin}
              alt="Linkedin Icon"
            />
          </a>
          <a
            href="https://twitter.com/sourcebae_com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={style.ImageFile}
              src={twittericon}
              alt="Twitter Icon"
            />
          </a>
          <a
            href="https://www.youtube.com/@sourcebae"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={style.ImageFile}
              src={youtubeicon}
              alt="Youtude Icon"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
