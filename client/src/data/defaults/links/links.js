const links = {
  // SOCIAL MEDIA
  github: "https://github.com/tarunnsingh/alexa-community-jaipur",
  linkedin: "https://www.linkedin.com/company/aacjaipur/",
  instagram: "https://www.instagram.com/amazon_alexa_jaipur/",

  //WEBSITE VERSION
  v1_website: "http://alexadevhub.herokuapp.com/",
  v2_website: "https://alexadevhub.netlify.app/",
  webinar1: "https://www.youtube.com/embed/vOZGa6WJQoE",

  //CONTRIBUTORS
  contributors:
    "https://api.github.com/repos/alexa-dev-hub/alexa-community-jaipur/contributors",

  //AUTH LINKS
  login: "/api/user/login",
  register: "/api/user/register",
  logout: "/api/user/logout",
  authenticated: "/api/user/authenticated",

  // MANAGING CORS AND API
  api:
    process.env.NODE_ENV === "production"
      ? "https://alexadevhub.herokuapp.com"
      : "http://localhost:5000",
  corsValidator: "https://cors-anywhere.herokuapp.com/",
};
export default links;
