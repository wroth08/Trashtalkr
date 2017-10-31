import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  ScrollView
} from "react-native";

class ChatModel extends React.Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View
        style={{
          marginTop: 5,
          marginBottom: 5,
          marginLeft: 30,
          marginRight: 30
        }}
      >
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
        >
          <View
            style={{
              marginTop: 60,
              marginLeft: 30,
              marginRight: 30,
              height: 50
            }}
          >
            <View>
              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text
                  style={{
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderRadius: 12,
                    borderWidth: 1.5,
                    borderColor: "red",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontSize: 15
                  }}
                >
                  Back to your shitty team
                </Text>
              </TouchableHighlight>

              {this.props.messages.map(message => (
                <Text>
                  {"\n"}
                  {message.content}
                </Text>
              ))}
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}
        >
          <Text
            style={{
              color: "red",
              paddingTop: 10,
              paddingBottom: 10,
              borderRadius: 10,
              borderWidth: 1.5,
              borderColor: "#d6d7da",
              fontWeight: "bold",
              textAlign: "center",
              fontSize: 15
            }}
          >
            Trash Talkr Chat
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default ChatModel;
