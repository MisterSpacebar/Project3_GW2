import React, { Component } from 'react';
import Chart from '../../components/GraphWindow/Chart';
import Carousel from '../../components/Carousel/Carousel';
import Currency from '../../components/Currency/Currency';
import ItemsBest from '../../components/ControlPanel/ItemsBestCollection';
import { Row, Col } from 'react-materialize';


class Home extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            item: [],
            id: 2424
        }
        this.getItem = this.getItem.bind(this);
    };

    render() {
        const {
            item,
            id
        } = this.props;

        return (
            <div className='container-fluid'>
                <Row>
                    <Carousel
                        triggerGetItem={this.getItem}
                        id={id}
                        item={item}
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