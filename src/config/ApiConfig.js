let baseurl = "http://programming-quotes-api.herokuapp.com";

let fact = `${baseurl}/Users`;

export const websiteName =
  window.location.protocol + "//" + window.location.host;

export const socketURL = "wss://node-sea.mobiloitte.com";
const apiConfig = {
  register: `${fact}/register`,
  login: `${fact}/login`,
  me: `${fact}/me`,
  dashboard: `${fact}/dashboard`,
  fact: fact,
};
export default apiConfig;
