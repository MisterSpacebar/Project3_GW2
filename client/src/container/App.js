import React, { Component } from 'react';
import './App.css';
//import API from "../utils/API";
//import NavBar from '../components/NavBar/NavBar';
import UserFavNav from '../container/userFavNav'
import { Row, Button, Col } from 'react-materialize';
import Chart from '../components/GraphWindow/Chart';
//import UserFavourites from '../components/UserFavourites/UserFavourites';
import Currency from '../components/Currency/Currency';
import ItemBestWrapper from '../components/ItemBestWrapper/ItemBestWrapper'


class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Row>
          <div>
            {/* <NavBar />
            <Row>
              <UserFavourites />
            </Row> */}
            <UserFavNav />
            <Row>
              <Col m={8} s={12}>
                <Chart />
              </Col>
              <Col m={4} s={12}>
                <Currency />
                <ItemBestWrapper />
              </Col>
            </Row>
          </div>
        </Row>
        <Row>
        </Row>
      </div>
    );
  }
}

export default App;
