import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { containerFull, goback, logo1 } from '../../../CommonCss/pagecss'
import {MaterialIcons} from '@expo/vector-icons'
import logo from '../../../../assets/logo.png'
import { formHead2, formHead3, formInput, formbtn } from '../../../CommonCss/formcss'


const Signup_EnterVerificationCode = ({navigation}) => {
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
    <Text style={formHead3}>
      A verification code has been sent to your email
    </Text>
    <TextInput placeholder="Enter 6-digit code here" style={formInput}
/>
    <Text style={formbtn}
    onPress={() => navigation.navigate
    ('Signup_ChooseUsername')}
    > Next</Text>
    </View>
  )
}

export default Signup_EnterVerificationCode

const styles = StyleSheet.create({})