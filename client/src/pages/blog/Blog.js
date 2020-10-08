import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

//importing  links
import links from '../../data/defaults/links/links'

//importing holders and components
import Header from "../../components/header/Header";
import MainFeaturedPost from "../../components/holders/MainFeaturedPost";
import FeaturedPost from "../../components/holders/FeaturedPost";
import Main from "../../components/holders/Main";
import Sidebar from "../../components/holders/Sidebar";
import Footer from "../../components/footer/Footer";

// importing hooks
import useFetchPosts from '../../data/hooks/';

//importing default data
import mainFeaturedPost from '../../data/defaults/mainfeatured';
import featuredPosts from '../../data/defaults/featuredposts';
import sidebar from '../../data/defaults/sidebarWebinars';




const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [{ title: "Alexa Skills", url: "#" }];


export default function Blog() {

  const posts =  useFetchPosts();

  const classes = useStyles();

  console.log(posts);
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
        title="Created with 🖤 by Alexa Community, Jaipur"
        description="Contribute to the Development on Github."
        url={links.github}
      />
    </React.Fragment>
  );
}
