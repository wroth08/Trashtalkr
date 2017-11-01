import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import BoxScoreRow from "./BoxScoreRow";

class BoxScore extends React.Component {
  constructor() {
    super();
    this.state = {
      yourTeam: "Your Shitty Team",
      theirTeam: "Their Shitty Team"
    };
  }

  render() {
            let activeHome = this.props.data['hometeam'].filter( (player) => player[0]['slotCategoryId'] !== 20)
         let activeAway = this.props.data['awayteam'].filter( (player) => player[0]['slotCategoryId'] !== 20)
         let totalHome = activeHome.reduce( function (sum, current) {
             if (current[0]['score'] !== undefined) {
                 let score = current[0]['score']
                 return sum + score}
             }, 0).toFixed(1)
         console.log(totalHome)
         let totalAway = activeAway.reduce( function (sum, current) {
             if (current[0]['score'] !== undefined) {
                 let score = current[0]['score']
                 return sum + score}
             }, 0).toFixed(1)
         console.log(totalAway)
    return (
      <View className="boxscore" style={styles.boxscore}>
        <Text style={styles.titleText}>
          {this.state.yourTeam}
          {"\n"}
          {"\n"}
        </Text>
        <Text style={styles.baseText}> Players </Text>

        <View className="myteam" style={styles.myteam}>
          {this.props.data["hometeam"].map(player => (
            <BoxScoreRow
              key={player[0]["lastname"]}
              firstname={player[0]["firstname"]}
              lastname={player[0]["lastname"]}
              score={player[0]["score"]}
            />
          ))}
          <BoxScoreRow />
          <BoxScoreRow firstname="Total: " score={totalHome}/>
        </View>

        <Text style={styles.titleText}>
          {this.state.theirTeam}
          {"\n"}
          {"\n"}
        </Text>
        <Text style={styles.baseText}> Players </Text>

        <View className="yourteam" style={styles.yourteam}>
          {this.props.data["awayteam"].map(player => (
            <BoxScoreRow

              key={player[0]['firstname'] + player[0]["lastname"]}

              firstname={player[0]["firstname"]}
              lastname={player[0]["lastname"]}
              score={player[0]["score"]}
            />
          ))}
          <BoxScoreRow />
          <BoxScoreRow firstname="Total: " score={totalAway}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxscore: {
    width: "100%",
    height: "90%"
  },
  myteam: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 10
  },
  yourteam: {
    flex: 1,
    backgroundColor: "white"
  },
  baseText: {
    marginLeft: 10,
    textDecorationLine: "underline",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default BoxScore;
