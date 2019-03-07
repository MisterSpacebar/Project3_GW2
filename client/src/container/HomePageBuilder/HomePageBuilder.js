import React, { Component } from 'react';
//import Aux from '../../hoc/Aux';
import Currency from '../../components/Currency/Currency';
import Carousel from '../../components/Carousel/Carousel';
//import Chart from '../../components/Chart/Chart'
import ItemBestWrapper from '../../components/ItemBestWrapper/ItemBestWrapper';
import { Row, Col } from 'react-materialize';
class HomePageBuilder extends Component{
  
    render(){
        return(
            <div>
                <Row>
                    <Row>
                        <Carousel />
                    </Row>
                    <Row>
                    <Col m={8} s={12}>
                     {/* <Chart /> */}
                    </Col>
                    <Col m={4} s={12}>
                        <Currency />
                        <ItemBestWrapper />
                    </Col>
                </Row>
                </Row>
            </div>
        )
    }
}
export default HomePageBuilder;