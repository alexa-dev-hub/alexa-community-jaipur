import React from "react";
import BlogPage from "./pages/blog/Blog";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
// import UserProfilePage from "./pages/UserProfile";
import { BrowserRouter as Router, Route } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={BlogPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </div>
    </Router>
  );
};
