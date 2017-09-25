import React, { Component } from 'react'
import { View, Text } from 'react-native'
import API_KEY from '../key'
import axios from 'axios'

class HomeScreen extends Component {
  constructor () {
    super()

    this.state = {
      news: []
    }
    this.handleNewsUpdate = this.handleNewsUpdate.bind(this)
  }

  handleNewsUpdate (response) {
    const results = response.data.response.results
    const news = []

    results.forEach(function (result) {
      const existingSection = news.find(function getBySectionName (section) {
        return section.title === result.sectionName
      })
      if (existingSection) {
        existingSection.data.push(result)
      } else {
        news.push({
          title: result.sectionName,
          data: [result]
        })
      }
    })
    this.setState({ news })
  }

  componentDidMount () {
    axios.get(`https://content.guardianapis.com/search?api-key=${API_KEY}`)
    .then(response => {
      this.handleNewsUpdate(response)
    })
    .catch(error => console.log(error))
  }

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
