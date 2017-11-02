import React, { Component } from "react";
import { Icon, Card } from "react-native-material-design";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  ScrollView,
  Image
} from "react-native";

class ChatModel extends React.Component {
  // state = {
  //   modalVisible: true
  // };

  // setModalVisible(visible) {
  //   this.setState({ modalVisible: visible });
  // }

  render() {
    return (
      <View>
        <View
          style={{
            marginTop: 5,
            marginBottom: 5,
            marginLeft: 30,
            marginRight: 30
          }}
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
              <View style={styles.body}>
                <View style={styles.messageBubbleLeft}>
                  {this.props.messages.map(message => (
                    <Text key={message.string} style={styles.messageBubble}>
                      {"\n"}
                      <Image
                        source={{
                          uri: "https://m.popkey.co/68b58b/z9mGe.gif"
                        }}
                        style={{ width: 70, height: 70 }}
                      />
                      {"" + message.name + ": "}
                      {message.string}
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
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
    marginTop: 2,
    marginRight: 1,
    marginBottom: 1,
    paddingLeft: 1,
    paddingBottom: 2,
    color: "black",
    fontSize: 20,
    fontWeight: "bold"
  }
});

{
  /* <Modal
  animationType="slide"
  transparent={false}
  visible={this.state.modalVisible}
  onRequestClose={() => console.log("ok")}
></Modal> */
}

//
// <TouchableHighlight
//   onPress={() => {
//     this.setModalVisible(!this.state.modalVisible);
//   }}
// >
//   <Text
//     style={{
//       color: "#1289fe",
//       paddingTop: 10,
//       paddingBottom: 10,
//       marginBottom: 40,
//       borderRadius: 12,
//       borderWidth: 1.5,
//       borderColor: "#d6d7da",
//       fontWeight: "bold",
//       textAlign: "center",
//       fontSize: 15
//     }}
//   >
//     Back to your team
//   </Text>
// </TouchableHighlight>

{
  /* <TouchableHighlight
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
</TouchableHighlight> */
}

export default ChatModel;
