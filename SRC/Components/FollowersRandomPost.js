import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Post_Big_Card from '../Cards/Post_Big_Card'

const FollowersRandomPost = () => {

    let data = []

    // console.log(data[0].username)
    return (
        <ScrollView style={styles.container}>
            {
                data.map((item) => {
                    return (
                        <Post_Big_Card
                            key={item.id}
                            username={item.username}
                            profile_image={item.profile_image}
                            post_pic={item.image}
                            likes={item.likes}
                            comments={item.comments}
                        />
                    )
                })
            }
        </ScrollView>
    )
}

export default FollowersRandomPost

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
    }
})