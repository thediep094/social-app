import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import logo from './../../../../assets/logo.png'
import { containerFull, logo1 } from '../../../CommonCss/pagecss'
import { formHead, formInput, formTextLinkRight } from '../../../CommonCss/formcss'
const Login = () => {
  return (
    <View style = {containerFull}>
      <Image source={logo} style={logo1}/>
      <Text style={formHead}>Login</Text>
      <TextInput placeholder='Enter Your Email' style={formInput}/>
      <TextInput placeholder='Enter Your Password' style={formInput}
      secureTextEntry = {true}/>
       
       <Text style={formTextLinkRight}
                onPress={() => navigation.navigate('ForgotPassword_EnterEmail')}
            >Forgot Password?</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})