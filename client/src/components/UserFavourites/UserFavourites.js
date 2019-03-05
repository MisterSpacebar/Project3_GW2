import React from 'react';
import './UserFavourites.css';
import UserFavItem from './UserFavouritesItem/UserFavouritesItem'


const userFavourites =(props)=> props.userFavList.map(item =>{
    return (
                <UserFavItem 
                  srcImg = {item.src}
                  itemFavName={item.name}
                  fav_buy_price ={item.favBuyPrice}
                  fav_sell_price ={item.favSellPrice}
                  id={item.id}
                  key={item.id} 
                  />      
        )
})
        
export default userFavourites;