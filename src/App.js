import React, { createContext, useState } from "react";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import CheckOut from "./Components/CheckOut/CheckOut";
import Admin from "./Components/Admin/Admin";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/checkout/:id">
           <CheckOut/>
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/admin">
           <Admin />
          </PrivateRoute>
          <PrivateRoute path="/order">
            
          </PrivateRoute>
          <Route path="/deals">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />

          </Route>
          <Route path="*">
            

          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
