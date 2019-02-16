import React, { Component } from 'react';
import './Item.css';
import itemPrint from  '../../../../controllers/itemsController.js';
import itemData from '../../../../routes/items/item.js'

class Item extends Component {
    render() {
        return (
<Item 
className="item-component"
>

<span>{itemPrint()}</span>

</Item>
        )}
}
export default Item;