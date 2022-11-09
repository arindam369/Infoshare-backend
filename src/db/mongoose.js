require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.hspwrdh.mongodb.net/infoshare-api?retryWrites=true&w=majority`, {useNewUrlParser:true, useUnifiedTopology:true});