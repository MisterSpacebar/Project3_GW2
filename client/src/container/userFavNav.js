import React, {Component} from "react";
import API from "../utils/API";
import NavBar from '../components/NavBar/NavBar';
import OwlCarousel from 'react-owl-carousel';
import UserFavourites from '../components/UserFavourites/UserFavourites';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class userFavNav extends Component{
    // constructor(props){
    //     super(props);
     
    //     //this.loadFavItemData = this.loadFavItemData.bind(this);
    //     //this.handleChange = this.handleChange.bind(this);
    // }
    state = {        
        favItemData:[    
            {id:0,
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
            console.log(res.data);
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
          
         //this.carouselFidderHandler(value);
      };
 
        carouselFidderHandler=()=>{
        // const itemCarousel =[...this.state.favItemData];
        // itemCarousel.push(id);
        // this.setState({favData:this.state.favItemData})
    

        const itemCarouselFull = this.state.favData;
        const itemCarouselEmpty = this.state.favItemData;
        itemCarouselEmpty.push(itemCarouselFull);
        console.log("Full: " + itemCarouselFull);
        console.log("Empty: " + itemCarouselEmpty);
        this.setState({favData: itemCarouselFull.concat(itemCarouselEmpty)});
      };
      

    render(){
        console.log(this.state);
        return(
            <div>
                <NavBar right 
                value={this.state.id} 
                onSubmit={this.loadFavItemData.bind(this)} 
                onChange={this.handleChange}/>

                <OwlCarousel
                    className="owl-theme"
                    loop
                    rtl
                    margin={10}
                    nav
                >
                <UserFavourites userFavList={this.state.favData}/>
                </OwlCarousel>
                {/* <p onCLick={this.loadFavItemData(24)} >
                    CHECK:
                    <img src = {this.state.srcImg} alt='img' />  
                    {this.state.name} 
                    buy price {this.state.buy_price} 
                    sell price {this.state.sell_price}
                </p>  
                */}
            </div>
        )
    }
};
export default userFavNav;