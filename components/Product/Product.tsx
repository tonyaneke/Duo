import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React, { useState } from "react";
import FavoriteIcon from "../SvgComponents/FavoriteIcon";

export default function Product() {
  const [liked, setLiked] = useState(false);
  const [focus, setFocus] = useState(false);

  const handleLiked = () => setLiked((prev) => !prev);

  return (
    <Pressable
      style={[
        styles.container,
        focus && { borderWidth: 2, borderColor: "#797979" },
      ]}
      onPress={() => setFocus((prev) => !prev)}
    >
      <View style={styles.image}>
        <Image
          source={require("../../assets/Images/cartImage2.jpeg")}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <View style={styles.details}>
          <Text style={styles.productName}>Shoe</Text>
          <Text style={styles.price}>$40</Text>
        </View>
        <Pressable onPress={handleLiked}>
          <FavoriteIcon liked={liked} />
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 230,
    padding: 10,
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 4,
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: 140,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 16,
  },
  price: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 16,
    color: "#A9A9A9",
  },
  details: {
    gap: 5,
  },
});
