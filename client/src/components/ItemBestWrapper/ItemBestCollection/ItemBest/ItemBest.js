import React from 'react';
import { Card } from 'react-materialize';
import './ItemBest.css';

const itemBest = (props) => {
        return (
                <Card className="Item">
                        <p className="name" onClick={props.click}>{props.itemName}<br />
                                <span> Price: {props.itemPrice} |</span> 
                                <span>Difference: {props.difference}
                                </span>
                        </p>
                        <p>{props.children}</p>
                </Card>
        )
};

export default itemBest; 