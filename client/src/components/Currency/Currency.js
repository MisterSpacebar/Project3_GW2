import React from "react";
import {Card} from 'react-materialize';

const currency = () => (
    <Card 
        className='grey lighten-2' 
        textClassName='black-text' 
        title='Currency ' 
        //actions={[<a href='#'>This is a link</a>]}
        >
    dollar-> gems -> gold
    </Card>
);


export default currency;