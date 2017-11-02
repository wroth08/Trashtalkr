import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card } from "react-native-material-design";

import Chat from "./components/Chat";
import BoxScore from "./components/BoxScore";
import ChatModel from "./components/ChatModel";
import SignUp from "./components/SignUp";
import MaterialNavTabs from "./components/MaterialNavTabs";
import Home from "./components/Home";
import NflGameScores from "./components/NflGameScores";
import PlayerStats from "./components/PlayerStats";
import Login from "./components/Login";

// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
export default class App extends React.Component {
  constructor() {
    super();
    this.changeTabs = this.changeTabs.bind(this);
    this.login = this.login.bind(this);
    this.show = this.show.bind(this);
    this.signUpPage = this.signUpPage.bind(this);
    this.state = {
      messages: [],
      userData: { league_id: 0, team_id: 0 },
      tabs: {
        page: "nfl"
      },
      data: {
        hometeam: [],
        awayteam: []
      }
    };
  }

  // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  changeTabs(index) {
    if (index === 0) {
      this.setState({ tabs: { page: "home" } });
    } else if (index === 1) {
      this.setState({ tabs: { page: "boxscore" } });
    } else if (index === 2) {
      this.setState({ tabs: { page: "nfl" } });
    } else if (index === 3) {
      this.setState({ tabs: { page: "playerstats" } });
    }
  }

  // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  signUpPage() {
    this.setState({ tabs: { page: "signup" } });
  }

  // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  login(username, password) {
    data = { username: username, password: password };
    fetch("https://shielded-tor-77262.herokuapp.com/users/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then(res => {
      if (res.status === 200) {
        res = res.json().then(res => {
          this.setState({
            userData: { league_id: res[0].league_id, team_id: res[0].team_id }
          });
          this.setState({ tabs: { page: "boxscore" } });
          this.show(this.state.userData.league_id, this.state.userData.team_id);
        });
      }
    });
  }

  // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  componentDidMount() {}

  show(league, team) {
    fetch("https://shielded-tor-77262.herokuapp.com/conversations/2")
      .then(res => res.json())
      .then(res => {
        let messages = res;
        this.setState({ messages: messages });
      })
      .then(() => {
        console.log(
          `http://games.espn.com/ffl/api/v2/boxscore?leagueId=${league}&seasonId=2017&teamId=${team}&scoringPeriodId=8`
        );
        fetch(
          `http://games.espn.com/ffl/api/v2/boxscore?leagueId=${league}&seasonId=2017&teamId=${team}&scoringPeriodId=8`
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
            data["awayteam"].map(player => {
              if (player[0].score === undefined) {
                player[0].score = 0;
              }
            });
            data["hometeam"].map(player => {
              if (player[0].score === undefined) {
                player[0].score = 0;
              }
            });
            console.log(data["awayteam"]);
            this.setState({ data: data });
          });
      });
  }

  // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  render() {
    if (this.state.tabs.page === "chat") {
      page = (
        <View>
          <ScrollView>
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
          <MaterialNavTabs changeTabs={this.changeTabs} />
        </View>
      );
    } else if (this.state.tabs.page === "boxscore") {
      page = (
        <View>
          <ScrollView>
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
          <MaterialNavTabs changeTabs={this.changeTabs} />
        </View>
      );
    } else if (this.state.tabs.page === "home") {
      page = (
        <View>
          <ScrollView style={styles.homepage}>
            <View style={styles.homeCont}>
              <View style={styles.pad} />
              <Home />
              <View style={styles.pad} />
            </View>
          </ScrollView>
        </View>
      );
    } else if (this.state.tabs.page === "nfl") {
      page = (
        <View>
          <ScrollView>
            <View style={styles.homeCont}>
              <NflGameScores />
            </View>
          </ScrollView>
        </View>
      );
    } else if (this.state.tabs.page === "playerstats") {
      page = (
        <View>
          <ScrollView style={styles.homepage}>
            <View style={styles.homeCont}>
              <View style={styles.pad} />
              <PlayerStats />
              <View style={styles.pad} />
            </View>
          </ScrollView>
        </View>
      );
    } else if (this.state.tabs.page === "login") {
      page = <Login login={this.login} signUpPage={this.signUpPage} />;
    } else if (this.state.tabs.page === "signup") {
      page = <SignUp />;
    }

    return <View>{page}</View>;
  }
}

// _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
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
  },
  homeCont: {
    flex: 1,
    alignItems: "center",
    marginTop: 30
  },
  homepage: {
    backgroundColor: "aqua"
  }
});
