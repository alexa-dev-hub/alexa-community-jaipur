import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom'
import { faFacebookF, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'; 
import CommunityLogo from '../components/communityLogo/communityLogo'

export default () => {
  return (
        <div>
        <div className='profile-home-btn'>
          <Link to='/'> <CommunityLogo /> </Link> 
          <div ><h1>Profile</h1></div> 
        </div>
          <div className='profile'>
           <div  className='profile-card'>
             <div className='profile-header'>
               <div className='profile-pic'>
                 <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDGQO5-8CPA9Hzl5_wLkAf6VtlMw52q7IwRw&usqp=CAU'></img>
               </div>
               <div className='name'>John Doe</div>
               <div className='role'>Web Developer</div>
               <div className='social-links'>
                 <a href='/'><FontAwesomeIcon icon={faFacebookF} /></a>
                 <a href='/'><FontAwesomeIcon icon={faLinkedin} /></a>
                 <a href='/'><FontAwesomeIcon icon={faGithub} /></a>
                 <a href='/'><FontAwesomeIcon icon={faTwitter} /></a>
               </div>
                <a href='#' className='contact-btn'>Contact me</a>
             </div>
           </div>
          </div>
        </div>
  );
};
