import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { Card } from "react-native-material-design";

class NflGameScores extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.image}>
            <Image
              source={{
                uri:
                  "http://img50.laughinggif.com/pic/HTTP2ZjMDMuZGV2aWFudGFydC5uZXQvZnM3MS9mLzIwMTQvMTEzLzIvZS9uZmxfM2RfbG9nb19hbmltYXRpb25fYnlfc3luZGlrYXRhX25wLWQ3ZnBwdzkuZ2lm.gif"
              }}
              style={{ width: 100, height: 135 }}
            />
          </View>
          <View>
            <View>
              <Text style={styles.header}>NFL Scores</Text>
            </View>
              {
                this.props.matchups.map( (matchup) => {
                  return (
                    <Card key={matchup.homeProTeamId} style={styles.matchup}>
                      <Text style={styles.text}>{matchup.homeProTeamId + ": " + matchup.homeScore}</Text>
                      <Text style={styles.text}>{matchup.awayProTeamId + ": " + matchup.awayScore}</Text>
                    </Card>
                  )
                })
              }
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
    backgroundColor: "#ffffff"
  },
  header: {
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    marginBottom: "10%"
  },
  text: {
    fontSize: 20,
    paddingTop: 3,
    paddingBottom: 3,
    color: "black",
  },
  image: {
    alignSelf: "center",
    marginBottom: "5%"
  },
  matchup: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 50,
    paddingLeft: 50
  }
});

export default NflGameScores;
