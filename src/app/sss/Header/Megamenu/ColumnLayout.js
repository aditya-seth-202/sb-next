"use client"
import React from "react";
import styles from "./styles.module.css";
import { s3BaseUrl } from "@/Constants/urls";
import { DOMAIN } from "@/Constants/navigationRoutes";

const ColumnLayout = ({ head, pointers, outerIndex, link }) => {
  return (
    <a href={link && link !== "disable" && `${DOMAIN}/${link}`}>
      <div
        className={`${link === "disable" && "opacity-60 !cursor-not-allowed"} ${
          link && "cursor-pointer"
        } ${styles.column_wrapper}`}
      >
        <p className={styles.col_header}>{head}</p>
        <div className={styles.col_line}></div>
        <div className={styles.pointers_wrapper}>
          {pointers.map((item, idx) => (
            <>
              <div key={idx} className="flex gap-[14px]">
                <img
                  src={s3BaseUrl + pointers[idx].src}
                  className={styles.icon}
                />
                <div>
                  <p className={styles.pointer_title}>{item.title}</p>
                  <p className={styles.pointer_content}>{item.content}</p>
                </div>
              </div>
            </>
          ))}
          {outerIndex === 0 && (
            <button
              onClick={() => {
                window.open(`${DOMAIN}/access-of-top-developers`, "_self");
              }}
              className={styles.get_started_btn}
            >
              Get Started
            </button>
          )}
        </div>
      </div>
    </a>
  );
};

export default ColumnLayout;
