var express = require("express")
var mysql = require("mysql")
var subrouter = express();


subrouter.use(express(JSON));

subrouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

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

subrouter.listen(4000,()=>{
    console.log("SERVER STARTED at 4000...");
})