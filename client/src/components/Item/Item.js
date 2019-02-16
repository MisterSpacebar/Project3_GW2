import React, { Component } from 'react';
import './Item.css';
import getItem from '../../utils/API.js'

class Item extends Component {
    render() {
        return (
<Item 
className="item-component"
>

<span>{console.log(JSON.stringify(getItem(2424)))}</span>

</Item>
        )}
}
export default Item;