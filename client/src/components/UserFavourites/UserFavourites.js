import React, { Component } from 'react';
import './UserFavourites.css';
import {Card, Col} from 'react-materialize';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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
    <Card s={12} className="item grey lighten-4 black-text">
    <span>item 1</span>
    </Card>          
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
        )}
}
export default UserFavourites;