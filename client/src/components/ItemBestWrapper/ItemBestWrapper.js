import React, { Component } from "react";
import { Collection, Button } from 'react-materialize';
import Item from "./ItemBestCollection/ItemBest/ItemBest";
import ItemBestCollection from "./ItemBestCollection/ItemBestCollection";
import itemBestCollection from "./ItemBestCollection/ItemBestCollection";

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
            { id: 34, name: 'NameAA', price: 24 },
            { id: 35, name: 'NameBB', price: 25 },
            { id: 36, name: 'NameCC', price: 26 },
            { id: 37, name: 'NameDD', price: 27 },
            { id: 38, name: 'NameEE', price: 28 }
        ],
        data: []
    }

    componentDidMount() {
        this.itemBestBuyHandler()
    };


    // setDefaultState = () => {
    //     const defaultData = this.state.itemBestBuyData;
    //     this.setState({ data: defaultData });
    // }

    itemBestBuyHandler = () => {
        const dataBuy = this.state.itemBestBuyData;
        this.setState({ data: dataBuy });
    }

    itemBestSellHandler = () => {
        const dataSell = this.state.itemBestSellData;
        this.setState({ data: dataSell });
    }


    //   itemBestMapper = props => {
    //       if (Tab.title === "best-buy" && Tab.class === "active") {

    //       }
    //   }

    render() {
        return (
            <div className="wrapper">

                <div>
                    <Button title="best-buy" onClick={this.itemBestBuyHandler}>Best Buy</Button>
                    <Button title="best-sell" onClick={this.itemBestSellHandler} active>Best Sell</Button>
                </div>
                <Collection>
                    <ItemBestCollection itemsBest={this.state.data} grabItemCarousel={this.grabItemCarousel} />
                </Collection>

            </div>
        );
    }
}

export default ItemBestWrapper;
