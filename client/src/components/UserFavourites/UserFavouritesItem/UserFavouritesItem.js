import React from 'react';
import { Card } from 'react-materialize';

const userFavItem = (props) => {
        return (

                 <Card  className="item grey lighten-4 black-text" onClick={props.click}>                  
                        <img src = {props.srcImg} alt='img' />
                        name {props.itemFavName}
                        buy price {props.fav_buy_price}
                        sell price {props.fav_sell_price}
                        <p>{props.children}</p>
                 </Card> 
        )
};

export default userFavItem;