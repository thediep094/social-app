import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import axios from 'axios';
import Post_Big_Card from '../Cards/Post_Big_Card';

const FollowersRandomPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:3000/getposts');
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {posts.map((item) => (
        <Post_Big_Card
          key={item._id}
          username={item.username}
          profile_image={item.profilepic}
          post_pic={item.post}
          likes={item.likes}
          comments={item.comments}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
  },
});

export default FollowersRandomPost;
