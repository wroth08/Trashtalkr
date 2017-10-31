import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

class Message extends React.Component {
    render () {
        return (
                <View className="message" style={styles.messageBody}>
                    <Text>{this.props.message.name} {this.props.time}</Text>
                    <View className='messageBody' style={styles.messageBody}>
                        <View className="triangle" style={styles.triangle}></View>
                        <Text style={styles.messageContent}>{this.props.message.string}</Text>
                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    messageContent: {
        fontSize: 20,
        // alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 5,
        padding: 5,
        borderRadius: 8,
        maxWidth: '95%',
        flexWrap: 'wrap',
    },
    message: {
        borderBottomWidth: 2,
        borderColor: 'white',
        marginBottom: 10,
        marginTop: 10,
        justifyContent: 'flex-start'
    },
    triangle: {
        width: 0,
        height: 0,
        borderTopWidth: 5,
        borderTopColor: 'transparent', 
        borderRightWidth: 10,
        borderRightColor: 'white',
        borderBottomWidth: 5,
        borderBottomColor: 'transparent',
        marginTop: 5
    },
    messageBody: {
        flexDirection: 'row',
    }
  })

export default Message
