import React from "react";
import styles from "./style.module.css";
import BestTalentCard from "./Cards/BestTalentCard";
import SmartAiCard from "./Cards/SmartAiCard";
import FasterCard from "./Cards/7xFasterCard";
import Image from "next/image";
import arr1 from "./Assets/arr1.webp";
import arr2 from "./Assets/arr2.webp";
import bg from "./Assets/bg.webp";
import { DOMAIN } from "@/Constants/navigationRoutes";
const HeroSection = () => {
  return (
    <div className="px-5 w-full flex justify-center">
      <div className={styles.main_container}>
        <Image src={bg} fill={true} priority={true} className="-z-10 absolute h-max" alt="backgroundimg"/>
        <div className="relative md:w-[526px] md:h-[292px] lg:h-fit lg:w-[70%] xl:w-[60%] xxl:w-[55%] c2xl:w-[80%] xxxl:w-[55%] md:flex">
          <div className={`lg:hidden ${styles.reduc_card}`}>
            <p className={styles.reduc_per}>87%</p>
            <p className={styles.reduc_desc}>Reduction in Hiring Cost</p>
          </div>
          <BestTalentCard />
          <SmartAiCard />
          <FasterCard />
          <Image src={arr1} className={styles.arr1} alt="Arrow Illustartoins - Sourcebae" priority={true} />
        </div>

        <div className="relative">
          <Image src={arr2} className={styles.arr2}  alt="Arrow Illustartoins - Sourcebae"  priority={true}/>
          <div className="md:mt-[30px] lg:mt-[219px] xl:mt-[279px] c2xl:mt-[418px] ">
            <p className={styles.hire_desc}>
              Hire the top 1%
              <br /> Tech Talent Remotely{" "}
              <span className="font-bold">Save Time and Effort</span>
            </p>

            <button
              // onClick={() =>
              //   window.open(`${DOMAIN}/access-of-top-developers`, "_self")
              // }
              className={styles.hire_btn}
            >
              Hire Developers Now
            </button>
            <div className={`hidden lg:block ${styles.reduc_card}`}>
              <p className={styles.reduc_per}>87%</p>
              <p className={styles.reduc_desc}>Reduction in Hiring Cost</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
