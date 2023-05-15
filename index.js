//const http = require('http');
//let a = ()=>{

//}

//http.createServer(function(req,res){
//    res.write('<h1>Welcome everyone</h1>');
//    res.end();
//}).listen(8081);


//Imports

const express = require('express');
const morgan = require('morgan');

//app init 
const app = express();

//first route

app.get('/',(req,res)=>{
    res.json({message: "welcome again "})
});

app.listen('8081');