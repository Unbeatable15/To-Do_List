const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = [];

app.get("/",(req,res)=>{
    const today = new Date();
    const currDay = today.getDay();
    // const dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    var day = today.toLocaleDateString("en-US",options);
    res.render("list",{kindOfDay:day,newListItem:items});
})


app.post("/",(req,res)=>{
    var item = req.body.newitem;
    items.push(item);
    res.redirect("/");
})


app.listen(3000,()=>{
    console.log("Sever is listening to Port 3000");
})