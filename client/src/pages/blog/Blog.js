import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import links from '../links/links'
import Container from "@material-ui/core/Container";



import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import bannerLink from "../../static/banner.png";




const mainFeaturedPost = {
  title: "Welcome! Alexa Community - Jaipur (V1)",
  description:
    "Alexa Dev Hub aims to provide resources and learning content all in one place to boost up your VUI developemnt skills. ",
  image: `${bannerLink}`,
  imgText: "main image description",
};



export default function Blog() {
  


  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header/>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Container align="center" minWidth="lg" style={{ backgroundColor: '#31245D','font-size':'44px',color:'white',padding:'20px','font-family':'Segoe UI' }}>
          <span style={{color:'#05F0FF'}}>We just got upgraded to V2</span> <br/> 
          <span style={{color:'#F5F5F5'}}>Checkout  <a  style={{color:'#F52235','text-decoration':'none'}} href={links.v2_website}> Here</a></span><br/> 
        <a  style={{color:'yellow', fontSize:'5vw'}} href={links.v2_website}>{links.v2_website}</a>
          </Container>
        </main>
      </Container>
   
   
    </React.Fragment>
  );
}
