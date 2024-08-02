"use client"
import React from "react";
import styles from "./styles.module.css";
import Title from "../Common/Title";
import Image from "next/image";
import grp_img from "./Assets/grp_img.webp";
import { s3BaseUrl } from "@/Constants/urls";

import { useRouter } from "next/navigation";
import { DOMAIN } from "@/Constants/navigationRoutes";
import { InfiniteLooper } from "../InfiniteLooping/InfiniteLooping";

const Technologies = () => {
  const router = useRouter();
  const techArray = [
    {
      src: "webp/1718804853050.webp",
      tech: "Xamarin",
      url: "hire/xamarin-developers",
    },
    {
      src: "webp/1718805032385.webp",
      tech: "React JS",
      url: "hire/react-js-developers",
    },
    {
      src: "webp/1718805057028.webp",
      tech: "CodeIgniter",
      url: "hire/codeigniter-developers",
    },
    {
      src: "webp/1718805086251.webp",
      tech: "NativeScript",
      url: "hire/nativescript-developers",
    },
    {
      src: "webp/1718805105043.webp",
      tech: "Quarkus",
      url: "hire/quarkus-developers",
    },
    {
      src: "webp/1718805129790.webp",
      tech: "NestJS",
      url: "hire/nestjs-developers",
    },
    {
      src: "webp/1718805150958.webp",
      tech: "Adonis.JS",
      url: "hire/adonisjs-developers",
    },
    {
      src: "webp/1718805167146.webp",
      tech: "Cake PHP",
      url: "hire/cakephp-developers",
    },
    {
      src: "webp/1718805189430.webp",
      tech: "Backbone JS",
      url: "hire/backbone.js-developers",
    },
    {
      src: "webp/1718805206279.webp",
      tech: "JavaScript",
      url: "hire/javascript-developers",
    },
    {
      src: "webp/1718805225804.webp",
      tech: "Flutter",
      url: "hire/flutter-developers",
    },
    {
      src: "webp/1718805245278.webp",
      tech: ".NET Core",
      url: "hire/.net-core-developers",
    },
    {
      src: "webp/1718805264522.webp",
      tech: "Wordpress",
      url: "hire/wordpress-developers",
    },
    {
      src: "webp/1718805285392.webp",
      tech: "Angular JS",
      url: "hire/angular-js-developers",
    },
    {
      src: "webp/1718805301807.webp",
      tech: "Node JS",
      url: "hire/nodejs-developers",
    },
    {
      src: "webp/1718805317766.webp",
      tech: "Ionic",
      url: "hire/ionic-developers",
    },
    {
      src: "webp/1718805334508.webp",
      tech: "Koa.JS",
      url: "hire/koa.js-developers",
    },
  ];
  return (
    <div className={styles.main_container}>
      <Title
        head={"Technologies we’re interested in"}
        subHead={"Technologies"}
        alignment={"center"}
        width={"w-[270px] md:w-full"}
      />
      <div className="flex items-center flex-col px-5">
        <div className={styles.input_wrapper}>
          <input
            readOnly
            className={styles.input + " cursor-pointer"}
            placeholder="Search the services you are looking for"
            onClick={() =>
              router.push("https://sourcebae.com/hire/hire-developers")
            }
          />

        </div>
        <div
          className={styles.explore_btn + " cursor-pointer"}
          onClick={() =>
            router.push("https://sourcebae.com/hire/hire-developers")
          }
        >
          <Image src={grp_img} className={styles.grp_img} alt="Icons Image"/>
          <p className={styles.explore_text}>Explore All Services</p>

        </div>
      </div>

      <div className={styles.tech_wrapper}>
        <div>
          <InfiniteLooper direction={"left"} speed={50}>
            <div className="flex items-center ">
              {techArray?.map((item, index) => (
                <div
                  onClick={() => window.open(`${DOMAIN}/${item?.url}`, "_self")}
                  key={index}
                  className={styles.tags + " cursor-pointer"}
                >
                  <img
                    className={styles.tech_img}
                    src={s3BaseUrl + item?.src}
                    alt={`${item.tech} icon image`}
                    loading="lazy"

                  />
                  <p className={styles.tech}>{item.tech}</p>
                </div>
              ))}
            </div>
          </InfiniteLooper>
        </div>

        <div className="my-3 lg:my-[35px]">
          <InfiniteLooper direction={"right"} speed={50}>
            <div className="flex items-center ">
              {techArray?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => window.open(`${DOMAIN}/${item?.url}`, "_self")}
                  className={styles.tags + " cursor-pointer"}
                >
                  <img
                       className={styles.tech_img}
                       src={s3BaseUrl + item?.src}
                    alt={`${item.tech} icon image`}
                    loading="lazy"
                    
                  />
                  <p className={styles.tech}>{item.tech}</p>
                </div>
              ))}
            </div>
          </InfiniteLooper>
        </div>

        <div>
          <InfiniteLooper direction={"left"} speed={50}>
            <div className="flex items-center">
              {techArray.reverse()?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => window.open(`${DOMAIN}/${item?.url}`, "_self")}
                  className={styles.tags + " cursor-pointer"}
                >
                  <img
                      className={styles.tech_img}
                      src={s3BaseUrl + item?.src}
                    alt={`${item.tech} icon image`}
                    loading="lazy"
                  />
                  <p className={styles.tech}>{item.tech}</p>
                </div>
              ))}
            </div>
          </InfiniteLooper>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
