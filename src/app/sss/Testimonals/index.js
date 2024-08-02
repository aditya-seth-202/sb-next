import React from "react";
import styles from "./styles.module.css";
import Title from "../Common/Title";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel";

import TestimonalsCards from "./TestimonalsCards";
import TestimonalCol1 from "./TestimonalCol1";
import TestimonalCol3 from "./TestimonalCol3";
import TestimonalCol2 from "./TestimonalCol2";

const Testimonals = () => {
  return (
    <div className={styles.wrapper} id="test">
      <div className={styles.main_container}>
        <Title
          head={"Selected by Forward-Thinking Leaders"}
          subHead={"Testimonial"}
          alignment={"center"}
          otherStyles={"!text-[#FFFFFF]"}
        />
        <p className={styles.desc}>
          Trusted by 12 Unicorns, 32 YC-funded companies, 7 Fortune 500
          Companies, and thousands of customers.
        </p>
        <div className="landing_page_carousel">
          <div className={`hidden md:block ${styles.carousel_wrapper}`}>
            <Carousel
              showIndicators={false}
              showArrows={false}
              showStatus={false}
              width={"100%"}
            >
              <TestimonalsCards />
              {/* <TestimonalsCards /> */}
            </Carousel>
          </div>

          <div className={` md:hidden mt-10 ${styles.carousel_wrapper}`}>
            <Carousel showArrows={false} showStatus={false} width={"100%"}>
              <TestimonalCol1 />
              <TestimonalCol2 />
              <TestimonalCol3 />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonals;
