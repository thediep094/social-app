import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { containerFull, goback } from '../../../CommonCss/pagecss'
import {MaterialIcons} from '@expo/vector-icons'
const Signup_EnterEmail = ({navigation}) => {
  return (
    <View style={containerFull}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")} style={goback}>
        <MaterialIcons name="arrow-back-ios" size={24} color="gray" />
          <Text style={{
            color: 'gray',
            fontSize: 16,
            marginLeft: 10,
            fontWeight:'bold'
          }}>Go Back
          </Text>
        </TouchableOpacity>
    </View>
  )
}

export default Signup_EnterEmail

const styles = StyleSheet.create({})