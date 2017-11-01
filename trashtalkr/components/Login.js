import React from 'react'
import { StyleSheet, Text, FlatList, Image } from 'react-native'

class Login extends React.Component {
    render() {
        return (
            <View>
                <TextInput>Username</TextInput>
                <TextInput>Password</TextInput>
            </View>
        )
    }
}

export default Login