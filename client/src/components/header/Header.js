import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Avatar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import CommunityLogo from "../communityLogo/communityLogo";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
import logo from "../../static/logo192.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "whiteSmoke",
    color: "black",
  },
  toolbarTitle: {
    flex: "inherit",
    fontFamily: "Segoe UI",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  image: {
    width: "40px",
    height: "40px",
    marginRight: "10px",
    verticalAlign: "middle",
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  button: {
    margin: "10px",
    backgroundColor: "lightBlue",
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
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const { sections } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <Avatar className={classes.avatar}>
            <CommunityLogo />
          </Avatar>

          <Typography
            component="h3"
            variant="h6"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            <div id="logo">
              <div id="covering"></div>
              <div id="logoimgbox">
                <img id="logo-img" src={logo} alt="alexa-logo" />
              </div>
              <div id="logo-text">
                <span>alexa</span>
                <span>dev hub</span>
              </div>
            </div>
          </Typography>
          <div>
            <Button size="small" onClick={handleMenu}>
              Blog
              <ArrowDropDownIcon />
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Blog 1</MenuItem>
              <MenuItem onClick={handleClose}>Blog 2</MenuItem>
            </Menu>
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              href="/register"
            >
              Login
            </Button>
            <Button
              variant="contained"
              size="small"
              className={classes.button}
              href="/profile"
            >
              Profile
            </Button>
            {/* <Button variant='contained' size='small' className={classes.button}>
             Logout
           </Button> */}
          </div>
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: "70px" }}>
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          {sections.map((section) => (
            <Link
              color="inherit"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      </div>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
