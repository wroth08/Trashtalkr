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

const options = {
  auto: "placeholders",
  fields: {
    Username: {
      error:
        "Without a username, how do you expect to get your fantasy players?"
    },
    password: {
      error: "Choose something you use on a dozen other sites or something"
    },
    terms: {
      label: "Agree to not get your feeling hurt"
    }
  }
};

export default class SignUp extends Component {
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    this.clearForm();
    this.props.signup(value.Username, value.Name, value.League, value.Password);
  };

  clearForm = () => {
    // clear content from all textbox
    this.setState({ value: null });
  };

  handleBackToLogin = () => {
    this.props.backToLogin();
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
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit}
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
