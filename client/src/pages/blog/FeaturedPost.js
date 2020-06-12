import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import { Button } from "@material-ui/core";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            {post.suggestionPlaceholder ? (
              <Grid container direction="row">
                <FormControl>
                  <Grid item>
                    <InputLabel htmlFor="suggestions">
                      {post.suggestionPlaceholder}
                    </InputLabel>
                    <Input
                      id="suggestions"
                      aria-describedby="my-helper-suggestions"
                    />
                    <Button type="submit">Submit</Button>
                  </Grid>
                  <FormHelperText id="my-helper-suggestions">
                    We will try to cover the most asked topics.
                  </FormHelperText>
                </FormControl>
              </Grid>
            ) : null}
            {post.feedback ? (
              <Grid container direction="row">
                <FormControl>
                  <Grid item>
                    <InputLabel htmlFor="feedback">{post.feedback}</InputLabel>
                    <Input id="feedback" aria-describedby="my-helper-text" />
                    <Button type="submit">Submit</Button>
                  </Grid>
                  <FormHelperText id="my-helper-text">
                    Your feedback helps us improve.
                  </FormHelperText>
                </FormControl>
              </Grid>
            ) : null}
            <Typography variant="subtitle1" color="primary">
              <Button href="#" disabled={post.buttonDisable}>
                {post.buttonText}
              </Button>
            </Typography>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            className={classes.cardMedia}
            image={post.image}
            title={post.imageTitle}
          />
        </Hidden>
      </Card>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
