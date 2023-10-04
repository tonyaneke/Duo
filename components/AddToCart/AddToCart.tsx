import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function AddToCart() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Image
            source={require("../../assets/Images/shoeImg.jpg")}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Added to favorites</Text>
        </View>
        <TouchableOpacity style={styles.icon}>
          <FontAwesome name="arrow-right" size={25} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: 330,
    height: 200,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 30,
    backgroundColor: "rgba(40, 224, 81, 0.9) ",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    //  borderWidth: 1,
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: "#ffffff",
    lineHeight: 24,
  },
});
