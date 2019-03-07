const axios = require('axios');
const _ = require('lodash');
const fp = require('lodash/fp');
const cheerio = require('cheerio');

var getHighScores = function(data){
    var sellDates = _.uniq(data.data.results.map((item)=> item.listing_datetime.slice(0,10))).slice(0, 31);

    var sellResult = [];

    var sellData = data.data.results;
    sellDates.forEach((date)=>{
        sellResult.push(sellData.filter((item)=>item.listing_datetime.slice(0,10) === date)[0]);
    });
    return sellResult.slice(0,2);
}

var scrape = [];

module.exports = function (app) {
    app.get('/api/load',function(req,res){
        axios.get('https://www.gw2tp.com/')
        .then(function(response){
            var $ = cheerio.load(response.data);

            $('table tbody tr .align-left').each(function(i,element){

                scrape.push(parseInt($(this).children('a').attr('data-id')));
            });

            res.send(scrape);
        })
    })

    app.get('/api/bestsell',function(req,res){
        const randomID = scrape.slice(0,5);
        //[12420,12406,12421,19687,8576];

        // wraps ids into array
        var besturls = randomID.map(function(element){
            return "http://www.gw2spidy.com/api/v0.9/json/listings/"+element+"/sell/1"
        })

        // readies ids for information and dumps identical array of ids 
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

            // turns order of results into integers for compatibility
            result = resultOrder.map(function(element){
                return parseInt(element)
            })

            // wraps promise results for new promise
            var things = result.map(async function(element, index){
                
                let response = await axios.get("https://api.guildwars2.com/v2/items/"+element)
                let thing = {
                    id: element,
                    name: response.data.name,
                    price: values[index][0].unit_price,
                    difference: values[index][0].unit_price - values[index][1].unit_price
                };
                return thing;
            });

            // sends frontend data 
            Promise.all(things).then(function(values){
                res.json(values)
            })

        });
    });

    app.get('/api/worstsell',function(req,res){
        const randomID = scrape.slice(5,10);
        //[24359,9431,24735,75015,36793];

        // wraps ids into array
        var besturls = randomID.map(function(element){
            return "http://www.gw2spidy.com/api/v0.9/json/listings/"+element+"/sell/1"
        })

        // readies ids for information and dumps identical array of ids 
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

            // turns order of results into integers for compatibility
            result = resultOrder.map(function(element){
                return parseInt(element)
            })

            // wraps promise results for new promise
            var things = result.map(async function(element, index){
                
                let response = await axios.get("https://api.guildwars2.com/v2/items/"+element)
                let thing = {
                    id: element,
                    name: response.data.name,
                    price: values[index][0].unit_price,
                    difference: values[index][0].unit_price - values[index][1].unit_price
                };
                return thing;
            });

            // sends frontend data 
            Promise.all(things).then(function(values){
                res.json(values)
            })

        });
    });

    app.get('/api/bestbuy',function(req,res){
        const randomID = scrape.slice(0,5);
        //[12420,12406,12421,19687,8576];

        // wraps ids into array
        var besturls = randomID.map(function(element){
            return "http://www.gw2spidy.com/api/v0.9/json/listings/"+element+"/buy/1"
        })

        // readies ids for information and dumps identical array of ids 
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

            // turns order of results into integers for compatibility
            result = resultOrder.map(function(element){
                return parseInt(element)
            })

            // wraps promise results for new promise
            var things = result.map(async function(element, index){
                
                let response = await axios.get("https://api.guildwars2.com/v2/items/"+element)
                let thing = {
                    id: element,
                    name: response.data.name,
                    price: values[index][0].unit_price,
                    difference: values[index][0].unit_price - values[index][1].unit_price
                };
                return thing;
            });

            // sends frontend data 
            Promise.all(things).then(function(values){
                res.json(values)
            })

        });
    });

    app.get('/api/worstbuy',function(req,res){
        const randomID = scrape.slice(5,10);
        //[24359,9431,24735,75015,36793];

        // wraps ids into array
        var besturls = randomID.map(function(element){
            return "http://www.gw2spidy.com/api/v0.9/json/listings/"+element+"/buy/1"
        })

        // readies ids for information and dumps identical array of ids 
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

            // turns order of results into integers for compatibility
            result = resultOrder.map(function(element){
                return parseInt(element)
            })

            // wraps promise results for new promise
            var things = result.map(async function(element, index){
                
                let response = await axios.get("https://api.guildwars2.com/v2/items/"+element)
                let thing = {
                    id: element,
                    name: response.data.name,
                    price: values[index][0].unit_price,
                    difference: values[index][0].unit_price - values[index][1].unit_price
                };
                return thing;
            });

            // sends frontend data 
            Promise.all(things).then(function(values){
                res.json(values)
            })

        });
    });
}