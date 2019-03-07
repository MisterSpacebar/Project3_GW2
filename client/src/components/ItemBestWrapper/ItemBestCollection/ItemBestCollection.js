import React from "react";
import ItemBest from "./ItemBest/ItemBest"

const itemBestCollection =(props)=>props.itemsBest.map(item =>{
  return (
  <ItemBest
  itemName={item.name}
  itemPrice ={item.price}
  difference={item.difference}
  id={item.id}
  key={item.id} />)
})
export default itemBestCollection;
