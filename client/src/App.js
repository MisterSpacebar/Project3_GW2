import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import API from "./utils/API";
import Home from "./pages/Home/Home"

import NavBar from './components/NavBar/NavBar';
import { Row,Button} from 'react-materialize';


class App extends Component {
  state={
    item:[],
    id:24
  }
  componentDidMount() {
  };
  loadItem = id => {
    console.log('ID return: ' , id)
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
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/user" component={User} />
            <Route exact path="/about" component={About} /> */}
          </Switch>
        </div>
      </Router>
      </Row>   
      <Row>
          <Button waves='light' onClick={() => this.loadItem(this.state.id)}>Test!</Button>
          <div>{JSON.stringify(this.state.item)}</div>
      </Row>
    </div>
    );
  }
}

export default App;
