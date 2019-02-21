import React, { Component } from 'react';
import './Item.css';
// import getItem from '../../utils/API.js'
import { Card, Button } from 'react-materialize';

class Item extends Component {
        static propTypes = {
                loadItem: this.state.loadItem,

        }

        render() {
                const { loadItem } = this.props
                return (
                        <Item className="item-component">
                                <Card className="grey black-text">best selling item 1
                                        <Button waves='light' onClick={() => this.loadItem(this.state.id)}>Test!</Button>
                                        <div>{JSON.stringify(this.state.item)}</div>
                                </Card>
                        </Item>

                )
        }
}
export default Item;