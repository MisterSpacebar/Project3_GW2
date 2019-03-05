import React, {Component} from "react";
import API from "../utils/API";
import "./userFavNav.css"
import NavBar from '../components/NavBar/NavBar';
import UserFavourites from '../components/UserFavourites/UserFavourites';
import { Card,Col } from 'react-materialize';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class userFavNav extends Component{
    state = {        
        favItemData:[    
            {
            id:0,
            name:"",
            favBuyPrice:0,
            favSellPrice:0,
            src:""}
        ],        
        favData:[]
}
    componentDidMount(){}
    componentDidUpdate(){}

    handleChange=(e)=>{
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        this.setState({
            id: value
        })
    }

    loadFavItemData =(e) => {
        e.preventDefault();      
        const value = e.target.input_0.value;
        console.log(value);

        API.getHistory(value)
          .then(res =>{
            let newFav = { 
                id:res.data.id,
                name: res.data.name, 
                favBuyPrice: res.data.chartData.datasets[0].data[0],
                favSellPrice: res.data.chartData.datasets[1].data[0],
                src: res.data.img
            };
            this.state.favData.push(newFav);
            this.setState({ favData: this.state.favData });
        })
          .catch(err => console.log(err));
      };
      
    render(){
        console.log(this.state);
        return(
            <div>
                <NavBar 
                value={this.state.id} 
                onSubmit={this.loadFavItemData.bind(this)} 
                onChange={this.handleChange}/>
                <Col s={12} >
                <OwlCarousel
                    className="owl-theme"
                    loop
                    rtl
                    margin={10}
                    nav
                >
                <Card s={12} className='item'>Start your item collection here</Card> 
                 <UserFavourites s={12} className='item grey lighten-4 black-text' userFavList={this.state.favData}/>

                </OwlCarousel> 
                </Col>
            </div>
        )
    }
};
export default userFavNav;