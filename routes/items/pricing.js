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

        var resultOrder = [];

        var bestFunction = besturls.map(function(element){
            return axios.get(element)
                .then(getHighScores)
                .then(resultOrder.push(element.slice(47,element.length-7)))
                .catch(function(error){
                console.log(element+" error: "+error);
            });
        });

        Promise.all(bestFunction).then(function(values){
            // values.forEach(function(element){

            // })
            // console.log(values);
            console.log("order "+resultOrder);
            result = resultOrder.map(function(element){
                return parseInt(element)
            })
            console.log("int version of order: "+result);

            var thing = {
                id: 0,
                name: "",
                price: 0,
                difference: 0,
            };

            var things = [];

            values.forEach(function(element){
                console.log(element[0]);
                resultOrder.forEach(function(ele){
                    axios.get("https://api.guildwars2.com/v2/items/"+ele)
                    .then(function(response){
                        thing.id = ele;
                        thing.name = response.data.name;
                        thing.price = element[0].unit_price;
                        thing.difference = (element[0].unit_price-element[1].unit_price);

                        console.log(thing)

                        things.push({
                            id: ele,
                            name: response.data.name,
                            price: element[0].unit_price,
                            difference:(element[0].unit_price-element[1].unit_price)
                        });

                        console.log(things)
                    }).catch(function(error){
                        console.log(error);
                        res.send("error");
                    })
                });
            }).then(function(){
                res.send(things);
            }).catch(function(error){
                console.log(error)
            })

            values.forEach(function(element){
                thing.price = element[0].unit_price;
                thing.difference = (element[0].unit_price-element[1].unit_price);
            })
            resultOrder.forEach(function(ele){
                axios.get("https://api.guildwars2.com/v2/items/"+ele)
                .then(function(response){
                    thing.id = ele;
                    thing.name = response.data.name;

                }).catch(function(error){
                    console.log(error);
                    res.send("error");
                })
            })

            
        });
    });
}