import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { Link as ScrollLink } from "react-scroll";
import Iframe from "react-iframe";

const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

export default function Sidebar(props) {
  const classes = useStyles();
  const { webinar, archives, social } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/repos/alexa-dev-hub/alexa-community-jaipur/contributors")
      .then(response => response.json())
      .then(data => setData(data));
  });

  return (
    <Grid item xs={12} md={4}>
      <Typography variant="h5">Webinars by the Team</Typography>
      {webinar.map((session, idx) => (
        <Paper elevation={0} className={classes.sidebarAboutBox} key={idx}>
          <Typography variant="h6" gutterBottom>
            {session.title}
          </Typography>
          <Iframe
            url={session.url}
            height="300px"
            width="350px"
            position="relative"
          />
          <Typography>{session.description}</Typography>
          <Typography variant="caption">{session.date}</Typography>
        </Paper>
      ))}

      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Important Links and Blog Posts
      </Typography>
      {archives.map((archive, idx) => (
        <Typography variant="body2">
          <ScrollLink
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            key={idx}
            to={`blogpost${idx + 1}`}
          >
            {archive.title}
          </ScrollLink>
        </Typography>
      ))}
<Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Contributors
      </Typography>
{
data.map(contributor => (
          <li key={contributor.id}> <img src={contributor.avatar_url}> <a href={contributor.url}>{contributor.login}</a></li>
        ))
}
      <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
        Connect
      </Typography>
      {social.map((network, idx) => (
        <Link display="block" variant="body1" href={network.url} key={idx}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
