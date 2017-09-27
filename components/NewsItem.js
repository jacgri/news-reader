import React from 'react'
import { Text, TouchableHighlight, Image, View, StyleSheet } from 'react-native'

const NewsItem = (props) => {
  const { navigate } = props.navigation

  return (
    <TouchableHighlight onPress={() => navigate('Article', { id: props.id })}>
      <View style={styles.newsItem}>
        <Image source={{uri: props.thumbnail}} style={styles.thumbnail} />
        <View style={styles.title}>
          <Text>{props.title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  newsItem: {
    flex: 1,
    flexDirection: 'row'
  },

  thumbnail: {
    width: 140,
    height: 84
  },

  title: {
    flex: 1,
    padding: 10
  }
})

export default NewsItem
