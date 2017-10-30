import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import Chat from './components/Chat'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      messages: [
      {content: "You suck", time: "", sent_by: "Eddy"},
      {content: "Try harder nerd", time: "", sent_by: "Eddy"},
      {content: "Eat 💩", time: "", sent_by: "Eddy"},
      {content: "My gran plays better than you", time: "", sent_by: "Eddy"},
      {content: "Suck it loser", time: "", sent_by: "Eddy"},
      {content: "Loooooooooooser", time: "", sent_by: "Eddy"},
      {content: "lol", time: "", sent_by: "Eddy"},
      {content: "The price good men pay for indifference to public affairs is to be ruled by evil men", time: "", sent_by: "Eddy"},
      {content: "😂😂😂😂😂😂 😂😂😂😂😂 😂😂", time: "", sent_by: "Eddy"},
      {content: "💩💩💩💩💩💩💩💩💩💩💩", time: "", sent_by: "Eddy"},
      {content: "Maybe you should just give up", time: "", sent_by: "Eddy"},
      {content: "Your team is trash", time: "", sent_by: "Eddy"},
      {content: "Are you even trying?", time: "", sent_by: "Eddy"},
      {content: "Just quit already", time: "", sent_by: "Eddy"},
      {content: "Wow you suck", time: "", sent_by: "Eddy"},
    ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.pad}></View>
        <Chat messages={this.state.messages}/>
        <View style={styles.pad}></View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'aqua'
  },
  pad: {
    height: 50
  }
})
