import React , {Component} from 'react';
import './UserFavourites.css';
import UserFavItem from './UserFavouritesItem/UserFavouritesItem';

class UserFavourites extends Component{ 
  render(){
    return this.props.userFavList.map(item => {
      return (
                <UserFavItem 
                class={item.class}
                  srcImg = {item.src}
                  itemFavName={item.name}
                  fav_buy_price ={item.favBuyPrice}
                  fav_sell_price ={item.favSellPrice}
                  id={item.id}
                  key={item.id} 
                  />      
        );
});
}};        
export default UserFavourites;