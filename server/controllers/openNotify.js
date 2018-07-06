const axios = require('axios');
const toDate = require('normalize-date');
let location = [];
let id = 0;
module.exports = {
    create: (req,res) => {
        axios.get('http://api.open-notify.org/iss-now.json').then(result =>{
            // console.log(result.data);
            let {message:msg,timestamp:time,iss_position:pos} = result.data;
            let {latitude:lat,longitude:lon} = pos;
            time = toDate(time * 1000)
            location.push(
            [`ID:${id}`, 
            `Messaage:${msg}`, 
            `Time:${time}`, 
            `Lat:${lat}`,  
            `lon: ${lon}`],)
            id++
            res.status(200).send(location)
        })
    },
    read: (req,res) => {
        axios.get('http://api.open-notify.org/iss-now.json').then(result =>{
            location.push(result.data);
            res.status(200).send(location)
        })
    }
}