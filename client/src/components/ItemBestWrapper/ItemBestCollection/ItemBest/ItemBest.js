import React from 'react';
import { Card } from 'react-materialize';
import './ItemBest.css';

const itemBest = (props) => {
        return (

                <Card className="Item">

                        <p onClick={props.click}>{props.itemName} 
                        Price: {props.itemPrice} 
                        </p>
                        <p>{props.children}</p>

                </Card>

        )
};

export default itemBest;