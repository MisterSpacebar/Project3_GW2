import React from 'react';
import { Card } from 'react-materialize';
import './ItemBest.css';

const itemBest = (props) => {
        return (

                <Card className="Item">
                        
                        <p onClick={props.click}>
                        
                        <b>{props.itemName}</b><br /> 
                        Price: {props.itemPrice} <br />
                        Difference: {props.difference}
                        </p>
                        <p>{props.children}</p>

                </Card>
        )
};

export default itemBest;