import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import styles from "./styles.module.css";
import TopDevCta from "./TopDevsCta";
import WhySourcebae from "./WhySourcebae";
import SolveProblems from "./SolveProblems";
import VettingProcess from "./VettingProcess";
import AiSkillDevelopment from "./AiSkillDevelopment";
import VerifyDeveloper from "./VerifyDeveloper";
import HiringProcess from "./HiringProcess";
import RecentProjects from "./RecentProjects";
import Technologies from "./Technologies";
import TrustedSkills from "./TrustedSkills";
import CareerPath from "./CareerPath";
import Blogs from "./Blogs";
import CodingJourney from "./CodingJourney";
import FAQ from "./FAQ";
import ShortcutCta from "./ShortcutCta";
// import Testimonals from "./Testimonals";
import Footer from "./Footer";
import Head from "next/head";

const NewLandingPage = () => {


  return (
    <>
      <Head>
        <title>
          Sourcebae | Hire Top Remote Developers & Engineers in 2024
        </title>
        <meta
          name="description"
          content={`We are the Remote engineers Talent Marketplace. If you’re a funded Startup or a Company with a Product/Service looking to build or grow your team, Sourcebae connects you with remote Developers for contract positions`}
        />
      </Head>
      <div className={styles.font}>
        <Header />
        <HeroSection />
        <TopDevCta />
        <WhySourcebae />
        <SolveProblems />
        <VettingProcess />
        <AiSkillDevelopment />
        <VerifyDeveloper />
        {/* <Testimonals /> */}
        <HiringProcess />
        {/* <RecentProjects /> */}
        <Technologies />
        <TrustedSkills />
        <CareerPath />
        <Blogs />
        <CodingJourney />
        <FAQ />
        <ShortcutCta />
        <Footer />
      </div>
    </>
  );
};

export default NewLandingPage;
