import { View, Pressable, StyleSheet } from "react-native";
import React from "react";
import CartIcon from "../SvgComponents/CartIcon";
import Header from "../Header/Header";

type AddToCartProps = {
  onPress: () => void;
};

export default function AddToCartButton({ onPress }: AddToCartProps) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <CartIcon clicked={true} />
      <View style={styles.btnText}>
        <Header title="Add To Cart" fontSize={24} color="white" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 330,
    height: 90,
    backgroundColor: "rgba(18, 18, 18, 0.75)",
    borderWidth: 1,
    justifyContent: "center",
    flexGrow: 1,
    borderRadius: 25,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    //  paddingHorizontal: 50,
  },
  btnText: {
    alignItems: "center",
    justifyContent: "center",
  },
});
