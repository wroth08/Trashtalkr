import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card } from "react-native-material-design";

import Chat from "./components/Chat";
import BoxScore from "./components/BoxScore";
import ChatLog from "./components/ChatLog";
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
    this.backToLogin = this.backToLogin.bind(this);
    this.signup = this.signup.bind(this);
    this.setScores = this.setScores.bind(this);
    this.getNews = this.getNews.bind(this);
    this.state = {
      teamKeys: {
        1: "Atlanta Falcons",
        2: "Buffalo Bills",
        3: "Chicago Bears",
        4: "Cincinnati Bengals",
        5: "Cleveland Browns",
        6: "Dallas Cowboys",
        7: "Denver Broncos",
        8: "Detroit Lions",
        9: "Green Bay Packers",
        10: "Tennessee Titans",
        11: "Indianapolis Colts",
        12: "Kansas City Chiefs",
        13: "Oakland Raiders",
        14: "Los Angeles Rams",
        15: "Miami Dolphins",
        16: "Minnesota Vikings",
        17: "New England Patriots",
        18: "New Orleans Saints",
        19: "New York Giants",
        20: "New York Jets",
        21: "Philadelphia Eagles",
        22: "Arizona Cardinals",
        23: "Pittsburgh Steelers",
        24: "Los Angeles Chargers",
        25: "San Fransisco 49ers",
        26: "Seattle Seahawks",
        27: "Tampa Bay Buccaneers",
        28: "Washington Redskins",
        29: "Carolina Panthers",
        30: "Jacksonville Jaguars",
        33: "Baltimore Ravens",
        34: "Houston Texans"
      },
      messages: [],
      matchups: [],
      userData: { league_id: 0, team_id: 0 },
      tabs: {
        page: "login"
      },
      data: {
        hometeam: [],
        awayteam: []
      },
      articles: []
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
      this.setState({ tabs: { page: "chat" } });
    }
  }

  // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  getNews() {
    fetch(
      "https://newsapi.org/v1/articles?source=nfl-news&sortBy=top&apiKey=6a09aad960c94e169599cbf62f12183a"
    ).then(res => {
      res = res.json().then(res => {
        let articles = [...this.state.articles];
        res.articles.map(article => {
          articles.push(article);
        });
        this.setState({ articles: articles });
      });
    });
  }

  signUpPage() {
    this.setState({ tabs: { page: "signup" } });
  }

  // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  backToLogin() {
    this.setState({ tabs: { page: "login" } });
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
          this.getNews();
        });
      }
    });
  }

  // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  signup(username, name, league_id, password) {
    data = {
      username: username,
      password: password,
      name: name,
      league_id: league_id
    };
    fetch("https://shielded-tor-77262.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    }).then(res => {
      if (res.status === 200) {
        res = res.json().then(res => {
          this.login(username, password);
        });
      } else if (res.status === 500) {
        alert(
          "No username in that league matches your input. Check your ESPN account to see if it is a username or your email."
        );
      } else if (res.status === 404) {
        alert("Unknown error.");
      } else if (res.status === 501) {
        alert("That user account already exists.");
      }
    });
  }

  // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  show(league, team) {
    fetch("https://shielded-tor-77262.herokuapp.com/conversations/2")
      .then(res => res.json())
      .then(res => {
        let messages = res;
        this.setState({ messages: messages });
      })
      .then(() => {
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
            this.setState({ data: data });
            this.setScores(res);
          });
      });
  }

  // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  setScores(data) {
    let teamKeys = this.state.teamKeys;
    let matchups = this.state.matchups;
    data = data.boxscore;
    Object.keys(data.progames).map(game => {
      let matchup = {};
      matchup.homeScore = data.progames[game].homeScore;
      matchup.awayScore = data.progames[game].awayScore;
      matchup.homeProTeamId = teamKeys[data.progames[game].homeProTeamId];
      matchup.awayProTeamId = teamKeys[data.progames[game].awayProTeamId];
      matchups.push(matchup);
    });
    this.setState({ matchups: matchups });
  }

  // _-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-
  render() {
    if (this.state.tabs.page === "chat") {
      page = (
        <View>
          <ScrollView>
            <View style={styles.container}>
              <View style={styles.pad} />
              <ChatLog messages={this.state.messages} />
            </View>
          </ScrollView>
          <MaterialNavTabs changeTabs={this.changeTabs} />
        </View>
      );
    } else if (this.state.tabs.page === "boxscore") {
      page = (
        <View>
          <ScrollView>
            <View style={styles.chatButton} />
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
              <Home articles={this.state.articles} />
              <View style={styles.pad} />
            </View>
          </ScrollView>
          <MaterialNavTabs changeTabs={this.changeTabs} />
        </View>
      );
    } else if (this.state.tabs.page === "nfl") {
      page = (
        <View>
          <ScrollView>
            <View style={styles.homeCont}>
              <NflGameScores matchups={this.state.matchups} />
            </View>
          </ScrollView>
          <MaterialNavTabs changeTabs={this.changeTabs} />
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

          <MaterialNavTabs changeTabs={this.changeTabs} />
        </View>
      );
    } else if (this.state.tabs.page === "login") {
      page = (
        <Login
          login={this.login}
          signUpPage={this.signUpPage}
          getNews={this.getNews}
        />
      );
    } else if (this.state.tabs.page === "signup") {
      page = <SignUp signup={this.signup} backToLogin={this.backToLogin} />;
    }

    return <View>{page}</View>;
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
  },
  homeCont: {
    flex: 1,
    alignItems: "center",
    marginTop: 30
  },
  homepage: {
    backgroundColor: "#D9D6CF"
  }
});

{
  /* <ScrollView>
  <View style={styles.chatButton} />
  <ChatModel messages={this.state.messages} />
  <Card>
    <View style={styles.container}>
      <View style={styles.pad} />
      <Chat messages={this.state.messages} />
      <View style={styles.pad} />
    </View>
  </Card>
</ScrollView> */
}
