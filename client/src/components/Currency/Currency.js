import React, {Component} from "react";
import './Currency.css';
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
    
        return currency.gold+" Gold, "+currency.silver+" Silver, "+currency.copper+" Copper"
    }

    render(){
        return(  
        <Card 
            className='Currency'
            textClassName='black-text' 
            title='Exchange Rate ' 
            >
            <p><b>Coins per 250 gem:</b> {this.currencyTranslate(this.state.coins_per_gem*250)}</p>
            {/* <p><b>Quantity:</b> {this.state.coins_per_gem}</p> */}
        </Card>
        )}
};


export default Currency;