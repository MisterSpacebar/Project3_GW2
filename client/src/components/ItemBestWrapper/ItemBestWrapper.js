import React, { Component } from "react";
import API from '../../utils/API';
import { Collection, Button } from 'react-materialize';
import './ItemBestWrapper.css';
import ItemBestCollection from "./ItemBestCollection/ItemBestCollection";

class ItemBestWrapper extends Component {
    state = {
        data: []
    }
    
    componentDidMount() {
        API.loadBestItems();
        this.itemBestBuyHandler();
      };
    
    itemBestBuyHandler = () => {
            console.log('clicked buy')
            API.getBestBuy()
            .then(res =>{
                console.log('clicked buy')
            const buyData=res.data;
            this.setState({ data: buyData});
            })
            
    }

    itemBestSellHandler = () => {
   
            API.getBestSell()
            .then(res =>{
            const sellData=res.data;
            this.setState({ data: sellData});
            })
            
    }

    render() {
        return (
            <div>
                <div className="ItemBestWrapper">
                    <Button title="best-buy" onClick={this.itemBestBuyHandler}>Best Buy</Button>
                    <Button title="best-sell" onClick={this.itemBestSellHandler} >Best Sell</Button>
                </div>
                <Collection>
                    <ItemBestCollection itemsBest={this.state.data}/>
                </Collection>
            </div>
        );
    }
}

export default ItemBestWrapper;