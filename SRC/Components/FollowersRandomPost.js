import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Post_Big_Card from '../Cards/Post_Big_Card'

const FollowersRandomPost = () => {

    let data = [
        {
            id: 1,
            username: 'huy',
            profile_image: 'https://img.pokemondb.net/artwork/large/charizard.jpg',
            image: "https://img.pokemondb.net/artwork/large/charizard.jpg",
            likes: [
                "huy1",
                "huy2"
            ],
            comments: [
                {
                    id: 1,
                    username: 'huy1',
                    comment: 'nice post'
                },
                {
                    id: 2,
                    username: 'huy2',
                    comment: 'Your look awesome'
                }
            ]
        },
        {
            id: 2,
            username: 'huy1',
            profile_image: 'https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png',
            image: "https://vn.portal-pokemon.com/play/resources/pokedex/img/pm/cf47f9fac4ed3037ff2a8ea83204e32aff8fb5f3.png",

            likes: [
                "huy1"
            ],
            comments: [
                {
                    id: 1,
                    username: 'huy1',
                    comment: 'nice post'
                },
                {
                    id: 2,
                    username: 'huy2',
                    comment: 'Your look awesome'
                }
            ]
        },
         
    ]

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