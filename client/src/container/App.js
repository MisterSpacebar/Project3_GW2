import React, { Component } from 'react';
import './App.css';
import API from "../utils/API";
import NavBar from '../components/NavBar/NavBar';
import { Row, Button, Col } from 'react-materialize';
import Chart from '../components/GraphWindow/Chart';
import UserFavourites from '../components/UserFavourites/UserFavourites';
import Currency from '../components/Currency/Currency';
import ItemBestWrapper from '../components/ItemBestWrapper/ItemBestWrapper'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  // state = {
  //   currency:[]
  //   id: 24,
  //   itemReturn: [],
  //   itemName: "",
  //   buyPrice: "",
  //   sellPrice: ""

  // }


  // loadItem = id => {
  //   console.log('Id Returned: ', id)
  //   API.getItem(id)
  //     .then(res =>
  //       this.setState({ itemReturn: res.data.data, itemName: res.data.data.name, buyPrice: res.data.pricing.buyng.price, sellPrice: res.data.pricing.selling.price, })
  //     )
  //     .catch(err => console.log(err));
  // };

// loadCurrency =()=>{
//   API.getGems()
//     .then(res =>
//       this.setState({ itemReturn: res.data.data, itemName: res.data.data.name, buyPrice: res.data.pricing.buyng.price, sellPrice: res.data.pricing.selling.price, })
//     )
//     .catch(err => console.log(err));
// }
//   componentDidMount() {
//    // this.loadItem()
//    this.loadCurrency();
//   };


  render() {

    return (
      <div className="mainContainer">
        <Row>
          <div>
            <NavBar />
            <Row>
              <UserFavourites />
            </Row>
            <Row>
              <Col m={8} s={12}>
                <Chart />
              </Col>
              <Col m={4} s={12}>
                <Currency />
                <ItemBestWrapper />
              </Col>
            </Row>

            {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user" component={User} />
            <Route exact path="/about" component={About} />
          </Switch> */}
          </div>
        </Row>
        <Row>
          {/* <Button waves='light' onClick={() => this.loadItem(this.state.id)}>Test!</Button>
          <div>{JSON.stringify(this.state.item)}</div> */}
        </Row>
      </div>
    );
  }
}

export default App;
