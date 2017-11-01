import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

class Home extends React.Component {

  constructor() {
      super()
  }

    render () {
        return (
          <View style={{flexDirection: 'column', justifyContent: 'center', flex: 1, width: '95%', backgroundColor: 'aqua'}}>
            <View style={{justifyContent:'center', alignItems:'center', backgroundColor: 'blue', flex: 1, height: 110}}>
              <Text style={{fontWeight: 'bold', color: '#F5F5F5'}}>Weekly Matchup</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center', backgroundColor: 'red', flex: 1, height: 110}}>
              <Text style={{fontWeight: 'bold', color: 'yellow'}}>Chat</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center', backgroundColor: 'green', flex: 1, height: 110}}>
              <Text style={{fontWeight: 'bold', color: 'aqua'}}>NFL Game Scores</Text>
            </View>
            <View style={{justifyContent:'center', alignItems:'center', backgroundColor: 'purple', flex: 1, height: 110}}>
              <Text style={{fontWeight: 'bold', color: '#7FFF00'}}>Player Stats and Visualizations</Text>
            </View>
          </View>
        )
    }
}
export default Home
