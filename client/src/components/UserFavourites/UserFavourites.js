import React, { Component } from 'react';
import './UserFavourites.css';
import { Card, Col } from 'react-materialize';
import OwlCarousel from 'react-owl-carousel';
import ItemBest from '../ItemBestWrapper/ItemBestCollection/ItemBest/ItemBest'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import itemBest from '../ItemBestWrapper/ItemBestCollection/ItemBest/ItemBest';

class UserFavourites extends Component {
    render() {
        return (
            <Col s={12} >
                <OwlCarousel
                    className="owl-theme"
                    loop
                    rtl
                    margin={10}
                    nav
                >
                    <ItemBest
                        itemName={this.props.itemName}
                        itemBuyPrice={this.props.buyPrice}
                        itemSellPrice={this.props.sellPrice}
                        id={this.props.id}
                        key={this.props.id} />
                    <Card s={12} className="item grey lighten-4 black-text">
                        <span>Item 2</span>
                    </Card>
                    <Card s={12} className="item grey lighten-4 black-text">
                        <span>Item 3</span>
                    </Card>
                    <Card s={12} className="item grey lighten-4 black-text">
                        <span>Item 4</span>
                    </Card>
                </OwlCarousel>
            </Col>
        )
    }
}
export default UserFavourites;