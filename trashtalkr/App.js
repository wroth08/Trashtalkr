import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card } from "react-native-material-design";
import ToolbarComponent from "react-native-toolbar-component";

import Chat from "./components/Chat";
import BoxScore from "./components/BoxScore";
import ChatModel from "./components/ChatModel";
// import PageTabs from "./components/PageTabs";
import MaterialNavTabs from "./components/MaterialNavTabs";
import Home from "./components/Home";
import Login from './components/Login'


export default class App extends React.Component {
  constructor() {
    super()
    this.login = this.login.bind(this)
    this.state = {
      messages: [],
      tabs: {
        page: "login"
      },
      data: {
        hometeam: [],
        awayteam: []
      }
    };
  }

  login(username, password) {
    data = {username: username, password: password}
    fetch('https://shielded-tor-77262.herokuapp.com/users/login',
    {method: 'POST', body: JSON.stringify(data), headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }})
    .then( (res) => {
      if (res.status === 200) {
        this.setState({tabs: {page: "boxscore"}})
      }
    })
  }

  componentDidMount() {
    fetch("https://shielded-tor-77262.herokuapp.com/conversations/2")
      .then(res => res.json())
      .then(res => {
        let messages = res;
        this.setState({ messages: messages });
      })
      .then(() => {
        fetch(
          "http://games.espn.com/ffl/api/v2/boxscore?leagueId=1608666&seasonId=2017&teamId=7&scoringPeriodId=8"
        )
          .then(res => res.json())
          .then(res => {
            let data = {};
            data["hometeam"] = res["boxscore"]["teams"][0][
              "slots"
            ].map(player => [
              {
                firstname: player.player.firstName,
                lastname: player.player.lastName,
                score: player.currentPeriodRealStats.appliedStatTotal,
                slotCategoryId: player.slotCategoryId
              }
            ]);
            data["awayteam"] = res["boxscore"]["teams"][1][
              "slots"
            ].map(player => [
              {
                firstname: player.player.firstName,
                lastname: player.player.lastName,
                score: player.currentPeriodRealStats.appliedStatTotal,
                slotCategoryId: player.slotCategoryId
              }
            ]);
            this.setState({ data: data });
          });
      });
  }

  render() {

    if (this.state.tabs.page === "chat") {
      page =  <ScrollView>
              <View style={styles.chatButton} />
              <ChatModel messages={this.state.messages} />
              <Card>
                <View style={styles.container}>
                  <View style={styles.pad} />
                  <Chat messages={this.state.messages} />
                  <View style={styles.pad} />
                </View>
              </Card>
            </ScrollView>
    } else if (this.state.tabs.page === "boxscore") {
          page =  <ScrollView>
              <View style={styles.chatButton} />
              <ChatModel messages={this.state.messages} />
              <Card>
                <View style={styles.container}>
                  <View style={styles.pad} />
                  <BoxScore data={this.state.data} />
                  <View style={styles.pad} />
                </View>
              </Card>
            </ScrollView>
    } else if (this.state.tabs.page === "home") {
      page = <ScrollView>
        <View style={styles.chatButton} />
        <ChatModel messages={this.state.messages} />
        <Card>
          <View style={styles.container}>
            <View style={styles.pad} />
            <Home/>
            <View style={styles.pad} />
          </View>
        </Card>
      </ScrollView>
    } else if (this.state.tabs.page === "login") {
      page = <Login login={this.login}/>
    }

    return (
      <View>
        {page}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  pad: {
    height: 50
  },
  chatButton: {
    alignContent: "center",
    height: 50,
    flexDirection: "row"
  }
});
