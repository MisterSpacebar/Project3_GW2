const axios = require('axios');
// Load the full build.
const _ = require('lodash');
// Load the core build.
//const _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
const fp = require('lodash/fp');

// function returnArray(jsonArray){
//     data = [];
//     for(var b=0 ; b < jsonArray.length ; b++){
//         data[b] = {
//             listing_datetime: jsonArray[b].listing_datetime.slice(0,10),
//             unit_price: jsonArray[b].unit_price,
//             quantity: jsonArray[b].quantity,
//             listings: jsonArray[b].listings
//         }
//     }
//     return data
// }
var getHighScores = function(data){
    var sellDates = _.uniq(data.data.results.map((item)=> item.listing_datetime.slice(0,10))).slice(0, 31);

    var sellResult = [];
    var sellData = data.data.results;
    sellDates.forEach((date)=>{
        sellResult.push(sellData.filter((item)=>item.listing_datetime.slice(0,10) === date)[0]);
    });
   return sellResult;
}
module.exports = function (app) {
    app.get('/api/history/:id',function(req,res){
     
        // readies historical buy and sell data along with basic item data requests for promise
        var buying = axios.get("http://www.gw2spidy.com/api/v0.9/json/listings/"+req.params.id+"/buy/1")
        .then(getHighScores)
        .catch(function(error){
            console.log(error);
            res.send("error");
        });
        var selling = axios.get("http://www.gw2spidy.com/api/v0.9/json/listings/"+req.params.id+"/sell/1")
        .then(getHighScores)
        .catch(function(error){
            console.log(error);
            res.send("error");
        });
        var naming = axios.get("https://api.guildwars2.com/v2/items/"+req.params.id)
        .then(function(response){
            return response.data
        }).catch(function(error){
            console.log(error);
            res.send("error");
        });

        Promise.all([buying, selling, naming]).then(function(values){

            // cut data to last 31 days
            var b = values[0].slice(0,31);
            var s = values[1].slice(0,31);

            // filters out and returns only usable data from requests
            var bu = b.map(function(element){
                return element.unit_price
            })
            var se = s.map(function(element){
                return element.unit_price
            });
            var dates = b.map(function(element){
                return element.listing_datetime.slice(0,10)
            });

            // nest data into object already ready to slot into react state
            var data = {
                id: req.params.id,
                name: values[2].name,
                img: values[2].icon,
                chartData:{
                    labels:dates.reverse(),
                    datasets:[
                        {
                            // item name
                            label:'Buy Listings',
                            // line colour
                            borderColor:'rgba(0,0,0, 0.6)',
                            // line bg colour
                            backgroundColor:'rgba(0, 0, 0, 0.6)',
                            data:bu.reverse(),
                            yAxisId:'y-axis-1',
                        }, {
                            // item name
                            label:'Sell Listings',
                            // line colour
                            borderColor:'rgba(0, 139, 139, 0.6)',
                            // line bg colour
                            backgroundColor:'rgba(0, 139, 139, 0.6)',
                            data:se.reverse(),
                            yAxisId:'y-axis-2',
                        }
                    ]
                }
            };

            // sends object to front end
            res.send(data);
        }).catch(function(error){
            console.log(error);
        })
    });
};