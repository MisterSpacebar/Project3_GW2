import React, { Component } from 'react';
import './App.css';
import Layout from '../components/Layout/Layout';
import HomePageBuilder from '../container/HomePageBuilder/HomePageBuilder'

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
