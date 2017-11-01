import React, { Component } from "react";
import BottomNavigation, { Tab } from "react-native-material-bottom-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";

class MaterialNavTabs extends Component {
  render() {
    return (
      <BottomNavigation
        labelColor="white"
        rippleColor="white"
        style={{
          height: 56,
          elevation: 8,
          position: "absolute",
          left: 0,
          bottom: 0,
          right: 0
        }}
        onTabChange={newTabIndex => alert(`New Tab at position ${newTabIndex}`)}
      >
        <Tab
          barBackgroundColor="#37474F"
          label="Home"
          icon={<Icon size={24} color="white" name="home" />}
        />
        <Tab
          barBackgroundColor="#00796B"
          label="Matchup"
          icon={<Icon size={24} color="white" name="group" />}
        />
        <Tab
          barBackgroundColor="#5D4037"
          label="NFL"
          icon={<Icon size={24} color="white" name="featured-play-list" />}
        />
        <Tab
          barBackgroundColor="#3E2723"
          label="Player Stats"
          icon={<Icon size={24} color="white" name="insert-chart" />}
        />
      </BottomNavigation>
    );
  }
}
export default MaterialNavTabs;
