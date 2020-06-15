import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Markdown from "./Markdown";
import ClapButton from "react-clap-button";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
    overflowX: "scroll",
    overflowWrap: true,
  },
  clapbutton: {
    maxWidth: "50px",
  },
}));

export default function Main(props) {
  const classes = useStyles();
  const { posts, title } = props;
  const onCountChange = ({ count, countTotal }) => {
    console.log(count, countTotal);
  };

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post, idx) => (
        <>
          <Markdown className={classes.markdown} key={idx}>
            {post}
          </Markdown>
          <br />
          <ClapButton
            className={classes.clapbutton}
            count={0}
            countTotal={0}
            maxCount={50}
            isClicked={false}
            onCountChange={onCountChange}
          />
          <Button color="primary" size="small">
            Give Suggesions
          </Button>
          <Divider variant="inset" />
        </>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};
