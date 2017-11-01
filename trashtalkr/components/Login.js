import React from 'react'
import { StyleSheet, Text, FlatList, Image, View, TextInput } from 'react-native'

class Login extends React.Component {

    render() {
        return (
            <View className="login" style={styles.login}>
                <Text style={styles.header}>Trashtalkr</Text>
                <View className="form" style={styles.form}>
                    <Text>Username</Text>
                    <TextInput style={styles.input1} autogrow={true}></TextInput>
                    <Text>Password</Text>
                    <TextInput style={styles.input2} autogrow={true}></TextInput>
                </View>
                <Image source={require('../poop.png')} style={styles.image}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    login: {
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'aqua'
    },
    input1: {
        width: '90%',
        marginBottom: 20,
        backgroundColor: 'lightgrey'
    },
    input2: {
        width: '90%',
        backgroundColor: 'lightgrey'
    },
    form: {
        backgroundColor: 'white',
        width: '90%',
        padding: '5%',
        borderColor: 'black',
        borderWidth: 5,
        margin: '5%'
    },
    header: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        marginTop: '25%'
    },
    image: {
        marginBottom: '5%'
    }
  });

export default Login
