import React, { Component } from 'react';
import './App.css';
import API from "../utils/API";
import NavBar from '../components/NavBar/NavBar';
import { Row, Button, Col } from 'react-materialize';
import Chart from '../components/GraphWindow/Chart';
import UserFavourites from '../components/UserFavourites/UserFavourites';
import Currency from '../components/Currency/Currency';
import ItemBestWrapper from '../components/ItemBestWrapper/ItemBestWrapper'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currency: [],
      id: 24,
      itemReturn: [],
      itemName: "",
      icon: "",
      buyPrice: "",
      sellPrice: "",
      data: null
    };
  }


    loadItem = id => {
      console.log('Id Returned: ', id)
      API.getItem(id)
        .then(res =>
          this.setState({ itemReturn: res.data.data, itemName: res.data.data.name, buyPrice: res.data.pricing.buyng.price, sellPrice: res.data.pricing.selling.price, })
        )
        .catch(err => console.log(err));
    };

    loadCurrency = () => {
      API.getGems()
        .then(res =>
          this.setState({ itemReturn: res.data.data, itemName: res.data.data.name, buyPrice: res.data.pricing.buyng.price, sellPrice: res.data.pricing.selling.price, })
        )
        .catch(err => console.log(err));
    };


    grabItemFavourites =()=>{
      API.getItem()
        .then(res =>
          this.setState({
            itemName: res.data.data.name, icon: res.data.data.icon, buyPrice: res.data.pricing.buyng.price, sellPrice: res.data.pricing.selling.price
          })
        )
        .catch(err => console.log(err));
    };

    componentDidMount() {
      // this.loadItem()
      this.loadCurrency();
      // fetch('/api/item/:id')
      //   .then(response => response.json())
      //   .then(data => this.setState({ data }))

    };


    render() {

      return (
        <div className="mainContainer">
          <Row>
            <div>
              <NavBar />
              <Row>
                <UserFavourites 
                grabItemCarousel={this.grabItemCarousel}
                />
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
            </div>
          </Row>
        </div>
      );
    }
  }

  export default App;
