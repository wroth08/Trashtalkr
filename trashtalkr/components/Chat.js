import React from 'react'
import { StyleSheet, Text, FlatList, Image } from 'react-native'

import Message from './Message'

class Chat extends React.Component {
    render () {
        return (
            <FlatList
            data={this.props.messages}
            renderItem={({item}) => <Message key={item.string} message={item}></Message>}
          />
        )
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        backgroundColor: 'aqua',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        width: '100%',
        padding: 20,
        marginTop: 50,
    }
  })

export default Chat