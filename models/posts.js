const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    owner:{
        type: String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
})

const post = mongoose.model("post",postSchema);

module.exports = post;