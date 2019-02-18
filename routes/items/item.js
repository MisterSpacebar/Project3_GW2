const axios = require('axios');

module.exports = function (app) {
    app.get('/api/item/:id',function(req,res){

        var itemInfo = axios.get("https://api.guildwars2.com/v2/items/"+req.params.id)
        .then(function(response){
            // console.log(response.data);
            item = response.data;
            return {
                name: item.name,
                description: item.description,
                level: item.level,
                restriction: item.flags,
                icon: item.icon
            }
        }).catch(function(error){res.send("item data GET error");console.log("item data error:\n"+error);});
        var itemPrice = axios.get("https://api.guildwars2.com/v2/commerce/prices/"+req.params.id)
        .then(function(response){
            // console.log(response.data);
            price = response.data;
            return {
                buying: {
                    quantity: price.buys.quantity,
                    price: price.buys.unit_price
                },
                selling: {
                    quantity: price.sells.quantity,
                    price: price.sells.unit_price
                }
            }
        }).catch(function(error){res.send("item pricing GET error");console.log("item pricing error:\n"+error);});

        Promise.all([itemInfo,itemPrice]).then(function(responses){res.send(
            {
                id: req.params.id,
                data: responses[0],
                pricing: responses[1]
            }
        )});
    });
}