import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  ScrollView,
  TouchableHighlight
} from "react-native";

import t from "tcomb-form-native"; // 0.6.9

const Form = t.form.Form;

const User = t.struct({
  Email: t.String,
  Name: t.String,
  League: t.String,
  password: t.String,
  terms: t.Boolean
});

const options = {
  fields: {
    email: {
      error:
        "Without an email address how are you going to reset your password when you forget it?"
    },
    password: {
      error:
        "Choose something you use on a dozen other sites or something you won't remember"
    },
    terms: {
      label: "Agree to not get your feeling hurt"
    }
  }
};

export default class SignUp extends Component {
  handleSubmit = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    console.log("value: ", value);
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View>
            <Text
              style={{
                fontSize: 30,
                paddingBottom: 20,
                textAlign: "center"
              }}
            >
              ESPN Information
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
  }
});
// const styles = StyleSheet.create({
//   container: {
//     justifyContent: "center",
//     marginTop: 50,
//     padding: 20,
//     backgroundColor: "#ffffff"
//   }
// });
