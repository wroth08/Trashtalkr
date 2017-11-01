import React from 'react'
import { StyleSheet, Text, FlatList, Image, View, TextInput, Button} from 'react-native'

class Login extends React.Component {

    constructor() {
        super()
        this.loginFunction = this.loginFunction.bind(this)
        this.state = { username: '', password: '' };
    }

    loginFunction() {
        this.props.login(this.state.username, this.state.password)
    }

    render() {
        return (
            <View className="login" style={styles.login}>
                <Text style={styles.header}>Trashtalkr</Text>
                <View className="form" style={styles.form}>
                    <Text>Username</Text>
                    <TextInput style={styles.input1} autogrow={true} onChangeText={(text) => this.setState({username: text})}
                    value={this.state.username}>
                    </TextInput>
                    <Text>Password</Text>
                    <TextInput style={styles.input2} autogrow={true} onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}></TextInput>
                    <Button style={styles.button} title="Log In" onPress={this.loginFunction}></Button>
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
        backgroundColor: '#93CCEA'
    },
    input1: {
        width: '90%',
        marginBottom: 20,
        backgroundColor: 'lightgrey'
    },
    input2: {
        width: '90%',
        backgroundColor: 'lightgrey',
        marginBottom: 20
    },
    form: {
        backgroundColor: 'white',
        width: '90%',
        padding: '5%',
        borderColor: 'black',
        borderWidth: 5,
        margin: '5%',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    header: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
        marginTop: '15%'
    },
    image: {
        marginBottom: '5%'
    }, 
    button: {
    }
  });

export default Login;
