import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import logo from "../../static/logo192.png";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: "whiteSmoke",
    color: "black",
  },
  toolbarTitle: {
    flex: 1,
    fontFamily: "Segoe UI",
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
  const { sections, title } = props;
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
      <AppBar position='fixed'>
        <Toolbar className={classes.toolbar}>
          <Button
            size='small'
            variant='contained'
            href='https://github.com/tarunnsingh/alexa-community-jaipur'
          >
            <span>
              <FontAwesomeIcon icon={faGithub} size='lg' />
            </span>
          </Button>
          <Typography
            component='h2'
            variant='h5'
            color='inherit'
            align='center'
            noWrap
            className={classes.toolbarTitle}
          >
            <div id='logo'>
              <div id='covering'></div>
              <div id='logoimgbox'>
                <img id='logo-img' src={logo} />
              </div>
              <div id='logo-text'>alexa dev hub</div>
            </div>
          </Typography>

          <Button size='small' onClick={handleMenu}>
            Blog
            <ArrowDropDownIcon />
          </Button>
          <Menu
            id='menu-appbar'
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

          <Button variant='contained' size='small' className={classes.button}>
            Login
          </Button>
          {/* <Button variant='contained' size='small' className={classes.button}>
            Logout
          </Button> */}
        </Toolbar>
      </AppBar>
      <div style={{ marginTop: "70px" }}>
        <Toolbar
          component='nav'
          variant='dense'
          className={classes.toolbarSecondary}
        >
          {sections.map((section) => (
            <Link
              color='inherit'
              noWrap
              key={section.title}
              variant='body2'
              href={section.url}
              className={classes.toolbarLink}
            >
              {section.title}
            </Link>
          ))}
          <Typography className={classes.blinker}>
            Under Construction
          </Typography>
        </Toolbar>
      </div>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
