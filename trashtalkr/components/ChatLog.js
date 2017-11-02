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

class ChatLog extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.image} />
          <View>
            <View>
              <Text style={styles.header}>Player Stats</Text>
            </View>
            <Card>
              <View>
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
            </Card>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 10,
    padding: 5,
    backgroundColor: "#ffffff",
    flex: 1,
    minHeight: 700
  },
  header: {
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    marginBottom: "10%"
  },
  text: {
    fontSize: 15,
    paddingTop: 3,
    paddingBottom: 3,
    color: "black"
  },
  image: {
    alignSelf: "center",
    marginBottom: "5%"
  },
  card: {
    paddingBottom: 40
  }
});

export default ChatLog;
