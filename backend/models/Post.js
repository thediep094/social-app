const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema
const postSchema = new mongoose.Schema({

    userid:{
        type: Schema.Types.ObjectId,
        required :true,
    },
    profilepic: {
        type: String,
        default: '',
        // required: true
    },
    post_pic:{
        type: String,
        default: '',
    },
    postdescription:{
        type: String,
        default: '',
    },
    likes: [{
        userid: {
            type: Schema.Types.ObjectId,
            required :true,
        },
    }],
    comments: [{
        userid: {
            type: Schema.Types.ObjectId,
            required :true,
        },
        text: {
            type: String,
            required: true,
        }
    }],
}
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;