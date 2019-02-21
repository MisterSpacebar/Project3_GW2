import React, { Component } from 'react';
import './Carousel.css';
import { Card, Col } from 'react-materialize';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Item from '../Item/Item';

class Carousel extends Component {
    render() {
        const {
            item,
            id
        } = this.props;

        return (
            <Col s={12} >
                <OwlCarousel
                    className="owl-theme"
                    loop
                    rtl
                    margin={10}
                    nav
                >
                    <Item
                        id={id}
                        item={item}
                        loadItem={this.loadItem}
                    />
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
export default Carousel;