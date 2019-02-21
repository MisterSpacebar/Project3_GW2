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
  searchItem: function (name) {
    axios.get("http://www.gw2spidy.com/api/v0.9/json/item-search/" + name + "/1")
      .then(function (response) {
        return response.data
      }).catch(function (error) {
        console.log(error);
      })
  },
  getItemHistory: function () {API.getHistory(this.state.id)
    .then(response => {
        console.log(response.data.chartData);
        this.setState({chartData:response.data.chartData});
        console.log(response.data.name);
        this.setState({name:response.data.name});
        this.setState({img:response.data.icon});
    })
};
