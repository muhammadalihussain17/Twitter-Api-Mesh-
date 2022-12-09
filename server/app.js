const express = require('express');
const app = express();
const port = 9800;
const cors = require('cors');
const Bodyparser = require('body-parser');

app.use(Bodyparser.json({ extended: true}));
app.use(Bodyparser.urlencoded({extended:true}));
app.use(cors());


app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({extended:true}));


const route = require('./route')
app.use('/', route);

app.get('/twitter/api/v1/', (req,res) => {
    res.send('Twitter Api Mash Server Testing');
})

app.listen(port,function(){
    console.log("Twitter Api Mash Server is Running on Port:"+ port);
})

