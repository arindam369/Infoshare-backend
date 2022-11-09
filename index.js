const express = require("express");
const app = express();
require("./src/db/mongoose");
const bodyParser = require("body-parser");
const DataRouter = require("./src/routers/Data");
const cors = require("cors");

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// CORS ISSUE ---------------------
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.get("/", (req,res)=>{
    res.send("Welcome to InfoShare Backend");
})


app.use(DataRouter);

const port = 5000 || process.env.PORT;
app.listen(port, ()=>{
    console.log("Server is listening on port:", port);
})