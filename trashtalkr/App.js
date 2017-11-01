import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import Chat from './components/Chat'
import BoxScore from './components/BoxScore'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      messages: [
      // {content: "You suck", time: "", sent_by: "Eddy"},
      // {content: "Try harder nerd", time: "", sent_by: "Eddy"},
      // {content: "Eat 💩", time: "", sent_by: "Eddy"},
      // {content: "My gran plays better than you", time: "", sent_by: "Eddy"},
      // {content: "Suck it loser", time: "", sent_by: "Eddy"},
      // {content: "Loooooooooooser", time: "", sent_by: "Eddy"},
      // {content: "lol", time: "", sent_by: "Eddy"},
      // {content: "The price good men pay for indifference to public affairs is to be ruled by evil men", time: "", sent_by: "Eddy"},
      // {content: "😂😂😂😂😂😂 😂😂😂😂😂 😂😂", time: "", sent_by: "Eddy"},
      // {content: "💩💩💩💩💩💩💩💩💩💩💩", time: "", sent_by: "Eddy"},
      // {content: "Maybe you should just give up", time: "", sent_by: "Eddy"},
      // {content: "Your team is trash", time: "", sent_by: "Eddy"},
      // {content: "Are you even trying?", time: "", sent_by: "Eddy"},
      // {content: "Just quit already", time: "", sent_by: "Eddy"},
      // {content: "Wow you suck", time: "", sent_by: "Eddy"},
    ],
    tabs: {
      page: 'chat',
    },
    data: {
      hometeam: [],
      awayteam: []
    }
    }
  }

  componentDidMount() {
    fetch('https://shielded-tor-77262.herokuapp.com/conversations/4')
      .then( (res) => res.json())
      .then( (res) => {
        console.log(res)
        let messages = res
        this.setState({messages: messages})
      }).then( () => {
      fetch('http://games.espn.com/ffl/api/v2/boxscore?leagueId=1608666&seasonId=2017&teamId=7&scoringPeriodId=8')
      .then( (res) => res.json())
      .then( (res) => {
        let data = {}
        data['hometeam'] = res['boxscore']['teams'][0]['slots'].map( (player) => [{firstname: player.player.firstName, lastname: player.player.lastName, score: player.currentPeriodRealStats.appliedStatTotal, slotCategoryId: player.slotCategoryId}])
        data['awayteam'] = res['boxscore']['teams'][1]['slots'].map( (player) => [{firstname: player.player.firstName, lastname: player.player.lastName, score: player.currentPeriodRealStats.appliedStatTotal, slotCategoryId: player.slotCategoryId}])
        this.setState({data: data})
      })})
}

  render() {

    let page = <Chat messages={this.state.messages}/>

    if (this.state.tabs.page === 'chat') {
      page = <Chat messages={this.state.messages}/>
    } else if (this.state.tabs.page === 'boxscore') {
      page = <BoxScore data={this.state.data}/>
    }

    return (
      <View style={styles.container}>
        <View style={styles.pad}></View>
        {page}
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
