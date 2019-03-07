import React, { Component } from "react";
import API from '../../utils/API'
import { Collection, Button } from 'react-materialize';
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
        // const dataBuy = this.state.itemBestBuyData;
        // this.setState({ data: dataBuy });
        // API.loadBestItems()
        // .then(
            console.log('clicked buy')
            API.getBestBuy()
            .then(res =>{
                console.log('clicked buy')
            const buyData=res.data;
            this.setState({ data: buyData});
            })
            
        // ).catch(err => console.log(err));

    }

    itemBestSellHandler = () => {
        // const dataSell = this.state.itemBestSellData;
        // this.setState({ data: dataSell });
        // API.loadBestItems()
        // .then(
            API.getBestSell()
            .then(res =>{
            const sellData=res.data;
            this.setState({ data: sellData});
            })
            
        // ).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <div>
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