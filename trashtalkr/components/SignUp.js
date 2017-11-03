import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  ScrollView,
  TouchableHighlight,
  Image
} from "react-native";

import t from "tcomb-form-native"; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  Username: t.String,
  Name: t.String,
  League: t.String,
  Password: t.String,
  terms: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,

  controlLabel: {
    normal: {
      fontSize: 18,
      fontWeight: "600"
    },
    // the style applied when a validation error occours
    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    }
  }
};

const options = {
  auto: "placeholders",
  fields: {
    username: {
      error: ""
    },
    name: {
      error: "You seriously dont know your password!?"
    },
    league: {
      error: "Hmmm.. we weren't able to locate that league id "
    },
    password: {
      type: "password",
      placeholder: "Password",
      error: "Password cannot be empty"
    },
    terms: {
      label: "Agree to not get your feelings hurt"
    }
  },
  stylesheet: formStyles
};

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonState: true,
      value: {}
    };
  }

  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    this.props.signup(value.Username, value.Name, value.League, value.Password);
  };

  handleBackToLogin = () => {
    this.props.backToLogin();
  };

  onChange = () => {
    const value = this._form.getValue();
    if (value) {
      this.setState({
        value,
        buttonState: false
      });
    }
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Image
              style={{ marginLeft: 90, width: 150, height: 50 }}
              source={{
                uri:
                  "http://1000logos.net/wp-content/uploads/2017/01/ESPN-Logo.png"
              }}
            />
            <Text
              style={{
                fontSize: 30,
                paddingBottom: 20,
                textAlign: "center"
              }}
            >
              Information
            </Text>
          </View>
          <Form
            ref={c => (this._form = c)} // assign a ref
            type={User}
            options={options}
            value={this.state.value}
            onChange={this.onChange}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit}
            disabled={this.state.buttonState}
            underlayColor="#99d9f4"
          >
            <Text style={styles.buttonText}>Sign Up!</Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={styles.button2}
            onPress={this.handleBackToLogin}
            underlayColor="#99d9f4"
          >
            <Text style={styles.buttonText}>Back to Login</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    alignSelf: "center"
  },
  button: {
    height: 36,
    backgroundColor: "#48BBEC",
    borderColor: "#48BBEC",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  button2: {
    height: 36,
    backgroundColor: "#09C068",
    borderColor: "#09C068",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center"
  }
});
