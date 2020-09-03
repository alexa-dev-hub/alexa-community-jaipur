import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import GitHubIcon from "@material-ui/icons/GitHub";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import blogService from "../../services/blogpost";
import bannerLink from "../../static/banner.png";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [{ title: "Alexa Skills", url: "#" }];

const mainFeaturedPost = {
  title: "Welcome! Alexa Community - Jaipur",
  description:
    "Alexa Dev Hub aims to provide resources and learning content all in one place to boost up your VUI developemnt skills. ",
  image: `${bannerLink}`,
  imgText: "main image description",
};

const featuredPosts = [
  {
    title: "Upcoming Events",
    date: "Early July 2020",
    type: "Webinar",
    description:
      "We are planning to take our first technical webinar next month. Do let us know what would you like to learn.",
    suggestionPlaceholder: "Suggest you topics here...",
    image: "/api/events/upcomingevent.png",
    imageText: "Logo",
    buttonText: "Register",
    buttonDisable: true,
  },
  {
    title: "Past Events",
    date: "30th April 2020",
    description:
      "Workshop on Making Alexa Skills for beginners. We learnt how to make a basic skill using Alexa Console.",
    feedback: "Leave your feedback...",
    image: "/api/events/pastevent.png",
    imageText: "Logo",
    buttonText: "Check Blog Post",
    buttonDisable: true,
  },
];

const sidebar = {
  webinar: [
    {
      title: "Tarun Singh @ GirlScript Summit, AP.",
      description:
        "A session where you learn all the basics of Alexa, it's functioning, architecture, terminology and also create a Skill.",
      url: "https://www.youtube.com/embed/vOZGa6WJQoE",
      date: "Aug-29-2020",
    },
  ],

  archives: [
    { title: "Install Alexa CLI", url: "#" },
    { title: "Create Skill using ASK CLI", url: "#" },
    { title: "Make API Skill", url: "#" },
    { title: "Intent Chaining", url: "#" },
  ],
  social: [
    {
      name: "GitHub",
      icon: GitHubIcon,
      url: "https://github.com/tarunnsingh/alexa-community-jaipur",
    },
    {
      name: "LinkedIn",
      icon: LinkedInIcon,
      url: "https://www.linkedin.com/company/aacjaipur/",
    },
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/amazon_alexa_jaipur/",
    },
  ],
};

export default function Blog() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    blogService.fetchPosts().then((data) => {
      const { message, content } = data;
      setPosts(content);
    });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Alexa Dev Hub" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Posts on Alexa Development" posts={posts} />

            <Sidebar
              webinar={sidebar.webinar}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>

      <Footer
        title="Created with 🖤 and </> by Tarun"
        description="Easing the Skill making process!"
        url="https://tarunnsingh.github.io/site"
      />
    </React.Fragment>
  );
}
