import { View, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import HomeIcon from "../SvgComponents/HomeIcon";
import CollectionIcon from "../SvgComponents/Collection";
import CartIcon from "../SvgComponents/CartIcon";
import ProfileIcon from "../SvgComponents/ProfileIcon";

export default function MenuBar() {
  const [clicked, setClicked] = useState(false);

  const handlePress = () => {
    setClicked(true);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handlePress}>
        <HomeIcon clicked={clicked} />
      </Pressable>
      <Pressable onPress={handlePress}>
        <CollectionIcon clicked={clicked} />
      </Pressable>
      <Pressable onPress={handlePress}>
        <CartIcon clicked={clicked} />
      </Pressable>
      <Pressable onPress={handlePress}>
        <ProfileIcon clicked={clicked} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderWidth: 1,
    width: 330,
    backgroundColor: "rgba(18, 18, 18, 0.75)",
    height: 97,
    padding: 10,
    justifyContent: "space-around",
    alignItems: "center",
    gap: 70,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    shadowRadius: 30,
    elevation: 4,
    paddingHorizontal: 50,
  },
});
