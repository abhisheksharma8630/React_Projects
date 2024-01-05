const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    googleId:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    displayName:{
        type:String,
        required:true,
    }
},{timestamps:true})
const user = mongoose.model("user",userSchema);

module.exports = user;