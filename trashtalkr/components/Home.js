import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

class Home extends React.Component {

  constructor() {
      super()
  }

    render () {
        return (
          <View style={styles.container}>
          <Text style={styles.title}>Welcome to Trashtalkr, Mr. Derutro</Text>
            <View style={styles.viewone}>
              <Text style={styles.textone}>Weekly Matchup</Text>
            </View>
            <View style={styles.viewtwo}>
              <Text style={styles.texttwo}>Chat</Text>
            </View>
            <View style={styles.viewthree}>
              <Text style={styles.textthree}>NFL Game Scores</Text>
            </View>
            <View style={styles.viewfour}>
              <Text style={styles.textfour}>Player Stats and Visualizations</Text>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    width: '90%'
  },
  viewone: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    flex: 1,
    height: 120
  },
  viewtwo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    height: 120
  },
  viewthree: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    flex: 1,
    height: 120
  },
  viewfour: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    flex: 1,
    height: 120
  },
  textone: {
    fontWeight: 'bold',
    color: '#F5F5F5'
  },
  texttwo: {
    fontWeight: 'bold',
    color: 'yellow'
  },
  textthree: {
    fontWeight: 'bold',
    color: 'aqua'
  },
  textfour: {
    fontWeight: 'bold',
    color: '#7FFF00'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 30,
    alignSelf: 'center'
  }
});

export default Home
