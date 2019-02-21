import React from "react";
import {Card} from 'react-materialize';

const currency = () => (
    <Card 
        className='grey lighten-2' 
        textClassName='black-text' 
        title='Currency ' 
        //actions={[<a href='#'>This is a link</a>]}
        >
    <h6><span>dollar</span>-> <span>gems</span> -> <span>gold</span></h6>
    </Card>
);


export default currency;