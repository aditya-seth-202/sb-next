"use client"

import React, { useState } from "react";
import styles from "./styles.module.css";
import { forDevelopers, whatWeDo } from ".";
import ColumnLayout from "./ColumnLayout";
import FeaturedResources from "./FeaturedResources";
import { loginDropdownOptions, SignupDropdownOptions } from "..";
import { DOMAIN } from "@/Constants/navigationRoutes";

const HamburgerMenu = () => {
  const [openTab, setOpenTab] = useState(null);

  const optionsData = [
    {
      label: "Login",
      dropdownArr: loginDropdownOptions,
    },
    {
      label: "Signup",
      dropdownArr: SignupDropdownOptions,
    },
    {
      label: "What We Do",
      dropdownArr: whatWeDo,
      showResouces: true,
    },
    {
      label: "For Developers",
      dropdownArr: forDevelopers,
      showResouces: true,
    },
    {
      label: "For Jobs",
    },
  ];

  return (
    <div className={styles.main_wrapper}>
      {optionsData.map((item, index) => (
        <>
          <div
            key={index}
            className={styles.drop_div}
            onClick={() => {
              {
                index !== optionsData?.length - 1 &&
                  (openTab === index ? setOpenTab(null) : setOpenTab(index));
              }
            }}
          >
            <p className={styles.dropdown_label}>{item.label}</p>
    
          </div>
          {openTab === index && (
            <div
              className={`${
                (item.label === "Login" || item.label === "Signup") &&
                "!gap-4 pl-3"
              } ${styles.content_wrapper}`}
            >
              {item?.dropdownArr?.map((option, idx) => {
                if (option.pointers)
                  return (
                    <ColumnLayout
                      head={option.head}
                      pointers={option.pointers}
                      link={option.link}
                      key={idx}
                    />
                  );
                else
                  return (
                    <p
                    key={idx}
                      className="cursor-pointer text-14 opacity-70 text-primary-black"
                      onClick={() => {
                        window.open(`${DOMAIN}/${option.link}`, "_self");
                      }}
                    >
                      {option.head}
                    </p>
                  );
              })}

              {item?.showResouces && (
                <>
                  <div className={styles.line_brk}></div>
                  <FeaturedResources />
                </>
              )}
            </div>
          )}
        </>
      ))}

      <button
        onClick={() => {
          window.open(`${DOMAIN}/access-of-top-developers`, "_self");
        }}
        className={styles.get_started_btn}
      >
        Get Started
      </button>
    </div>
  );
};

export default HamburgerMenu;
