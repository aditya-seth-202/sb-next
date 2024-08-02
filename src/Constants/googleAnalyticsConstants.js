export const GA_KEY = "G-2JYHXX0CL1";
export const GA_KEY_TEST = "G-XJDZFLZR0E";

export const GA_CATEGORIES = {
  LANDING: "LANDING",
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
  REGISTRATION_ATTEMPTED: "REGISTRATION ATTEMPTED",
  FORGOT_PASSWORD: "FORGOT_PASSWORD",
  RESET_PASSWORD: "RESET_PASSWORD",
  PROFILE: "PROFILE",
  REQUIREMENTS_SCREEN_AGENCY: "REQUIREMENTS_SCREEN_AGENCY",
  REQUIREMENTS_SCREEN_CLIENT: "REQUIREMENTS_SCREEN_CLIENT",
  ADD_DEVELOPER: "ADD_DEVELOPER",
  HIRE_DEVELOPER: "HIRE_DEVELOPER",
  ABOUT_US: "ABOUT_US",
  INDIVIDUAL_TECHIE: "INDIVIDUAL_TECHIE",
  FOR_DEVELOPER: "FOR_DEVELOPER",
  HEADER: "HEADER",
  //next
  CLIENT: "CLIENT",
};

export const GA_CONVERTIONS_GOALS = {
  NEW_SIGNUP: "NEW REGISTRATION",
  STEP1_COMPLETED: "STEP1_COMPLETED",
};

export const EVENT_NAMES = {
  landingPage: {
    hireDeveloper: "Landing - Hire developer clicked",
    jobCardClicked: (tech) => `Landing - Intro job card clicked ${tech}`,
    developerApplyNow: "Landing - Developer apply now clicked",
    communityDiscordCard: "Landing - Discord card clicked on community wall",
    joinDiscord: "Landing - Join discord clicked",
    userLanded: "Landing - User Landed",
    loginClicked: (type) => `Landing - ${type} login clicked`,
    registerClicked: (type) => `Landing - ${type} register clicked`,
    activeJobs: "Landing - Active jobs clicked",
    aboutUs: "Landing page about us clicked",
    blog: "Landing page blog clicked",
  },
  footer: {
    hireTechDeveloper: (tech) => `Footer - Hire ${tech} developer clicked`,
    aboutUs: "Footer - About us clicked",
    blog: "Footer - Blog clicked",
    aboutUs: "Footer - About Us clicked",
    helpDesk: "Footer - Help Desk clicked",
    talentPartner: "Footer - Talent Partner clicked",
    topCompanies: "Footer - Top Companies clicked",
    hireDevelopers: "Footer - All Hire Developers Techs clicked",
    aboutUs: "Footer - About Us clicked",
    helpDesk: "Footer - Help Desk clicked",
    talentPartner: "Footer - Talent Partner clicked",
    topCompanies: "Footer - Top Companies clicked",
    hireDevelopers: "Footer - All Hire Developers Techs clicked",
    remoteCompanies: "Footer - Remote companies page opened",
    facebook: "Footer - Facebook link opened",
    instagram: "Footer - Instagram link opened",
    twitter: "Footer - Twitter link opened",
    linkedIn: "Footer - LinkedIn link opened",
    vendor: "Footer - Vendor page opened",
  },
  header: {
    developersLandingPageLink: "Header - Link to Developers page clicked",
    clientLandingPageLink: "Header - Link to Client page clicked",
    talentPartnerLandingPageLink:
      "Header - Link to Talent Partner page clicked",
    activeJobsLandingPageLink: "Header - Link to Active Jobs page clicked",
    hireDeveloper: "Header - Hire Developer button clicked",
    forDeveloper: "Header - For Developers link clicked",
    aboutUs: "Header - About us clicked",
    blog: "Header - Blog clicked",
    remoteCompanies: "Header - Remote companies page opened",
    facebook: "Header - Facebook link opened",
    instagram: "Header - Instagram link opened",
    twitter: "Header - Twitter link opened",
    linkedIn: "Header - LinkedIn link opened",
    vendor: "Header - Vendor page opened",
    logo: "Header -  Logo clicked",
    loginLink: "Header -  Login link opened",
    mobileMenu: "Header -  Mobile menu clicked",
    signUp: "Header -  Sign Up button clicked",
    signUp: "Header -  Sign Up button clicked",
  },
  leadGeneration: {
    techClick: (tech) => `Lead generation - ${tech} tech clicked`,
    otp: "Lead generation - OTP generated",
  },
  agencyDashBoard: {
    filterClicked: "Agency dashboard - Filter clicked",
    assessmentReadMore: "Agency dashboard - Assessment Read More clicked",
    reviewUs: (platform) => `Agency dashboard - ${platform} clicked`,
    requirementCta: (tab) => `Agency dashboard - Tab ${tab} job cta clicked`,
    profile: "Agency dashboard - Profile clicked",
  },
  developerDashboard: {
    filter: (type) => `Developer - ${type} filter clicked`,
    jobClicked: "Developer - Job card clicked",
    remoteSwitch: "Developer - Remote switched toggled",
    applyNow: "Developer - Job apply now clicked",
    profileClicked: "Developer - Profile clicked",
    appliedJobClicked: "Developer - Applied job tab clicked",
    assessmentCreated: "Developer - Assessment created",
    filterOption: (type, option) =>
      `Developer - ${type} ${option} filter option clicked`,
  },
  loginScreen: {
    roleSelected: (role) => `Login - ${role} selected in Login screen`,
    forgotPassword: "Login - Forgot password clicked on Login screen",
    registerClick: "Login - Register click on Login screen",
  },
  clientPage: {
    clientSignUp: "Client - Sign Up clicked on Client screen",
    clientLogin: "Client - Login clicked on Client screen ",
    clientHireButton: (type) =>
      `Client - Hire button clicked on ${type} section `,
    clientBookCall: "Client - Book A Call clicked on Client screen ",
    clientHireTech: (tech) =>
      `Client - Hire ${tech} button clicked on Client Hire Developers section `,
    clientShowAllHireTechs:
      "Client - Show All techs clicked on Clients screen ",
    clientFaqClicked: "Client - FAQ section clicked on Clients screen ",
    landingClient: "Client - User Landed on Client screen ",
    clientFaqClicked: "Client - FAQ section clicked on Clients screen ",
    landingClient: "Client - User Landed on Client screen ",
  },
  talentPartnerPage: {
    becomeTalentPartner: (section) =>
      `Talent - Become Talent Partner button clicked in ${section} section `,
    talentPartnerSignUp: "Talent - Sign Up clicked on Talent Partner screen",
    talentPartnerLogin: "Talent - Login clicked on Talent Partner screen",
    logo: "Talent - Header Logo clicked",
    activeJobs: "Talent - Active Jobs clicked on Talent Partner screen",
    landingPage: "Talent - User Landed on Talent Partner screen",
    hiringCard: (num) => `Talent - Hiring card clicked - ${num} `,
  },
  developersPage: {
    landingPage: "Developer - User Landed on Developer screen",
    signUp: "Developer - Sign Up clicked on Developer screen",
    login: "Developer - Login clicked on Developer screen",
    activejob: "Developer - Active Job clicked on Developer screen",
    visibilitySection:
      "Developer - Visibility section clicked on Developer screen",
    applyBtn: (sec) => `Developer - Apply button clicked in ${sec} section`,
    showMore: "Developer - Show more button clicked on Developer screen",
  },
  techSearchSection: {
    showAll: "Tech Search - Show all Tech button clicked",
  },
  developersDetails: {
    headerTalent: (btn) => `Dev Details - ${btn} button clicked in Navbar`,
    applyNow: (sec) =>
      `Dev Details - Apply Now button clicked in ${sec} section`,
    logo: "Dev Details - Logo button clicked in Navbar",
    activejobs: "Dev Details - Active Jobs button clicked ",
    landingPage: "Dev Details - User Landed on Dev Details screen",
    calendlyPage: "Dev Details - Hire Now button clicked ",
    devSkills: (sec) =>
      `Dev Details - Skills to look for clicked on ${sec} link`,
  },
  hundredCompanies: {
    landingPage: "100 Companies - User Landed on 100 Companies screen",
    hireDeveloper: "100 Companies - Hire Developer button clicked",
    showMoreFaq: "100 Companies - Show more FAQ button clicked",
    openFaq: "100 Companies - Open FAQ button clicked",
    showCompanyDetails: (name) =>
      `100 Companies - Show details clicked for ${name}`,
  },
  hundredCompaniesDetails: {
    landingPage: (name) =>
      `100 Companies/Details - User Landed on 100 Companies screen for ${name}`,
    companyAddress: (name) =>
      `100 Companies/Details - User clicked on company link for ${name}`,
    tab: (name) => `100 Companies/Details - User ${name} tab`,
  },
  topCompanies: {
    companyAddress: (name) =>
      `Top Companies - User clicked on company link for ${name}`,
    landingPage: "Top Companies- User Landed on Top Companies screen",
  },
  topCompaniesDetails: {
    hireDeveloper: (name) =>
      `Top Companies/Details - Hire Developer button clicked on ${name} section`,
    companyLink: "Top Companies/Details - Link to visit company clicked",
  },
  hireSapDeveloperPage: {
    hireSapDeveloper: (section) =>
      `Hire SAP Page - Hire SAP Developer button clciked in ${section} section `,
    blog: `Hire SAP Page - Blog button clicked in header`,
    bookCall: `Hire SAP Page - Book A Call button clicked in header`,
    submit: "Hire SAP Page - User submiited form in main section",
    faqViewAnswer:
      "Hire SAP Page - user Viewed answer in frequently asked questions",
    faqViewMore:
      "Hire SAP Page - View more button clicked in frequently asked questions",
    hireDeveloper: (tecnologyName) =>
      `Hire SAP Page - Hire ${tecnologyName} visited`,
    aboutUs: `Hire SAP Page - About us page visited`,
  },
  hireDevelopers: {
    landingPage: (name) =>
      `Hire Developers - User Landed on Hire Developer screen for ${name} Tech`,
    hireDevBtn: (name) =>
      `Hire Developers - Hire Developer button clicked on  ${name} Section`,
    learnTech: (name) =>
      `Hire Developers - User clicked on Learn more for ${name}`,
  },
  allTech: {
    landing: (type) => `All Techs- User landed on ${type} Page `,
  },
};
