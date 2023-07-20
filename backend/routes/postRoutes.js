const express = require('express');
const router = express.Router();
const Post = require('./../models/Post');

// // Route to create a new post
// router.post('/create-post', async (req, res) => {
//   try {
//     const { userid, profilepic, post_pic, postdescription } = req.body;
//     const newPost = new Post({
//       userid,
//       profilepic,
//       post_pic,
//       postdescription,
//     });
//     await newPost.save();
//     res.status(201).json({ message: 'Post created successfully', post: newPost });
//   } catch (error) {
//     res.status(500).json({ error: 'Something went wrong', details: error.message });
//   }
// });

// Route to get all posts
router.get('/all-posts', async (req, res) => {
  try {
    const posts = await Post.find().populate({
      path: 'user'
    });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong', details: error.message });
  }
});

// Route to add a like to a post
router.post('/like-post', async (req, res) => {
  try {
    const { postId, userid } = req.body;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    post.likes.push({ userid });
    await post.save();
    res.status(200).json({ message: 'Post liked successfully', post });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong', details: error.message });
  }
});

// Route to add a comment to a post
router.post('/comment-post', async (req, res) => {
  try {
    const { postId, userid, text } = req.body;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    post.comments.push({ userid, text });
    await post.save();
    res.status(200).json({ message: 'Comment added successfully', post });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong', details: error.message });
  }
});

module.exports = router;
