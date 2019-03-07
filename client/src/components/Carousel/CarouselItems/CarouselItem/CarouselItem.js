import React from 'react';
import { Card } from 'react-materialize';

const carouselItem = (props) => {
return (
        <Card onClick={e => { props.clicked(e, props.chartdata);}} id={props.id}>                       
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