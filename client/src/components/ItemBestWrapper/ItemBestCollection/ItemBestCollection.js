import React from "react";
import { Collection, Tabs, Tab, Card } from 'react-materialize';
import ItemBest from "./ItemBest/ItemBest"

const itemBestCollection =(props)=>props.itemsBest.map(item =>{

  return (
  <ItemBest
  itemName={item.name}
  itemPrice ={item.price}
  id={item.id}
  key={item.id} />)
})
export default itemBestCollection;
