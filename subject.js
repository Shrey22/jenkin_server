var express = require("express")
var mysql = require("mysql")
var subrouter = express();

var connection = mysql.createConnection({
    host : "localhost",
    user:"kdac",
    password:"kdac",
    database:"mean_exam"
});

connection.connect();
var data = [];
subrouter.get("/",function(req,res){
    let query = "select * from movies";
    connection.query(query,function(err,result){
        if(err == null)
        {
            data = result;
            res.contentType("application/json");
            res.send(JSON.stringify(data));
        }
        else 
        {
            res.send(err);
        }
    });
});

module.exports = subrouter;

