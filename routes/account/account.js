const axios = require('axios');

var token = ""; //needs to add arenanet API key

module.exports = function (app) {

    app.get('/api/account/characters',function(req,res){

        axios.get("https://api.guildwars2.com/v2/characters?access_token="+token)
        //grabs array of characters of account tied to API key
        .then(function(response){
            var character = response.data.map(function(element){
                return "https://api.guildwars2.com/v2/characters/"+element+"/core?access_token="+token
            });
            console.log(character);

            var characterFunction = character.map(function(element){
                return axios.get(element).then(function(response){
                    console.log(response.data);
                    return response.data
                }).catch(function(error){
                    console.log(element+" character error: "+error);
                })
            });

            Promise.all(characterFunction).then(function(responses){res.send(responses);});
            //returns JSON of basic character data of all characters tied to API key

        }).catch(function(error){
            res.send("error");
            console.log(error);
        });
    })
}