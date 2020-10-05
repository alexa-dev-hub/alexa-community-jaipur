import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    justifyContent:'center'
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  "@keyframes blinker": {
    from: { opacity: 0 },
    to: { opacity: 1 },
  },
  blinker: {
    color: "red",
    animationName: "$blinker",
    animationDuration: "0.6s",
    animationTimingFunction: "ease-in-out",
    animationIterationCount: "infinite",
    animationDirection: "alternate",
    textAlign:'center'
  },
}));

export default function Header(props) {
  const classes = useStyles();


  return (
    <React.Fragment>
     
      <Toolbar
        component="nav"
        variant="dense"
        className={classes.toolbarSecondary}
      >
       <center>        <Typography className={classes.blinker}>You are at V1 Website</Typography></center>
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
   title: PropTypes.string,
};
