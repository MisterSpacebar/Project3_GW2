import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import Home from "./pages/Home/Home"

import NavBar from './components/NavBar/NavBar';
import { Row } from 'react-materialize';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';


class App extends Component {
  state={
    item:[],
    id:24
  }
  componentDidMount() {
  };
  loadItem = id => {
    console.log('Item ID : ' , id)
    API.getItem(id)
      .then(res =>
        this.setState({ item: res.data.data})
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="mainContainer">
      <Row>
        <Router>
        <div>
          <NavBar />
          <Switch>
            {/* Link to Home */}
            <Route exact path="/" component={Home} />
            {/* Link to pop Login modal */}
            <Route exact path='/signUp' component={SignUp} />
            {/* Link to pop Sign Up modal */}
            <Route exact path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
      </Row>   
    </div>
    );
  }
}

export default App;
