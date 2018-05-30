const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var Client = require('node-rest-client').Client;
var client = new Client();
const common = require('./Config/Common');

const app = express();

// Enable body-parser
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())

// Enable cors
app.use(cors());
const api_key = common.API_KEY;

app.post('/getInfor', (req, res) => {
    const typeKeyword = req.body.passdata;

    const city = 'UK';
    const country = 'London';

    console.log('server called ' + typeKeyword + ' key value ' + api_key);

    client.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}`, function (data, response) {
        // parsed response body as js object
        console.log(data);
        // raw response
        //console.log(response);
        res.json({msg:true, data:data});
    });

    // const data =[
    //     {"name":"test 1 description", "id":"123456"},
    //     {"name":"test 2 description", "id":"789456"},
    //     {"name":"test 3 description", "id":"123789"},
    // ];

    // res.json({msg:true, data:data});
});

app.listen(3001, ()=> {
    console.log('server is runninng on ' + 3001 + ' port');        
});