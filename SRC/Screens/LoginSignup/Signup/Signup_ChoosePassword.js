import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss'
import {MaterialIcons} from '@expo/vector-icons'
import logo from '../../../../assets/logo.png'
import { formHead2, formInput, formbtn } from '../../../CommonCss/formcss'


const Signup_ChoosePassword = ({navigation}) => {
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
    <Text style={formHead2} >Choose a strong password</Text>
    <TextInput placeholder="Enter Your Password" style={formInput} secureTextEntry
/>
<TextInput placeholder="Confirm password" style={formInput} secureTextEntry
/>
    <Text style={formbtn}
    onPress={() => navigation.navigate
    ('Signup_AccountCreated')}
    > Next</Text>
    </View>
  )
}

export default Signup_ChoosePassword

const styles = StyleSheet.create({})