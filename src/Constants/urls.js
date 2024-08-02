export const isProd = false;

export const BASE_URL = isProd
  ? "https://api.sourcebae.com"
  : "https://stagingsourcebae.shethink.in";
export const ADMIN_URL = isProd
  ? "https://newadmin.sourcebae.com/api"
  : "https://sourcebaeadmin.shethink.in/api";
// : "http://3.109.193.128:4000/api";
// export const ADMIN_URL = "http://13.232.44.52:4000";
// 13.232.44.52

export const s3BaseUrl = `https://sourcebae.s3.amazonaws.com/production/image/`;

export const secretKey =
  "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAx/ldy9jwjRQkbxdzZ5LT\nX2fQi8WptsENXbpOMTg6Fg/2T7yQlK8PaNPpR1o7nO0aFYDUcFaPkjI+L2tGMacF\naMOrWVDbn8RTWX2XZBtDCtCWjoU3h/wJg95RVCpqooMwL5q4etgJHsW6Qr1NT0oa\n8/+rllPNd98ZfWVCDjLwc4+yVW31DGPJPKDZEuDX8ABBowVkW6IjxhwCQM33sSUo\nUEq8L3xE46E3Pk/uI154nUb97+apnUmJUab3rYYF0zDaTxYzgyJDvUL0BAR8i5nk\nou2ZzvPGQAXaR8JozG0ACJnFGfk51HgAEDJF0P68QePfVW79VZ2OFmVubOvzP2WJ\njQIDAQAB\n-----END PUBLIC KEY-----";

export const URLS = {
  hireNowForm: `${BASE_URL}/api/agency/hire-developers-pages/create`,
  hireTechnology: `${BASE_URL}/api/agency/hire-developers-pages/hire-dev-template-names`,
  hireTechnologyId: (slug) =>
    `${BASE_URL}/api/agency/hire-developers-pages/get-hire-dev-template?slug=${slug}`,
  getCompanies: `${BASE_URL}/api/agency/remote-companies/all`,
  getCompanies: `${BASE_URL}/api/agency/remote-companies/all`,
  getCompanyById: (id) =>
    `${BASE_URL}/api/agency/remote-companies/get-company/${id}`,
  getAllBlogs: "/api/blog/getAllBlog",
  getMenuList: "/api/blog/menulist",
  getDetailsPage: "/api/blog/single",
  getSubDevData: `${ADMIN_URL}/sub-developer-pages/allData`,
  getSubDevDataId: (slug) => `${ADMIN_URL}/sub-developer-pages/${slug}`,
  getAllVendorsPages: (page, limit) =>
    `${ADMIN_URL}/sourcebae-pages/allCompanies?page=${page}&limit=${limit}`,
  getVendorsPageById: (slug) => `${ADMIN_URL}/sourcebae-pages/${slug}`,
  getVendorData: (page, limit, searchKey) =>
    `${ADMIN_URL}/sourcebae-pages/allCompanies?page=${page}&limit=${limit}&searchKey=${searchKey}`,
  hireSapDeveloper: `${BASE_URL}/api/client/clients/addSalesLeads`,
  getTechnologyData: `${BASE_URL}/api/agency/hire-developers-pages/hire-dev-template-names`,
  getTechnologyWithDynamicData: `https://newadmin.sourcebae.com/api/sub-developer-pages/allData`,
};
