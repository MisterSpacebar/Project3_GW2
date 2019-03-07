import React from 'react';
import './CarouselItem.css'
import { Card } from 'react-materialize';

const carouselItem = (props) => {
return (
        <Card className='Card' onClick={e => { props.clicked(e, props.chartdata);}} id={props.id}>                       
                <div> 
                <img src = {props.src} alt='img' />
                        <p>
                        <h1>{props.itemName}</h1>
                        buy price {props.buy_price}
                        sell price {props.sell_price}
                        </p>
                </div>
        </Card> 
)
};

export default carouselItem;