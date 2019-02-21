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
        })
        Promise.all([buying, selling, naming]).then(function(values){
            // res.send({buying: values[0], selling: values[1]})

            // var data = values[0].map(function(element){

            // })
            var b = values[0];
            var s = values[1];
            var data = {
                name: values[2].name,
                img: values[2].icon,
                chartData:{
                    labels:[],
                    datasets:[
                        {
                            // item name
                            label:'Buy Listings',
                            // line colour
                            borderColor:'rgba(255, 102, 102, 0.6)',
                            // line bg colour
                            backgroundColor:'rgba(255, 102, 102, 0.6)',
                            data:[
                            ],
                            yAxisId:'y-axis-1',
                        }, {
                            // item name
                            label:'Sell Listings',
                            // line colour
                            borderColor:'rgba(204, 153, 255, 0.6)',
                            // line bg colour
                            backgroundColor:'rgba(204, 153, 255, 0.6)',
                            data:[
                            ],
                            yAxisId:'y-axis-2',
                        }
                    ]
                }
            };
            for(var i=0 ; i < 31 ; i++){
                // data[i] = {
                //     date: b[i].listing_datetime.slice(0,10),
                //     buying: b[i].unit_price,
                //     selling: s[i].unit_price
                // }

                data.chartData.labels[i] = b[i].listing_datetime.slice(0,10);
                data.chartData.datasets[0].data[i] = b[i].unit_price;
                data.chartData.datasets[1].data[i] = s[i].unit_price;
            }
            res.send(data);
        });
    });
};