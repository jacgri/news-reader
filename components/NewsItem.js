import React from 'react'
import { Text, TouchableHighlight } from 'react-native'

const NewsItem = (props) => {
  const { navigate } = props.navigation

  return (
    <TouchableHighlight onPress={() => navigate('Article', { id: props.id })}>
      <Text>{props.title}</Text>
    </TouchableHighlight>
  )
}

export default NewsItem
