import { View, Text,Image } from 'react-native'
import React from 'react'

const Welcome1 = () => {
  return (
    <View>
      <Image source={require("../../assets/images/patter.png")}
            style={{
                width: "100%",
                height: 350,
            }}
       />
       <Image source={require("../../assets/images/Logo.png")}
        style={{
            left: 150,
            bottom: 100
        }}
       />
    </View>
  )
}

export default Welcome1