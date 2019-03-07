import React, { Component } from 'react';
import Currency from '../../components/Currency/Currency';
import Carousel from '../../components/Carousel/Carousel';
import Chart from '../../components/Chart/Chart'
import ItemBestWrapper from '../../components/ItemBestWrapper/ItemBestWrapper';
import { Row, Col } from 'react-materialize';
class HomePageBuilder extends Component{
  state={
    graphData:{}   
  }
  componentDidMount(){}
  componentDidUpdate(){}

    handleChartDataCarousel=(e, selectedChartData)=>{
        e.preventDefault();
        console.log(selectedChartData);
        this.setState({graphData: selectedChartData});
    }
    
    render(){
        return(
            <div>
                <Row>
                    <Row>
                        <Carousel handleChartData={this.handleChartDataCarousel}/>
                    </Row>
                    <Row>
                    <Col m={8} s={12}>
                     <Chart chartdata={this.state.graphData} />
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