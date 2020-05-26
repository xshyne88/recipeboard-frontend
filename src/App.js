import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./auth/Login";
import { AuthProvider } from "./auth/AuthProvider";
import Logout from "./auth/Logout";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <a href="http://localhost:4000/auth/facebook">Sign in with Facebook</a>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        { /* <PrivateRoute exact path="/map" component={HomeMap} />
        <PrivateRoute exact path="/areas/:id" component={AreaDetails} />
        <PrivateRoute exact path="/areas" component={Areas} /> */} 
      </AuthProvider>
    </Router>
  );
};

export default App;