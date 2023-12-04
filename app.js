const express = require('express');
const app = express();
const mysql = require("mysql2");
const path = require('path');



app.use(express.urlencoded({extended:true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

const connection = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'Abhi9760@',
    database:'caseStudy'
})

app.listen(8080,()=>{
    console.log("app is listening to port 8080");
})

app.get("/staff",(req,res)=>{
    let q = `select * from staffmember;`
    try{
        connection.query(q,(err,staffmem)=>{
            if(err) throw err;
            console.log(staffmem);
            res.render("showstaff.ejs",{staffmem})
        })
    }catch(e){
        console.log(e);
        res.send("Some error occured");
    }
})

app.post("/staff",(req,res)=>{
    let {staffno,name,salary,position,gender,country,state,city} = req.body;
    let q = `insert into staffmember(staff_no,name,salary,position,sex,country,state,city) values(${staffno},'${name}',${salary},${position},'${gender}','${country}','${state}','${city}');`
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            res.redirect("/");
        })
    }catch(e){
        console.log(e);
        res.send("Error occured");
    }
    console.log(req.body);
})

app.get("/staff/new",(req,res)=>{
    res.render("index.ejs");
})