"use client"
import React from "react";
import styles from "./styles.module.css";
import Title from "../Common/Title";
import SingleQuestion from "./SingleQuestion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = React.useState(0);
  const faqs = [
    {
      question: "How Long Does It Take To Onboard A Developer?",
      answer:
        "It does take at least 2-4 days to complete a process, including candidate verification and verifying the skill-set of candidates as per the requirements.",
    },
    {
      question: "How Long Will I Be Able To Hire Talent?",
      answer:
        "You can hire remote engineers for any period as per requirement, although we encourage both clients and engineers to pick long term, full time work engagement.",
    },
    {
      question: "Can We Interview Your Candidates Before We Hire Them?",
      answer:
        "Our interview experts conduct technical interviews with our talent, as well as a paired coding interview. We also record the technical interview for you to review or ask any specific questions you have. You can always interview them yourself.",
    },
    {
      question: "We Don't Have Any Legal Entity In India. Can We Still Hire?",
      answer:
        "Yes, we cover that part. A company will not have to register in India. We will enter into an agreement with the company and another contract between Sourcebae and Talent, as per Indian labour laws.",
    },
  ];

  const toggleQuestion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.left_div}>
        <Title
          head={"Still Curious? These might help"}
          subHead={"FAQ"}
          otherStyles={"text-center lg:text-left"}
        />

        {/* <div className="hidden lg:block">
          <button className={styles.read_btn}>Read All FAQ's</button>
        </div> */}
      </div>
      <div className={styles.right_div}>
        {faqs?.map((item, index) => {
          return (
            // index < 7 && (
            <div key={index.toString()}>
              <SingleQuestion
                ques={item?.question}
                ans={item?.answer}
                isOpen={index === openIndex}
                toggleQuestion={() => toggleQuestion(index)}
              />

              <div className="bg-[#000000] bg-opacity-20 my-6 h-[1px] w-full" />
            </div>
          );
          // );
        })}
      </div>

      {/* <div className="lg:hidden">
        <button className={styles.read_btn}>Read All FAQ's</button>
      </div> */}
    </div>
  );
};

export default FAQ;
