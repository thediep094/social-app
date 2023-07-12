import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss'
import {MaterialIcons} from '@expo/vector-icons'
import logo from '../../../../assets/logo.png'
import { formHead2, formInput, formbtn } from '../../../CommonCss/formcss'


const Signup_ChooseUsername = ({navigation}) => {
  return (
    <View style={containerFull}>
    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={goback}>

        <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
        <Text style={{
            color: 'gray',
            fontSize: 16,
        }}

        >Go Back</Text>

    </TouchableOpacity>

    <Image source={logo} style={logo1} />
    <Text style={formHead2}>Choose a Username</Text>
    <TextInput placeholder="Enter Your Username" style={formInput}

    onChangeText={(text) => {
    setEmail(text)
}}
/>
    <Text style={formbtn}
    onPress={() => navigation.navigate
    ('Signup_ChoosePassword')}
    > Next</Text>
    </View>
  )
}

export default Signup_ChooseUsername

const styles = StyleSheet.create({})