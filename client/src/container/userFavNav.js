import React, {Component} from "react";
import API from "../utils/API";
import NavBar from '../components/NavBar/NavBar';
import UserFavourites from '../components/UserFavourites/UserFavourites';

class userFavNav extends Component{
    state = {
        name:"",
        buy_price:0,
        sell_price:0,
        srcImg:""
    }
    loadFavItemData =(id)=>{
        API.getHistory(id)
          .then(res =>
            this.setState({ name: res.data.name, 
                buy_price: res.data.chartData.datasets[0].data[0],
                sell_price: res.data.chartData.datasets[1].data[0],
                srcImg: res.data.img
            })
          )
          .catch(err => console.log(err));
      }
        componentDidMount() {
         this.loadFavItemData();
        };

    render(){
        return(
            <div>
                <NavBar />
                <UserFavourites />
                <p onCLick={this.loadFavItemData(24)}>
                    CHECK:
                    <img src = {this.state.srcImg} alt='img' />  
                    {this.state.name} 
                    buy price {this.state.buy_price} 
                    sell price {this.state.sell_price}
                </p>
            </div>
        )
    }
};
export default userFavNav;