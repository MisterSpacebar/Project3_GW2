import React, { Component } from 'react';
import Chart from '../../components/GraphWindow/Chart';
import Carousel from '../../components/Carousel/Carousel';
import Currency from '../../components/Currency/Currency';
import ItemsBest from '../../components/ControlPanel/ItemsBestCollection';
import { Row, Col} from 'react-materialize';

class Home extends Component{
    render() {
        return (
            <div className='container-fluid'>
        <Row>
            <Carousel />
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
)}
};

export default Home;