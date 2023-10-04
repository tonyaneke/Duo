import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MainProfileIcon from "../../components/SvgComponents/MainProfileIcon";
import List from "../../components/List/List";
import MenuBar from "../../components/MenuBar/MenuBar";

export default function Profile() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
        <View style={styles.backIcon}>
          <FontAwesome name="arrow-left" size={24} />
        </View>
        <View>
          <View style={styles.profileIcon}>
            <MainProfileIcon />
            <Text style={styles.profileText}>Hussy's Profile</Text>
          </View>
        </View>
        <View style={styles.displayPicture}>
          <View style={styles.imageContainer}>
            <ImageBackground
              source={require("../../assets/Images/profileImage.jpg")}
              resizeMode="cover"
              style={styles.image}
            >
              <View style={styles.innerBorder}></View>
            </ImageBackground>
          </View>
        </View>
        <View style={styles.list}>
          <List name="heart" title="My Favorites" />
        </View>
        <View style={styles.lists}>
          <List name="wechat" title="Contact Support" />
        </View>
        <View style={styles.lists}>
          <List name="opencart" title="My Shopping Cart" />
        </View>
        <View style={styles.lists}>
          <List name="user" title="My Fvaorites" />
        </View>
      </ScrollView>
      <View style={styles.menuBar}>
        <MenuBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F5F5F5",
    height: "100%",
  },
  backIcon: {
    position: "absolute",
    marginTop: 60,
    marginLeft: 25,
  },
  profileIcon: {
    position: "relative",
    zIndex: 10,
    top: 50,

    alignItems: "center",
  },
  profileText: {
    paddingTop: 10,
    fontSize: 34,
    fontWeight: "700",
    color: "#222324",
    lineHeight: 40,
  },
  image: {
    width: 300,
    height: 450,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    top: 70,
    width: 200,
    height: 300,
    backgroundColor: "yellow",
    borderRadius: 100,
    overflow: "hidden",
  },
  innerBorder: {
    top: 87,
    left: 60,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    borderWidth: 2,
    borderColor: "white",
    width: 180,
    height: 275,
    borderRadius: 100,
  },
  displayPicture: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    marginHorizontal: 24,
    marginTop: 100,
  },
  lists: {
    marginHorizontal: 24,
    marginTop: 20,
  },
  menuBar: {
    marginHorizontal: 24,
    position: "absolute",
    zIndex: 1000,
    bottom: 30,
  },
});
