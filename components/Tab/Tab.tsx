import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Tab() {
  const [active, setActive] = useState(false);

  const handlePress = () => {
    setActive((prev) => !prev);
  };

  const activeStyle = {
    borderWidth: 0,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 5,
  };

  return (
    <TouchableOpacity
      style={[styles.container, active && activeStyle]}
      onPress={handlePress}
    >
      <View style={[styles.image, active && { backgroundColor: "#F2F2F2" }]}>
        <Image source={require("../../assets/Images/shoe.png")} />
      </View>
      <Text style={styles.text}>Shoe</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    backgroundColor: "transparent",
    width: 148,
    height: 70,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 20,
    borderRadius: 20,
    borderColor: "#797979",
    marginRight: 20,
    marginBottom: 10,
  },
  image: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
  },
});
