import links from './links/links'
const featuredPosts = [
    {
      title: "Upcoming Events",
      date: "Early July 2020",
      type: "Webinar",
      description:
        "We are planning to take our first technical webinar next month. Do let us know what would you like to learn.",
      suggestionPlaceholder: "Suggest you topics here...",
      image: 'https://alexadevhub.herokuapp.com/api/posts/images/events/upcomingevent.png',
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
      image: 'https://alexadevhub.herokuapp.com/api/posts/images/events/pastevent.png',
      imageText: "Logo",
      buttonText: "Check Blog Post",
      buttonDisable: true,
    },
  ];



  
  export default featuredPosts;
