import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import Tabs from "react-native-tabs";

class PageTabs extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "second" };
  }
  render() {
    return (
      <View style={styles.container}>
        <Tabs
          selected={this.state.page}
          style={{ backgroundColor: "white" }}
          selectedStyle={{ color: "red" }}
          onSelect={el => this.setState({ page: el.props.name })}
        >
          <Text name="home">Home</Text>
          <Text
            name="weekly matchup"
            selectedIconStyle={{ borderTopWidth: 2, borderTopColor: "red" }}
          >
            Weekly Matchup
          </Text>
          <Text name="nfl">NFL Gamescore</Text>
          <Text name="player stats" selectedStyle={{ color: "green" }}>
            Player Stats
          </Text>
        </Tabs>
      </View>
    );
  }
}

{
  /* <Text style={styles.instructions}>
  Selected page: {this.state.page}
</Text> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

export default PageTabs;
