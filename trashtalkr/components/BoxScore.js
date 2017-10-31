import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import BoxScoreRow from './BoxScoreRow'

class BoxScore extends React.Component {

    constructor() {
        super()
    }

    render () {
        let activeHome = this.props.data['hometeam'].filter( (player) => player[0]['slotCategoryId'] !== 20)
        let activeAway = this.props.data['awayteam'].filter( (player) => player[0]['slotCategoryId'] !== 20)
        let totalHome = activeHome.reduce( function (sum, current) {
            if (current[0]['score'] !== undefined) {
                let score = current[0]['score']
                return sum + score}
            }, 0).toFixed(1)
        console.log(totalHome)
        let totalAway = activeAway.reduce( function (sum, current) {
            if (current[0]['score'] !== undefined) {
                let score = current[0]['score']
                return sum + score}
            }, 0).toFixed(1)
        console.log(totalAway)
        return (
            <View className="boxscore" style={styles.boxscore}>
                <View className="myteam" style={styles.myteam}>
                {
                    activeHome.map( function (player) {
                        return <BoxScoreRow 
                        key={player[0]['lastname']}
                        firstname={player[0]['firstname']} 
                        lastname={player[0]['lastname']} 
                        score={player[0]['score']}/>
                    })
                }
                <BoxScoreRow firstname="Total" score={totalHome}></BoxScoreRow>
                </View>
                <View className="yourteam" style={styles.yourteam}>
                {
                   activeAway.map( function (player) {
                    return <BoxScoreRow 
                    key={player[0]['lastname']}
                    firstname={player[0]['firstname']} 
                    lastname={player[0]['lastname']} 
                    score={player[0]['score']}/>
                   })
                }
                <BoxScoreRow firstname="Total" score={totalAway}></BoxScoreRow>
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
        marginBottom: 10,
        justifyContent: 'center'
    },
    yourteam: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center'
    }
  })

export default BoxScore
