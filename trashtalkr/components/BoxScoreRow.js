import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

class BoxScoreRow extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>{this.props.firstname} {this.props.lastname}</Text>
                <Text>{this.props.score}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%'
    }
  })

export default BoxScoreRow