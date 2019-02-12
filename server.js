const express = require('express');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// routing for economy data
require('./routes/items/item.js')(app);
require('./routes/items/historical.js')(app);
require('./routes/items/gems.js')(app);
// routing for account-based character data
require('./routes/account/account.js')(app);

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  