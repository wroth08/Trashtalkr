import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import Button from 'react-native-button'
class Home extends React.Component {

  constructor() {
      super()
  }

    render () {
        return (
          <View style={styles.container}>
          <Text style={styles.title}>Welcome to Trashtalkr, Mr. Derutro</Text>
            <View style={styles.viewone}>
              <Button onPress={() => this.props.changeViews(0)}>
                <Text style={styles.textone}>Weekly Matchup</Text>
              </Button>
            </View>
            <View style={styles.viewthree}>
              <Button onPress={() => this.props.changeViews(1)}>
                <Text style={styles.textthree}>NFL Game Scores</Text>
              </Button>
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
    width: '90%',
    margin: 0
  },
  viewone: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    flex: 1,
    height: 165
  },
  viewthree: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    flex: 1,
    height: 165
  },
  textone: {
    fontWeight: 'bold',
    color: '#F5F5F5'
  },
  textthree: {
    fontWeight: 'bold',
    color: 'aqua'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 30,
    alignSelf: 'center'
  }
});

export default Home
