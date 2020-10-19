import React, { useState, useRef, useEffect } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "../components/copyright/copyright";
import CommunityLogo from "../components/communityLogo/communityLogo";
import AuthService from "../services/authService";
import Alert from "../components/alert/alert";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const handleOnSubmit = (e) => {
  e.preventDefault();
};

export default function SignUp(props) {
  const classes = useStyles();
  const [user, setUser] = useState({
    email: "",
    name: "",
    password: "",
    role: "Team Member",
  });
  const [msg, setMessage] = useState({ message: "", msgError: false });
  const [loading, setIsLoading] = useState(false);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let timerID = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(timerID);
    };
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    AuthService.register(user).then((data) => {
      const { message } = data;
      setMessage(message);
      setUser({ email: "", name: "", password: "", role: "" });
      if (!message.msgError) {
        timerID = setTimeout(() => {
          setIsLoading(false);
          props.history.push("/login");
        }, 2000);
      } else setIsLoading(false);
    });
  };

  const handleRoleChange = (event) => {
    setUser({ ...user, role: event.target.value });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar} variant="circle" sizes="">
          <CommunityLogo />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="role-choice-label" fullWidth>
                Select Role
              </InputLabel>
              <Select
                fullWidth
                labelId="role-choice-label"
                id="role-choice"
                value={user.role}
                onChange={handleRoleChange}
              >
                <MenuItem value={"Team Member"}>Team Member</MenuItem>
                <MenuItem value={"Chapter Lead"}>Chapter Lead</MenuItem>
                <MenuItem value={"Community Member"}>Community Member</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Send me Updates on the Community Programs."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Register
          </Button>
          <Grid container justify="center">
            <Grid item>
              <Typography justify="center">
                Already Registered?{" "}
                <Button href="/login" variant="outlined">
                  Sign in
                </Button>
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Alert msgError={msg.msgError} message={msg.msgBody} />
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
