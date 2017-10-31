import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import BoxScoreRow from './BoxScoreRow'

class BoxScore extends React.Component {

    constructor() {
        super()
    }

    render () {

        return (
            <View className="boxscore" style={styles.boxscore}>
                <View className="myteam" style={styles.myteam}>
                {
                    this.props.data['hometeam'].map( (player) => <BoxScoreRow 
                    key={player[0]['lastname']}
                    firstname={player[0]['firstname']} 
                    lastname={player[0]['lastname']} 
                    score={player[0]['score']}/>)
                }
                </View>
                <View className="yourteam" style={styles.yourteam}>
                {
                    this.props.data['awayteam'].map( (player) => <BoxScoreRow 
                    key={player[0]['lastname']}
                    firstname={player[0]['firstname']} 
                    lastname={player[0]['lastname']} 
                    score={player[0]['score']}/>)
                }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    boxscore: {
        width: '100%',
        height: '90%'
    },
    myteam: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 10
    },
    yourteam: {
        flex: 1,
        backgroundColor: 'white'
    }
  })

export default BoxScore
