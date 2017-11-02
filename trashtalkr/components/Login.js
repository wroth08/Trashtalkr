import React from "react";
import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  View,
  TextInput,
  Button,
  TouchableHighlight
} from "react-native";
import t from "tcomb-form-native"; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  username: t.String,
  password: t.String
});

const options = {
  auto: "placeholders"
};

class Login extends React.Component {
  constructor() {
    super();
    this.handleLogin = this.handleLogin.bind(this);
    this.state = { username: "", password: "" };
  }

  // loginFunction() {
  //   this.props.login(this.state.username, this.state.password);
  // }

  handleLogin = () => {
    const value = this._form.getValue();
    console.log("value: ", value);
    this.props.login(value.username, value.password);
  };

  handleSignUp = () => {
    this.props.signUpPage();
  };

  render() {
    return (
      <View className="login" style={styles.container}>
        <Text style={styles.header}>Trashtalkr</Text>
        <View />
        <Form
          ref={c => (this._form = c)} // assign a ref
          type={User}
          options={options}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleLogin}
          underlayColor="#99d9f4"
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.button2}
          onPress={this.handleSignUp}
          underlayColor="#99d9f4"
        >
          <Text style={styles.buttonText}>Sign Up!</Text>
        </TouchableHighlight>
        <Button title="score" onPress={this.props.setScores}/>
        <Image source={require("../poop.png")} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#93CCEA"
  },
  input1: {
    width: "90%",
    marginBottom: 20,
    backgroundColor: "lightgrey"
  },
  input2: {
    width: "90%",
    backgroundColor: "lightgrey",
    marginBottom: 20
  },
  form: {
    backgroundColor: "white",
    width: "90%",
    padding: "5%",
    borderColor: "black",
    borderWidth: 5,
    margin: "5%",
    justifyContent: "center"
    // alignItems: 'center'
  },
  header: {
    alignSelf: "center",
    fontSize: 60,
    fontWeight: "bold",
    color: "black",
    marginBottom: "10%"
  },
  image: {
    alignSelf: "center",
    marginBottom: "5%",
    marginTop: 30
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },
  button: {
    height: 36,
    backgroundColor: "#09C068",
    borderColor: "#09C068",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  button2: {
    height: 36,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  }
});

export default Login;
