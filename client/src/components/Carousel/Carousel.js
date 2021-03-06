import React , {Component} from 'react';
import CarouselItems from './CarouselItems/CarouselItems';
import Input from './Input/Input';
import API from "../../utils/API";
import './Carousel.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Col, Row, Card} from 'react-materialize';

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
    // shouldComponentUpdate(){
    //     return true;
    // }

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

    render(){

      return ( 
          <div>
               <Row s={12}> 
                   <Input  s={4} m={4}
                    typeText='id number'
                    typeButton='submit'
                    nameInput='search'
                    nameButton='submit'
                    value={this.state.value}
                    onSubmit={this.handleSubmit}
                    onChange={this.handleChange}
                    />
                
                <Col s={12}>
                   <OwlCarousel s={8} m={8}
                    className="owl-theme"
                    loop
                    rtl
                    margin={10}
                    nav>
                    <Card s={12} className='item startCard'>Start your item collection here</Card> 
                    <CarouselItems s={12} 
                        className="item"
                        carouselList={this.state.carouselData}
                        clicked={this.props.handleChartData}/>  
                </OwlCarousel>               
                </Col>
            </Row>
            </div>    
        );
}};
       
export default Carousel;