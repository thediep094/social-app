import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Post_Big_Card from '../Cards/Post_Big_Card';

const FollowersRandomPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/getposts');
      const data = await response.json();
      setPosts(data);
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
          profile_image={item.profile_image}
          post_pic={item.post_pic}
          likes={item.likes}
          comments={item.comments}
          post_description={item.postdescription}
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
