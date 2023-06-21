const express = require("express");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let items = [];
let work_item = [];

app.get("/",(req,res)=>{
    let day = date.getDate();
    res.render("list",{listTitle:day,newListItem:items});
})


app.get("/work",(req,res)=>{
    res.render("list",{listTitle:"Work",newListItem:work_item});
})


app.post("/work",(req,res)=>{
    
})

app.post("/",(req,res)=>{
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