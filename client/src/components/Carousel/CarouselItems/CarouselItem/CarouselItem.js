import React from 'react';
import { Card } from 'react-materialize';

const carouselItem = (props) => {
return (
        <Card onClick={props.clicked}>                  
                <p data={props.chartdata}> 
                <img src = {props.src} alt='img' />
                {props.itemName}
                buy price {props.buy_price}
                sell price {props.sell_price}
                </p>
        </Card> 
)
};

export default carouselItem;