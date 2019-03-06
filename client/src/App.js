// import React, { Component } from 'react';
// import './App.css';
// import API from "./utils/API";
// // import NavBar from './components/Layout/NavBar/NavBar';
// import { Row, Button, Col } from 'react-materialize';
// import Chart from './components/GraphWindow/Chart';
// import UserFavourites from './components/UserFavourites/UserFavourites';
// import Currency from './components/Currency/Currency';
// import ItemBestWrapper from './components/ItemBestWrapper/ItemBestWrapper'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navigation from './components/Shared/Navigation';
// import Navbar from './components/Layout/NavBar';
// import Home from './components/Pages/Home';
// import Users from './components/Pages/Users';
// import Login from './components/Auth/Login';
// import RegistrationForm from './components/Auth/RegistrationForm';


// export default class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Navigation />
//         <main>
//           <Route path="/" exact component={Home} />
//           <Route
//             path="/login"
//             render={() => <Login baseUrl="https://dev-866123.okta.com" />}
//           />
//           <Route path="/implicit/callback" component={ImplicitCallback} />
//           <Route path="/register" component={RegistrationForm} />
//           {/* <SecureRoute path="/profile" component={ProfilePage} /> */}
//         </main>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import { SecureRoute, ImplicitCallback } from '@okta/okta-react';



import Navigation from './components/Shared/Navigation';

import HomePage from './components/Pages/Home';

import RegistrationForm from './components/Auth/RegistrationForm';

import config from './app.config';

import LoginPage from './components/Auth/LoginPage';

import ProfilePage from './components/Auth/ProfilePage';

import './App.css';



export default class App extends Component {

  render() {

    return (

      <div className="App">

        <Navigation />

        <main>

          <Route path="/" exact component={HomePage} />

          <Route path="/login" render={() => <LoginPage baseUrl={config.url} />} />

          <Route path="/implicit/callback" component={ImplicitCallback} />

          <Route path="/register" component={RegistrationForm} />

          <SecureRoute path="/profile" component={ProfilePage} />

        </main>

      </div>

    );

  }

}