const mongoose = require('mongoose');
const posts = require('../models/posts');

main().then(()=>{console.log("connection is successfull")}).catch(err=>{console.log(err)});
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/blogneed');
}

let samplePosts = [
    {
        title: "New Technologyies",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos consequatur molestiae ex, iusto numquam nisi possimus temporibus, et quaerat quibusdam voluptatum facere similique cupiditate laboriosam reiciendis? Nobis exercitationem quae veritatis",
        owner:"abhishek_12",
        category: "Technologies"
    },
    {
        title: "Old Bharat",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos consequatur molestiae ex, iusto numquam nisi possimus temporibus, et quaerat quibusdam voluptatum facere similique cupiditate laboriosam reiciendis? Nobis exercitationem quae veritatis",
        owner:"abhishek_45",
        category:"Politics"
    },
    {
        title: "New Bharat",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos consequatur molestiae ex, iusto numquam nisi possimus temporibus, et quaerat quibusdam voluptatum facere similique cupiditate laboriosam reiciendis? Nobis exercitationem quae veritatis",
        owner:"abhishek_34",
        category:"Politics"
    },
    {
        title: "Old Technologyies",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos consequatur molestiae ex, iusto numquam nisi possimus temporibus, et quaerat quibusdam voluptatum facere similique cupiditate laboriosam reiciendis? Nobis exercitationem quae veritatis",
        owner:"abhishek_23",
        category:"Technologies"
    }
]

posts.insertMany(samplePosts);