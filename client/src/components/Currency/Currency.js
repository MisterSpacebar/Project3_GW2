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
    currencyTranslate  = (input) => {
        var currency = {gold:0,silver:0,copper:0}
        
        currency.copper = (input%100);
        var silver = parseInt(input/100);
        currency.silver = (silver%100);
        var gold = parseInt(silver/100);
        currency.gold = gold;
    
        return currency.gold+" Gold, "+currency.silver
    }

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