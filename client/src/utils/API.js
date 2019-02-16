import axios from "axios";

export default {
  // Gets all gems exchange
  getGems: function() {
    return axios.get("/api/exchange");
  },
  // Gets the price history with the given id
  getHistory:function(id){
      return axios.get("/api/history/" +id)
  },
  // Gets the item details with the given id
  getItem: function(id) {
    return axios.get("/api/item/" + id);
  }
};
  