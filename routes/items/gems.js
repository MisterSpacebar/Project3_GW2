const axios = require('axios');

module.exports = function (app) {
    app.get('/api/exchange',function(req,res){
        var gemData;
        axios.get("https://api.guildwars2.com/v2/commerce/exchange/gems?quantity=1000")
        .then(function(response){
            gemData = response.data;
            console.log(gemData);
            // sends gem data to front end (currency data per single gem for 1000 gems)
            res.send(gemData);
        }).catch(function(error){
            console.log(error);
        })
    });
};