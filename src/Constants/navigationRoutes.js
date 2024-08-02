import { isProd } from "./urls";

export const DOMAIN = isProd
  ? "https://sourcebae.com"
  : "https://stagingsourcebae.shethink.in";

export const NAV_ROUTES = {
  reactPage: "/hire/react-js-developers",
  reactNativePage: "/hire/react-native-developers",
  phpPage: "/hire/php-developers",
  laravelPage: "/hire/laravel-developers",
  javaPage: "/hire/java-developers",
  angularPage: "/hire/angular-developers",
  nodeJSPage: "/node-js-developers",
  landingPage: DOMAIN,
  login: `${DOMAIN}/agency/login`,
  loginClient: `${DOMAIN}/client/login`,
  loginDeveloper: `${DOMAIN}/developer/login`,
  register: `${DOMAIN}/register/agency`,
  // register: `${DOMAIN}/agency/register`,
  registerClient: `${DOMAIN}/client/register`,
  aboutUs: `${DOMAIN}/about-us`,
  activeJobs: `${DOMAIN}/active-requirements`,
  developersForm: `${DOMAIN}/join-developers-community`,
  forClients: `${DOMAIN}/access-of-top-developers`,
  blog: `/blog`,
  companies: "/company/100-remote-companies",
  companiesDetails: (name) => `/company/${name}`,
  blogDetailPage: (title) => `/blog/${title}`,
  pagination: (pageNo) => `/blog/page=${pageNo}`,
  talentPartner: "/talent-partner",
  hireTechnologyPages: (slug) => `/hire/${slug}`,
  allHireTechnologyLinks: `/hire/hire-developers`,
  clientPage: "/hire-now",
  developerPage: "/apply-developers",
  hireDeveloperPage: (slug) => `/apply-developers/apply-for-${slug}`,
  talentPartner: "/talent-partner",
  calendlyPage: `${DOMAIN}/schedule-meeting`,
  helpDesk: `/help-desk`,
  alltechs: `/apply-developers/jobs`,
  vendorPage: (slug) => `/top-companies/${slug}`,
  vendorHomePage: `/top-companies`,
};
