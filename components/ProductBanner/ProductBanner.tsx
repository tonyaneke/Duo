import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
// import { tailwind } from "tailwind-rn";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Logo from "../Logo/Logo";
import FavoriteIcon from "../SvgComponents/FavoriteIcon";
import Header from "../Header/Header";
import MoreIcon from "../SvgComponents/MoreIcon";

export default function ProductBanner() {
  const [liked, setLiked] = useState(false);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0.90"]}
        start={[0, 0]}
        end={[1, 0]}
        style={styles.backgroundContainer}
      >
        <ImageBackground
          source={require("../../assets/Images/shoepic.jpeg")}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.banner}>
            <View style={styles.topContainer}>
              <View style={[styles.icon, { transform: "rotate(90deg)" }]}>
                <MoreIcon width={35} height={35} />
              </View>
              <View>
                <Logo color="white" height={40} width={27} />
              </View>
              <Pressable
                style={styles.icon}
                onPress={() => setLiked((prev: boolean) => !prev)}
              >
                <FavoriteIcon liked={liked} />
              </Pressable>
            </View>
            <View style={styles.bottomContainer}>
              <View>
                <View>
                  <Header fontSize={40} title="Air Jordan" color="white" />
                </View>
                <View style={styles.content}>
                  <Header fontSize={34} title="40$" color="white" />
                  <Text style={styles.text}>/ Size S, M & L</Text>
                </View>
              </View>
              <View style={styles.extraImagesContainer}>
                <View>
                  <Image
                    source={require("../../assets/Images/extrashoe1.jpeg")}
                    style={styles.extraImages}
                  />
                </View>
                <View>
                  <Image
                    source={require("../../assets/Images/extrashoe2.jpeg")}
                    style={styles.extraImages}
                  />
                </View>
                <View>
                  <Image
                    source={require("../../assets/Images/extrashoe3.jpeg")}
                    style={styles.extraImages}
                  />
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 450,
    borderRadius: 30,
    marginTop: 50,
    overflow: "hidden",
  },
  image: {
    width: 330,
    height: 450,
    borderRadius: 30,
  },
  backgroundContainer: {
    flex: 1,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  banner: {
    borderColor: "black",
    justifyContent: "space-between",
    height: "100%",
    width: "100%",
    padding: 30,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  icon: {
    width: 44,
    height: 44,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
    top: 10,
  },
  text: {
    fontSize: 15,
    fontWeight: "500",
    lineHeight: 20,
    color: "lightgrey",
    paddingLeft: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginTop: 23,
  },
  extraImagesContainer: {
    height: 200,
    justifyContent: "space-between",
  },
  extraImages: {
    width: 60,
    height: 60,
    padding: 20,
    borderWidth: 3,
    borderColor: "#FFF",
    borderRadius: 10,
  },
});
