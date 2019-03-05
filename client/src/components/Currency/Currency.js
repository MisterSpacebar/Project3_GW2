import React, {Component} from "react";
import API from "../../utils/API";
import {Card} from 'react-materialize';

class Currency extends Component {
    state = {
        quantity:0,
        coins_per_gem:0
    }
    loadCurrency =()=>{
        API.getGems()
          .then(res =>
            this.setState({ quantity: res.data.quantity, 
                coins_per_gem: res.data.coins_per_gem })
          )
          .catch(err => console.log(err));
      }
        componentDidMount() {
         this.loadCurrency();
        };

    render(){
        return(  
        <Card 
            className='grey lighten-2' 
            textClassName='black-text' 
            title='Currency ' 
            >
            Coins per gem {this.state.coins_per_gem}, 
            quantity {this.state.coins_per_gem}
        </Card>
        )}
};


export default Currency;