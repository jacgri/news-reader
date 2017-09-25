import React, { Component } from 'react'
import { View, Text } from 'react-native'

class HomeScreen extends Component {
  render () {
    return (
      <View>
        <Text>This is where the news listings will go</Text>
      </View>
    )
  }
}

HomeScreen.navigationOptions = {
  title: 'News'
}

export default HomeScreen
