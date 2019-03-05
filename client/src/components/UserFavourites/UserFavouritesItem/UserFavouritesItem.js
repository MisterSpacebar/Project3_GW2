import React from 'react';
import { Card } from 'react-materialize';

const userFavItem = (props) => {
        return (

                 <Card onClick={props.click}>                  
                       <p> <img src = {props.srcImg} alt='img' />
                        {props.itemFavName}
                        buy price {props.fav_buy_price}
                        sell price {props.fav_sell_price}
                        </p>
                        <p>{props.children}</p>
                 </Card> 
        )
};

export default userFavItem;