
import React from 'react';

import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";


import CreateListing from "./pages/CreateListing";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NavigationHeader from './components/Navigation'
import EditListing from "./pages/EditListing";
import Loading from "./pages/Loading";


function App() {
  return (
    <div >
      <Route path='/' component={NavigationHeader} />
      <Switch>
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/' component={Dashboard} />
        <PrivateRoute path='/createlisting' component={CreateListing} />
        <PrivateRoute path='/editlisting/:id' component={EditListing} />
        <PrivateRoute path='/loading' component={Loading} />
      </Switch>
    </div>
  );
}

export default App;