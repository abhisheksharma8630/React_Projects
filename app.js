const express = require('express');
const session = require('express-session');
const cors = require('cors');
const posts = require('./models/posts');
const mongoose = require('mongoose');
const app = express();
const passport = require('passport');

app.use(cors({
    origin:'http://localhost:5173',
    methods:'GET,POST,PUT,DELETE',
    credentials:true,
}));


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie:{
        expires: Date.now() + 60*60*60*1000,
        maxAge: 60*60*60*1000,
        httpOnly:true,
    }
}));


app.use(passport.initialize());
app.use(passport.session());
require('./auth');
const isLoggedIn = (req,res,next)=>{
    req.user ? next() : res.sendStatus(401);
}


main().then(()=>{console.log("connection is successfull")}).catch(err=>{console.log(err)});
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/blogneed');
}

const clientUrl = "http://localhost:5173";

app.listen(8080,()=>{
    console.log("App is listening");
})


app.get("/signup",passport.authenticate('google',{scope:['email','profile']}));

app.get("/google/callback",passport.authenticate('google',{
    successRedirect: 'http://localhost:5173',
    failureRedirect: 'http://localhost:5173',
}))
app.get("/auth/failure",(req,res)=>{
    res.send("Authentication Failed !!! ")
})

app.get("/login/success",(req,res)=>{
    if(req.user){
        res.status(200).json({message:"user login",user:req.user});
    }else{
        res.status(400).json({message:"Not Authorized"});
    }
});

app.get("/logout",(req,res)=>{
    req.logout((err)=>{
        if(err) return err;
        res.redirect('http://localhost:5173');
    });
})

app.post("/new",isLoggedIn,async (req,res)=>{
    try{
    let {title,category,username,description} = req.body.postForm;
    let post = new posts({
       title:title,
       description:description,
       category:category,
       owner:username,
    })
    await post.save();
    res.status(200).send("post saved");
    }catch (error){
        res.status(303).send(error);
    }
})

app.get("/index", async (req,res)=>{
    try {
        const allPosts = await posts.find();
        // console.log(req.locals.currUser);
        res.send({allPosts});      
    } catch (error) {
        console.log(error);
    }
})

app.get("/category/:cate",async(req,res)=>{
    let {cate} = req.params;
    let result = await posts.find({category:cate});
    res.send(result);
})

app.get("/:id",async (req,res)=>{
    let {id} = req.params;
    let result = await posts.findById(id);
    res.send(result);
})
app.delete("/:id",isLoggedIn,async(req,res)=>{
    let{id} = req.params;
    try {
        let result = await posts.findById(id);
        if(result.owner === req.body.currUser){
            await posts.findByIdAndDelete(id);
            res.send("deleted");
        }else{
            res.sendStatus(401);
        }
    } catch (error) {
        res.status(303).send("Error Occured");
    }
})

app.put("/:id",async(req,res)=>{
    let {id} = req.params;
    try {
        let result = await posts.findById(id);
        if(result.owner === req.body.currUser){
            await posts.findByIdAndUpdate(id,req.body.post);
            res.status(202).send("work fine");
        }else{
            res.status(401).send();
        }
    } catch (error) {
        res.status(303).send("Error Occured");
    }
})
