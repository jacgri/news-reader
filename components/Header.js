import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#005689'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default Header
