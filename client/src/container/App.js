import React, { Component } from 'react';
import './App.css';
import Layout from '../components/Layout/Layout';
import HomePageBuilder from '../container/HomePageBuilder/HomePageBuilder'
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
        <Layout>
          <HomePageBuilder />
        </Layout >

    );
  }
}

export default App;
