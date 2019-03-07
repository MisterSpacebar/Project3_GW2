import React, { Component } from "react";
import API from '../../utils/API'
import { Collection, Button } from 'react-materialize';
import ItemBestCollection from "./ItemBestCollection/ItemBestCollection";

class ItemBestWrapper extends Component {
    state = {
        itemBestBuyData: [
            { id: 24, name: 'NameA', price: 14 },
            { id: 25, name: 'NameB', price: 15 },
            { id: 26, name: 'NameC', price: 16 },
            { id: 27, name: 'NameD', price: 17 },
            { id: 28, name: 'NameE', price: 18 }
        ],
        itemBestSellData: [
            // { id: 34, name: 'NameAA', price: 24 },
            // { id: 35, name: 'NameBB', price: 25 },
            // { id: 36, name: 'NameCC', price: 26 },
            // { id: 37, name: 'NameDD', price: 27 },
            // { id: 38, name: 'NameEE', price: 28 }
        ],
        data: []
    }
    
    componentDidMount() {
        this.itemBestBuyHandler()
      };
    
    itemBestBuyHandler = () => {
        // const dataBuy = this.state.itemBestBuyData;
        // this.setState({ data: dataBuy });
        API.loadBestItems()
        .then(
            API.getBestBuy()
            .then(res =>{
            const sellData=res.data;
            this.setState({ data: sellData});
            })
            
        ).catch(err => console.log(err));

    }

    itemBestSellHandler = () => {
        // const dataSell = this.state.itemBestSellData;
        // this.setState({ data: dataSell });
        API.loadBestItems()
        .then(
            API.getBestSell()
            .then(res =>{
            const sellData=res.data;
            this.setState({ data: sellData});
            })
            
        ).catch(err => console.log(err));
    }

    render() {
        return (
            <div className="wrapper">
                <div>
                    <Button title="best-buy" onClick={this.itemBestBuyHandler} active>Best Buy</Button>
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
