import axios from "axios";

export default {
  // Gets all gems exchange
  getGems: function () {
    return axios.get("/api/exchange");
  },
  // Gets the price history with the given id
  getHistory: function (id) {
    return axios.get("/api/history/" + id)
  },
  // Gets the item details with the given id
  getItem: function (id) {
    return axios.get("/api/item/" + id);
  },
  loadBestItems: function(){
    return axios.get("api/load");
  },
  getBestSell: function(){
    return axios.get("api/bestsell");
  },
  getBestBuy: function(){
    return axios.get("api/worstsell");
  },
  searchItem: function (name) {
    axios.get("http://www.gw2spidy.com/api/v0.9/json/item-search/" + name + "/1")
      .then(function (response) {
        return response.data
      }).catch(function (error) {
        console.log(error);
      })
  }
};
