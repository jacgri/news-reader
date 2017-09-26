import React from 'react'
import { WebView } from 'react-native'

const ArticleScreen = (props) => {
  const url = props.navigation.state.params.id

  return (
    <WebView source={{uri: `https://theguardian.com/${url}`}} />
  )
}

export default ArticleScreen
