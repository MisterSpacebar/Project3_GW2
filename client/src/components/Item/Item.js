import React, { Card,  } from 'react';
import './Item.css';

const item = (props) => {
        return (

                <Card className="Item">

                        <p> {props.name} </p>
                        <p> {props.buyPrice} </p>
                        <p> {props.sellPrice} </p>

                </Card>

        )
};

export default item;