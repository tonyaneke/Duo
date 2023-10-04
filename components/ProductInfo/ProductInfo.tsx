import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import Header from "../Header/Header";
import MoreIcon from "../SvgComponents/MoreIcon";

export default function ProductInfo() {
  const [selctedSize, setSelectedSize] = useState("Small");

  return (
    <View>
      <View>
        <Header title="Product Info" fontSize={24} color="#F26F3F" />
      </View>
      <View style={styles.details}>
        <View style={styles.size}>
          <View style={styles.image}>
            <Image
              source={require("../../assets/Images/shoeSize.png")}
              resizeMode="contain"
              style={{ width: 20, height: 20 }}
            />
          </View>
          <Text style={styles.text}>S, M & L</Text>
        </View>
        <View style={styles.color}>
          <View style={styles.image}>
            <Image
              source={require("../../assets/Images/shoeColor.png")}
              resizeMode="contain"
              style={{ width: 20, height: 20 }}
            />
          </View>
          <Text style={styles.text}>Black & white</Text>
        </View>
      </View>
      <View>
        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>Description </Text>
        </View>
        <View>
          <Text style={styles.descriptionText}>
            Introducing the Air Jordan: where style meets performance. These
            iconic sneakers combine cutting-edge technology with timeless
            design, ensuring you look and feel your best on and off the court.
            Elevate your footwear game with Air Jordan – the ultimate fusion of
            fashion and function.
            {"\n"}
            {"\n"}
            Elevate your sneaker game to new heights with the Air Jordan
            collection. Crafted with meticulous attention to detail, these
            iconic kicks are more than just shoes; they're a statement of style
            and athleticism. Featuring a blend of premium materials and
            innovative cushioning technology, Air Jordans provide unrivaled
            comfort and support for your daily adventures.
            {"\n"}
            {"\n"}
            Whether you're hitting the court, strolling the streets, or making a
            bold fashion statement, Air Jordans are the perfect choice. Join the
            ranks of basketball legends and fashion-forward trendsetters who
            have made Air Jordan a global icon. Step into a world where
            tradition meets innovation, where history meets the future – step
            into Air Jordan. Elevate your game, elevate your style.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  details: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    gap: 30,
  },
  size: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  color: {
    flex: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  image: {
    margin: 5,
    backgroundColor: "#FFF",
    padding: 5,
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    color: "#333",
  },
  description: {
    marginVertical: 15,
  },
  descriptionTitle: {
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 32,
    color: "#333",
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    textAlign: "justify",
    color: "#888",
  },
});
