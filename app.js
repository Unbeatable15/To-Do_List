const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items = ["Buy", "Cook", "Eat"];
let work_item = [];

app.get("/",(req,res)=>{
    const today = new Date();
    const currDay = today.getDay();
    // const dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let options = {
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    let day = today.toLocaleDateString("en-US",options);
    res.render("list",{listTitle:day,newListItem:items});
})


app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Work",newListItem:work_item});
})


app.post("/work",(req,res)=>{
    
})

app.post("/",(req,res)=>{
    console.log(req.body);
    let item = req.body.newitem;
    if(req.body.list === "Work"){
        work_item.push(item);
        res.redirect("/work");
    }
    else{
        
        items.push(item);
        res.redirect("/");
    }
})


app.listen(3000,()=>{
    console.log("Sever is listening to Port 3000");
})