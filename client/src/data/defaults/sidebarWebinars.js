import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import links from './links/links'
const sidebar = {
    webinar: [
      {
        title: "Tarun Singh @ GirlScript Summit, AP.",
        description:
          "A session where you learn all the basics of Alexa, it's functioning, architecture, terminology and also create a Skill.",
        url: links.webinar1,
        date: "Aug-29-2020",
      },
    ],
  
    archives: [
      { title: "Install Alexa CLI", url: "#" },
      { title: "Create Skill using ASK CLI", url: "#" },
      { title: "Make API Skill", url: "#" },
      { title: "Intent Chaining", url: "#" },
      { title: "How to use Alexa Skill from Template", url: "usingtemplate" },
    ],
    social: [
      {
        name: "GitHub",
        icon: GitHubIcon,
        url: links.github,
      },
      {
        name: "LinkedIn",
        icon: LinkedInIcon,
        url: links.linkedin,
      },
      {
        name: "Instagram",
        icon: InstagramIcon,
        url: links.instagram,
      },
    ],
  };


  export default sidebar;