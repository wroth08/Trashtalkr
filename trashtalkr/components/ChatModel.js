import React, { Component } from "react";
import { Icon, Card } from "react-native-material-design";
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
      <ScrollView>
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
                      color: "#1289fe",
                      paddingTop: 10,
                      paddingBottom: 10,
                      marginBottom: 40,
                      borderRadius: 12,
                      borderWidth: 1.5,
                      borderColor: "#d6d7da",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: 15
                    }}
                  >
                    Back to your team
                  </Text>
                </TouchableHighlight>

                <View style={styles.body}>
                  <View style={styles.messageBubbleLeft}>
                    {this.props.messages.map(message => (
                      <Text style={styles.messageBubble}>
                        {"\n"}
                        <Icon
                          name="chat-bubble-outline"
                          style={{
                            color: "#1289fe",
                            textShadowColor: "#d6d7da",
                            textShadowOffset: { width: 3, height: 2 }
                          }}
                        />
                        {"  " + message.name + ": "}
                        {message.string}
                      </Text>
                    ))}
                  </View>
                </View>
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
                color: "#1289fe",
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
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  //ChatView

  body: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white"
  },

  messageBubble: {
    marginTop: 10,
    marginRight: 1,
    marginBottom: 1,
    paddingLeft: 10,
    paddingBottom: 10,
    color: "black",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default ChatModel;
