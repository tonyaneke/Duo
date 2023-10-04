import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "../Header/Header";
import MoreIcon from "../SvgComponents/MoreIcon";
import ExplorerIcon from "../SvgComponents/ExplorerIcon";

export default function Section() {
  return (
    <View style={styles.container}>
      <View style={styles.divContainer}>
        <View style={styles.div}>
          <Header title="Top Sales" fontSize={24} />
        </View>
        <View style={styles.moreIcon}>
          <MoreIcon />
        </View>
      </View>
      <View style={styles.div2}>
        <Header title="Explorer" fontSize={24} color={"#A9A9A9"} />
        <View style={styles.explorerIcon}>
          <ExplorerIcon />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 58,
  },
  divContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    gap: 5,
  },
  div: {
    // enter styles here
  },
  div2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    gap: 5,
  },
  moreIcon: {
    width: 20,
    height: 20,
  },
  explorerIcon: {
    width: 20,
    height: 20,
  },
});
