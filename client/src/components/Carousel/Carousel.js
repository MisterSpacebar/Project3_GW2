import React , {Component} from 'react';
import CarouselItems from './CarouselItems/CarouselItems';
import Input from './Input/Input';
import API from "../../utils/API";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Col, Row, Card} from 'react-materialize';
import Chart from '../../components/Chart/Chart'

class Carousel extends Component{ 
    constructor(props) {
        super(props);
       this.state = {        
        favItemData:[    
            {value:'',
            id:0,
            name:"",
            favBuyPrice:0,
            favSellPrice:0,
            src:"",
           chartData:{}
        }
        ],        
        carouselData:[],
        graphData:{}    
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}
    componentDidMount(){}
    componentDidUpdate(){}

    handleChange=(e)=>{
        e.preventDefault();
        let value = e.target.value;
        this.setState({
            value: value,
            id: value
        })
    };

    handleSubmit =(e) => {
        e.preventDefault();      
        const value = e.target.input_0.value;
        console.log(value);

        API.getHistory(value)
          .then(res =>{
            let newData = { 
                id:res.data.id,
                name: res.data.name, 
                buyPrice: res.data.chartData.datasets[0].data[0],
                sellPrice: res.data.chartData.datasets[1].data[0],
                src: res.data.img,
                chartData:res.data.chartData
            };
            this.state.carouselData.push(newData);
            this.setState({ carouselData: this.state.carouselData });
        })
          .catch(err => console.log(err));
          console.log(this.state.carouselData)
      };

      handleChartData=(e, selectedChartData)=>{
        e.preventDefault();
        console.log(selectedChartData);
        let newData=this.state.chartData;
        
        this.setState({graphData: selectedChartData});
      }
  render(){

      return ( 
          <div>
               <Row s={12}> 
                   <Input  
                    typeText='id number'
                    typeButton='submit'
                    nameInput='search'
                    nameButton='submit'
                    value={this.state.value}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                    />
                </Row>
                <Col s={12}>
                   <OwlCarousel
                    className="owl-theme"
                    loop
                    rtl
                    margin={10}
                    nav
                >
                <Card s={12} className='item'>Start your item collection here</Card> 
                <CarouselItems s={12} 
                    className="item"
                    carouselList={this.state.carouselData}
                    clicked={this.handleChartData}/>  
                </OwlCarousel>               
            </Col>
            <Chart chartdata={this.state.graphData}/>
            </div>    
        );
}};
       
export default Carousel;