import React , {Component} from 'react';
import CarouselItem from './CarouselItem/CarouselItem';

class CarouselItems extends Component{ 
  render(){
    return this.props.carouselList.map(item => {
      return (
                <CarouselItem          
                  id={item.id}
                  chartdata={item.chartData}
                  src = {item.src}
                  itemName={item.name}
                  buy_price ={item.buyPrice}
                  sell_price ={item.sellPrice}
                  key={item.id} 
                  clicked={this.props.clicked}
                  />      
        ); 
  });
}};        
export default CarouselItems;  