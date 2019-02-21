import React, { Component } from 'react';
import Chart from '../../components/GraphWindow/Chart';
import Carousel from '../../components/Carousel/Carousel';
import Currency from '../../components/Currency/Currency';
import ItemsBest from '../../components/ControlPanel/ItemsBestCollection';
import { Row, Col } from 'react-materialize';
import API from "./utils/API.js";

class Home extends Component {
    state = {
        item: [],
        id: 2424
    }

        render() {
            const {
                item,
                id
            } = this.props;

            return (
                <div className='container-fluid'>
                    <Row>
                        <Carousel
                            id={id}
                            item={item}
                            loadItem={this.loadItem}
                        />
                    </Row>
                    <Row>
                        <Col m={8} s={12}>
                            <Chart />
                        </Col>
                        <Col m={4} s={12}>
                            <Currency />
                            <ItemsBest />
                        </Col>
                    </Row>
                </div>
            )
        }
    };

    export default Home;