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
        Promise.all([buying, selling]).then(function(values){
            // res.send({buying: values[0], selling: values[1]})

            // var data = values[0].map(function(element){

            // })
            var b = values[0];
            var s = values[1];
            var data = [];
            for(var i=0 ; i < 31 ; i++){
                data[i] = {
                    date: b[i].listing_datetime.slice(0,10),
                    buying: b[i].unit_price,
                    selling: s[i].unit_price
                }
            }
            res.send(data);
        });
    });
};