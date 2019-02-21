import React, { Component } from 'react';
import './Item.css';
import getItem from '../../utils/API.js'
import { Card, Button } from 'react-materialize';

class Item extends Component {
        constructor(props) {
                super(props);
        }
        render() {
                // const {

                //         getItem,
                //         item,
                //         id,
                // } = this.state;
                console.log(JSON.stringify(triggerGetItem(2424)))
                return (
                        <Item className="item-component">
                                <Card className="grey black-text">best selling item 1

                                        <Button waves='light' onClick={() => this.props.triggerGetItem(this.state.id)}>Test!</Button>
                                        <div>{JSON.stringify(this.state.item)}</div>
                                </Card>
                        </Item>

                )
                
        }
}
export default Item;