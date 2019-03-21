//==========================================
//All dependencies will be here.
//==========================================

var express =require("express");
var app=express();
var bodyparser=require('body-parser');
const _=require('lodash');
var cookieParser = require("cookie-parser");

app.use(cookieParser());

const port=process.env.PORT||3201;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/views'));


app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/views/landing.html');
});



app.listen(port,()=>{
	console.log(`I am listening at port ${port}`);
})