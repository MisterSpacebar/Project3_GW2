const axios = require('axios');
const _ = require('lodash');
const fp = require('lodash/fp');

var getHighScores = function(data){
    var sellDates = _.uniq(data.data.results.map((item)=> item.listing_datetime.slice(0,10))).slice(0, 31);

    var sellResult = [];
    var sellData = data.data.results;
    sellDates.forEach((date)=>{
        sellResult.push(sellData.filter((item)=>item.listing_datetime.slice(0,10) === date)[0]);
    });
   return sellResult.slice(0,2);
}

module.exports = function (app) {
    app.get('/api/best',function(req,res){
        const randomID = [12420,12406,12421,19687,36793];

        var besturls = randomID.map(function(element){
            return "http://www.gw2spidy.com/api/v0.9/json/listings/"+element+"/sell/1"
        })

        // var selling = axios.get("http://www.gw2spidy.com/api/v0.9/json/listings/"+req.params.id+"/sell/1")
        // .then(getHighScores)
        // .catch(function(error){
        //     console.log(error);
        //     res.send("error");
        // });

        var bestFunction = besturls.map(function(element){
            return axios.get(element)
                .then(getHighScores)
                .catch(function(error){
                console.log(element+" error: "+error);
            });
        });

        Promise.all([bestFunction]).then(function(values){
            console.log(values);
        })
    });
}